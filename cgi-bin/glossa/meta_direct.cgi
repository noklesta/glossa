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
use lib ('/home/httpd/html/glossa/pm/');
use Glossa;
use Data::Dumper;
use strict;
use POSIX qw(locale_h);

setlocale('LC_TYPE', "norweigan");

select(STDOUT);
$|=1;

print "Content-type: text/html\n\n";
print "<html>\n<head>\n</head>\n<body>\n";



my $cgi = CGI->new;
# FIXME: this should be done in module
my %cgi_hash;
my @prms = $cgi->param();

my $test = 1;

#catch all the post vars in a hash

foreach my $p (@prms) {
    my $p2 = $p;
    $p2 =~ s/\[\]$//;
    my @vals = $cgi->param($p);
    if($test){ print "<br />$p - @vals";  }
    $cgi_hash{$p2}=\@vals;
}


# creates hash de le hash

my $in = Glossa::create_cgi_hash2(\%cgi_hash);
my %in = %$in;

my %meta = $in{"meta"};
print %meta;
foreach my $key (keys(%meta)){ print "<br />$key::".$meta{$key};  }


my $CORPUS = $in{'query'}->{'corpus'}->[0];



my $conf = Glossa::get_conf_file($CORPUS);
my %conf = %$conf;

my $corpus_mode = $conf{'corpus_mode'};

my $speech_corpus = 0;

if($corpus_mode eq 'speech'){
    $speech_corpus = 1;
}


my $dsn = "DBI:mysql:database=$conf{'db_name'};host=$conf{'db_host'}";
my $dbh = DBI->connect($dsn, $conf{'db_uname'}, $conf{'db_pwd'}, {RaiseError => 1})          ||              die $DBI::errstr;

my $format = CGI::param('format');

my ($subcorpus,$sql_query_nl,$texts_allowed) = Glossa::create_tid_list(\%conf, \%in, $CORPUS);


my $text_table = uc($CORPUS) . "text";
my $author_table = uc($CORPUS) . "author";
my $class_table = uc($CORPUS) . "class";

my %texts_allowed = %$texts_allowed;
my @tids = keys %texts_allowed;


my $infs = @tids; # joel 20071211

my @meta_class = split(/ /, $conf{'meta_class'});
foreach my $m (@meta_class) {
    $m = $class_table . "." . $m;
}
my $class_select = join(", ", @meta_class);

my @meta_author = split(/ /, $conf{'meta_author'});
foreach my $m (@meta_author) {
    $m = $author_table . "." . $m;
}
my $author_select = join(", ", @meta_author);


print "<div id='stats'>\n</div>\n";

print "Informanter: $infs<br />"; # joel 20071211

print "<hr>\n<table style='border-width:1px;border-style:outset;border-color:#afaeae;padding:0px;margin:0px'>\n";
print "<tr>\n";
my @meta_text = split(/ /, $conf{'meta_text'});

foreach my $m (@meta_text) {
    print "<td>\n<b>", $m, "</b>\n</td>\n";
    #$m = $text_table . "." . $m;
}
my $text_select = join(", ", @meta_text);

my @meta_text_sum = split(/ /, $conf{'meta_text_sum'});

if ($class_select) {
    print "<td>\n<b>class</b>\n</td>\n";
}
if ($author_select) {
    print "<td>\n<b>author</b>\n</td>\n";
}


print "<tr>\n";


my @tids_sorted = sort @tids;


my %stats;


my $bg = "#fff";
foreach my $tid (@tids_sorted) {

    my $table = $text_table;;
    if($speech_corpus){ $table = $author_table; }
    my $sql_query = "SELECT * FROM $table WHERE tid = '$tid';";

    my $sth = $dbh->prepare($sql_query);
    $sth->execute  || die "Error fetching data: $DBI::errstr";

    my $r = $sth->fetchrow_hashref;
    my %r = %$r;

    my @r;
    foreach my $col (@meta_text) {

	push @r, $r{$col}
    }

    foreach my $col (@meta_text_sum) {
	my $cont = $r{$col};
	$stats{$col}->{$cont}+=$r{'wordcount'};
    }
    $stats{'ALL'}->{'ALL'}+=$r{'wordcount'};

    if ($bg eq "#fff") { # joel 20071211
	$bg = "#ddd";
    }
    else {
	$bg = "#fff";
    }
    print "<tr style='background-color:$bg'>\n";
    print "<td>\n";
    print join("</td>\n<td>\n", @r);
    print "</td>\n";
    
    if ($class_select) {
	# FIXME: at det er den første kommer an på cgi.conf
	my $sql = "SELECT $class_select from $class_table where $class_table.tid='$r[0]';";
	
	my $sth2 = $dbh->prepare($sql);
	$sth2->execute  || die "Error fetching data: $DBI::errstr";
	
	print "<td>\n";
	my @res;
	while (my ($r2) = $sth2->fetchrow_array) { push @res, $r2 }
	print join("<hr>\n", @res);
	print "</td>\n";
	
    }

    if ($author_select) {
	# FIXME: at det er den første kommer an på cgi.conf
	my $sql = "SELECT $author_select from $author_table where $author_table.tid='$r[0]';";
	
	my $sth2 = $dbh->prepare($sql);
	$sth2->execute  || die "Error fetching data: $DBI::errstr";
	
	print "<td>\n";
	my @res;
	while (my (@r2) = $sth2->fetchrow_array) { my $tmp = join(" ", @r2); push @res, $tmp; }
	print join("<hr>\n", @res);
	print "</td>\n";
	
    }    

    print "<tr>\n";
    
}



print "</table>\n";


while (my ($k, $v) = each %stats) {
    print "<b>$k</b>\n";
    print "<table>\n";

    my @list;
    my $total;
    while (my ($k2, $v2) = each %$v) {
	$total+=$v2;
	push @list, [$k2, $v2];
    }

    my @list_sorted = sort {$a->[0] cmp $b->[0]} @list;

    foreach my $entry (@list_sorted) {
	my $pct = ($entry->[1]/$total)*100;
	$pct = sprintf("%.1f", $pct);
	print "<tr>\n<td width=200>\n" . $entry->[0] . "</td>\n<td>\n" . $entry->[1] . "</td>\n<td>\n" . $pct . "</td>\n</tr>\n";
    }

    print "</table>\n<br>\n\n";

}
print "</body>\n</html>\n";
