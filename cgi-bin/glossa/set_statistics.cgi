#    Copyright 2009 The Text Laboratory, University of Oslo.
#
#    This file is part of Glossa.
#
#    Glossa is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    Glossa is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with Glossa.  If not, see <http://www.gnu.org/licenses/>.

#!/usr/bin/perl

use CGI;
use DBI;

use GD;
use GD::Graph::bars;
use GD::Graph::hbars;
use GD::Graph::pie;
use GD::Text;
use Data::Dumper;

use lib("/home/httpd/html/glossa/pm");
use Glossa;

my $corpus=CGI::param('corpus');
my $conf = Glossa::get_conf_file($corpus);
my %conf = %$conf;

my $user = $ENV{'REMOTE_USER'}; 
my $hits_dir = $conf{'config_dir'} . "/" . $corpus . "/hits/" . $user . "/";

my $dsn = "DBI:mysql:database=$conf{'db_name'};host=$conf{'db_host'}";
$dbh = DBI->connect($dsn, $conf{'db_uname'}, $conf{'db_pwd'}, {RaiseError => 1})          ||              die $DBI::errstr;


print "Content-type: text/html\n\n";


# update from CGI values
my $set_id = CGI::param('set');
my $action = CGI::param('action');
my $var = CGI::param('var');
my ($vartable,$varcol) = split(/\./,$var);
my $var2 = CGI::param('var2');
my ($vartable2,$varcol2) = split(/\./,$var2);

my $trans = CGI::param('trans');
my @trans = split(/\s*,\s*/,$trans);
my %trans;
foreach my $transitem (@trans) {
    my ($f,$t) = split(/\s*=\s*/,$transitem);
    $trans{$f}=$t;
}

my $sets_table = uc($corpus) . "annotation_sets";
my $values_table = uc($corpus) . "annotation_values";
my $annotations_table = uc($corpus) . "annotations";
my $variable_table = uc($corpus) . $vartable;
my $variable_table2 = uc($corpus) . $vartable2;



print "<html><head></head><body>";
print "<script language=\"JavaScript\" src=\"", $conf{'htmlRoot'}, "/js/misc.js\"></script>";

print "<table><tr><td valign=top>";
print "<td width=50>&nbsp;</td>";


my %storedvals;
my $storedvals;
my @stored = CGI::param('stored');
foreach my $stored (@stored) {
    $storedvals=1;
    $stored = $hits_dir . "/" . $stored;
    my @datfiles = <$stored*.dat>;
    foreach my $datfile (@datfiles) {
	open (DAT, $datfile);

	while (<DAT>) {
	    if (/cpos=(\d+)/) {
		$storedvals{$1}=1;
	    }
	}
    }
}

my $gd_text = GD::Text->new(ptsize=>40) or die GD::Text::error();

my @all;

my $n;

my @variable_values;
if ($var) {
    my $sth = $dbh->prepare(qq{ SELECT distinct $varcol FROM $variable_table;});
    $sth->execute  || die "Error fetching data: $DBI::errstr";
    while (my ($value) = $sth->fetchrow_array) {
	if ($value eq '') { $value = "_"}
	push @variable_values, $value;
    }
}

my @variable_values2;
if ($var2) {
    my $sth = $dbh->prepare(qq{ SELECT distinct $varcol2 FROM $variable_table2;});
    $sth->execute  || die "Error fetching data: $DBI::errstr";
    while (my ($value) = $sth->fetchrow_array) {
	if ($value eq '') { $value = "_"}
	push @variable_values2, $value;
    }
}


if ($set_id) {
    my $sth = $dbh->prepare(qq{ SELECT id, name FROM $sets_table WHERE id='$set_id';});
    $sth->execute  || die "Error fetching data: $DBI::errstr";
    while (my ($id, $name) = $sth->fetchrow_array) {
	print "<h3>Annotation set: \"$name\"</h3>";
	printvals($id,$name);
	foreach my $value (@variable_values) {
	    #print $value, "<br>";
	    printvals($id,$name,$value);
	    foreach my $value2 (@variable_values2) {
		#print $value2, "<br>";
		printvals($id,$name,$value,$value2);
	    }
	}
    }
    if ($set_id eq '__FREE__') {
	printvals("__FREE__", "Free annotation");    
	foreach my $value (@variable_values) {
	    printvals("__FREE__", "Free annotation",$value);
	}
    }

}
else {
    my $sth = $dbh->prepare(qq{ SELECT id, name FROM $sets_table;});
    $sth->execute  || die "Error fetching data: $DBI::errstr";
    while (my ($id, $name) = $sth->fetchrow_array) {
	printvals($id,$name);
	foreach my $value (@variable_values) {
	    printvals($id,$name,$value);
	}
    }

}

print "<hr>";
print "Summary: <br>";
my @x; my @y;
foreach my $el (@all) {
    push @x, $el->[0];
    push @y, $el->[1];
}
   
my $x_len = @x;
my $width = 60 + ($x_len * 35);

my $graph = GD::Graph::bars->new($width, 400);
$graph->set_y_axis_font(GD::gdLargeFont);
$graph->set_x_axis_font(GD::gdGiantFont);

$graph->set( 
	    x_label           => '',
	    y_label           => '',
	    x_labels_vertical => 1,
	    title             => ''
	   ) or die $graph->error;

next unless (@x and @y);
my @data = (\@x,\@y);

my $gd = $graph->plot(\@data) or die $graph->error;

my $t = time();

my $picname = $conf{'dat_files'} . $t . "collstat_ALL.png";
my $picname_out = $conf{'download_url'} . $t . "collstat_ALL.png";
print "<img src='$picname_out'></img>";


open (PIC, ">$picname");
binmode PIC;
print PIC $gd->png;
close PIC;
chmod 0775,$picname;







sub printvals {
    my ($id,$name,$varvalue,$varvalue2) = @_;

    print "<pp>";
    print "<br>ID: $id<br>NAME:$name<br>VARVALUE:$varvalue<br>VARVALUE2:$varvalue2<br>";
    print "</pp>";

    $n++;

    my %values;


    my $sth = $dbh->prepare(qq{ SELECT id, value_name FROM $values_table where set_id='$id';});
    $sth->execute  || die "Error fetching data: $DBI::errstr";
    while (my ($id, $name) = $sth->fetchrow_array) {
	$values{$id}=$name;
    }


    my %stats;
    my $sth = $dbh->prepare(qq{ SELECT value_id,tid,start FROM $annotations_table WHERE set_id='$id';});	
    $sth->execute  || die "Error fetching data: $DBI::errstr";
    while (my ($value_id,$tid,$start) = $sth->fetchrow_array) {
	next if ($storedvals and !($storedvals{$start}));

	my $name = $values{$value_id};
	if ($trans{$name}) { $name = $trans{$name} }

	if ($varvalue) {
	    my $sth2 = $dbh->prepare(qq{ SELECT $varcol FROM $variable_table WHERE tid='$tid';});	
	    $sth2->execute  || die "Error fetching data: $DBI::errstr";
	    my ($variable_tid) = $sth2->fetchrow_array;
	    next unless ($variable_tid eq $varvalue);
	    if ($varvalue2) {
		my $sth2 = $dbh->prepare(qq{ SELECT $varcol2 FROM $variable_table2 WHERE tid='$tid';});	
		$sth2->execute  || die "Error fetching data: $DBI::errstr";
		my ($variable_tid2) = $sth2->fetchrow_array;
		next unless ($variable_tid2 eq $varvalue2);
		$stats{$name}++;
	    }
	    else {
		$stats{$name}++;		
	    }
	}
	else {
	    $stats{$name}++;	    
	}

    }



    my @stats;
    my $total;
    while (my ($k,$v) = each %stats) {
	push @stats, [$k,$v];
	$total += $v;
    }

    my @stats_sorted = sort { $b->[1] <=> $a->[1]} @stats;

    my @x;
    my @y;
    
    next unless ($total > 0);

    

    my $all_prefix;
    if ($varvalue) { print " <i>variable1:</i> $varcol = $varvalue"; $all_prefix=$varvalue . "_" ; }
    if ($varvalue2) { print " <i>variable2:</i> $varcol2 = $varvalue2"; $all_prefix.=$varvalue2 . "_" ;}
    print "<br><table>";
    print "<tr><td><b>value</b></td><td><b>no&nbsp;</b></td><td><b>percent</td></tr>";
    foreach my $el (@stats_sorted) {
	my $name = $el->[0];

	
	print "<tr><td>", $name, "</td><td>", $el->[1], "</td><td>", sprintf("%.2f",($el->[1]/$total)*100), "</td></tr>";

	my $name_pref = $all_prefix . $name;
	push @all, [$name_pref,$el->[1]];

	unshift @x, $name;
	unshift @y, $el->[1];
    }
    push @all, ['',0];

    print "</table>";
    
    my $x_len = @x;
    my $width = 60 + ($x_len * 35);

    my $graph = GD::Graph::bars->new($width, 400);
    $graph->set_y_axis_font(GD::gdLargeFont);
    $graph->set_x_axis_font(GD::gdLargeFont);

    $graph->set( 
		x_label           => '',
		y_label           => '',
		x_labels_vertical => 1,
		title             => ''
	       ) or die $graph->error;



    next unless (@x and @y);
    my @data = (\@x,\@y);



    my $gd = $graph->plot(\@data) or die $graph->error;

    my $t = time();

    my $picname = $conf{'dat_files'} . "collstat_" . $n . "_" . $t . ".png";
    my $picname_out = $conf{'download_url'} . "collstat_" . $n . "_" . $t .  ".png";
    print "<img src='$picname_out'></img>";


    open (PIC, ">$picname");
    binmode PIC;
    print PIC $gd->png;
    close PIC;
    chmod 0775,$picname;

    print "<hr>";
    
}


# - finn verdier+navn i tabell
# - for hver: tell opp
# - sorter etter frekvens
# - print ut





print "<td valign='top' width=200 style='background-color:#efefef;border-width:1px;border-style:solid;border-color:#afaeae'>";

#print "<b>Help:</b><br>";
print "<p>";

print "</td></tr></table>";




print "</body></html>";
