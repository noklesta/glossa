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
use strict;
use lib("/home/httpd/html/glossa/pm/");
use Glossa;
use File::Copy;

select(STDOUT);
$|=1;

print "Content-type: text/html\n\n";

my $corpus=CGI::param('corpus');
my $user = $ENV{'REMOTE_USER'}; 
 
my $conf = Glossa::get_conf_file($corpus);
my %conf = %$conf;

print "<script language=\"JavaScript\" src=\"", $conf{'htmlRoot'}, "/js/misc.js\"></script>";

my $hits_dir = $conf{'config_dir'} . "/" . $corpus . "/hits/" . $user . "/";


my $action = CGI::param('action');

if ($action eq 'delete') {

    my $for_deletion = $hits_dir . "/" . CGI::param('for_deletion');


    print "DELETING: $for_deletion<br>";

    my $backupdir = $hits_dir . "/backup"; 
    mkdir($backupdir);
    `mv $for_deletion* $backupdir`;

}

if ($action eq 'rename') {

    my $newname = CGI::param('newname');
    my $for_renaming = CGI::param('for_renaming');    

    if ($newname eq 'null') { $newname = 0 }

    if ($newname) {
    
	print "RENAMING $for_renaming to $newname<br>";

	    
	my $rename;
	my $conf = $hits_dir . "/" . $for_renaming . ".conf";    
	my $newconf = $conf . ".new";
	open (NEWCONF, ">$newconf");
	    
	open (CONF, $conf);
	while (<CONF>) {
	    chomp;
	    my ($key,$val) = split(/\s*=\s*/, $_);
	    if (($key eq "name")) {
		next if ($val eq $newname);
		$val = $newname;
		$rename = 1;
	    }
	    next unless $key;
	    print NEWCONF $key, " = ", $val, "\n";
	}
	close CONF;
	close NEWCONF;
	
	if ($rename) {
	    move($newconf,$conf);
	}
	

    }
    else {
	print "Can't rename to nothing.";
    }
    


}


if ($action eq 'join') {

    my %sets;

    my $newname = CGI::param('newname');
    my @join = CGI::param('joinme');    

    print "joining ";
    print join("|",@join);
    print ". New name: $newname<br>";

    my $new_query_id = time() . "_" . int(rand 100);


    my $firstjoin = $hits_dir . "/" . $join[0] . ".conf";
    my $newconf = $hits_dir . "/" . $new_query_id . ".conf";
    open (FIRST, $firstjoin);
    open (NEW, ">$newconf");
    while (<FIRST>) {
	my ($key,$val) = split(/\s*=\s*/, $_);
	if ($key eq 'name') {
	    print NEW "name=", $newname, "\n";
	}
	else {
	    print NEW;
	}
    }


    my $firsttop = $hits_dir . "/" . $join[0] . ".top";
    my $newtop = $hits_dir . "/" . $new_query_id . ".top";
    open (FIRST, $firsttop);
    open (NEW, ">$newtop");
    while (<FIRST>) {
	s/query_id=\d+_\d+/query_id=$new_query_id/;
	s/<b>.*?<\/b>//;
	s/.*Hits found.*//;
	s/^Results pages.*/<br>/;
	print NEW;
    }


    my $new_dat_id=0;
    foreach my $query_id (@join) {

	$query_id = $hits_dir . "/" . $query_id;

	my @files = <$query_id*.dat>;
	foreach my $file (@files) {
	    $new_dat_id++;
	    my $newfilename = $hits_dir . "/" .  $new_query_id . "_" . $new_dat_id . ".dat";
	    print "cp $file $newfilename<br>";
	    copy($file,$newfilename);
	    print NEW "<a id='page_$new_dat_id' href='http://omilia.uio.no/cgi-bin/glossa//show_page_dev.cgi?n=", $new_dat_id, "&query_id=", $new_query_id, "&corpus=$corpus'>", $new_dat_id, "</a>";
	}
    }

}







if ($action eq 'saveas') {


    my $newname = CGI::param('newname');
    my $new_query_id = time() . "_" . int(rand 100);
    my $query_id = CGI::param('for_saveas');

    my $query_id_path = $hits_dir . "/" . $query_id;

    my @files = <$query_id_path*>;
    foreach my $file (@files) {
	my $nfile = $file;
	$nfile =~ s/$query_id/$new_query_id/;
	copy($file,$nfile);
    }

    my $top = $hits_dir . "/" . $query_id . ".top";
    my $newtop = $hits_dir . "/" . $new_query_id . ".top";
    open (TOP, $top);
    open (NEWTOP, ">$newtop");

    while (<TOP>) {
	s/query_id=$query_id/query_id=$new_query_id/g;
	print NEWTOP;
    }

    my $conf = $hits_dir . "/" . $query_id . ".conf";
    my $newconf = $hits_dir . "/" . $new_query_id . ".conf";
    open (CONF, $conf);
    open (NEWCONF, ">$newconf");

    while (<CONF>) {
	my ($key,$val) = split(/\s*=\s*/, $_);
	if ($key eq 'name') {
	    print NEWCONF "name = ", $newname, "\n";
	}
	else {
	    print NEWCONF;	    
	}

    }

}







print "<form action='http://omilia.uio.no/cgi-bin/glossa/get_hits.cgi' method='GET'><table border=1>";
print "<td>name</th><th>delete</th><th>rename</th><th>copy</th><th>add</th>";

print "<input type='hidden' value='join' name='action'></input>";
print "<input type='hidden' value='$corpus' name='corpus'></input>";

my @confs=();
my @confs = <$hits_dir/*.conf>;
foreach my $conf (@confs) {



    my $query_id = $conf;
    $query_id =~ s/\.conf$//;
    $query_id =~ s/.*\///;


    my $name;
    open (CONF, $conf);
    while (<CONF>) {


	chomp;
        my ($key,$val) = split(/\s*=\s*/, $_);
	if ($key eq "name") {
	    $name=$val;
	}
    }
    close CONF;

    next unless $name;

    print "<tr><td><a href='", $conf{'cgiRoot'}, "/show_page_dev.cgi?query_id=$query_id&name=$name&corpus=$corpus&n=1'>$name</a></td>";
    print "<td><a href='", $conf{'cgiRoot'}, "/get_hits.cgi?action=delete&for_deletion=$query_id&corpus=$corpus'>*</a></td>";
    print "<td>to: <input type='text' id='renameto$name' size=9></input> <a id='rename$name' href='", $conf{'cgiRoot'}, "/get_hits.cgi?action=rename&for_renaming=$query_id&corpus=$corpus' onClick='getNewName(\"$name\",\"rename\")'>*</a></td>";

    print "<td>to: <input type='text' id='saveasto$name' size=9></input> <a id='saveas$name' href='", $conf{'cgiRoot'}, "/get_hits.cgi?action=saveas&for_saveas=$query_id&corpus=$corpus' onClick='getNewName(\"$name\",\"saveas\")'>*</a></td>";
    
    print "<td><input type='checkbox' name='joinme' value='$query_id'></input></td></tr>";



}

print "</table>"; 

print "<br>join selected with new name: ";
print "<input name='newname'>";

print "<input type='submit' value='join results'></input>";

print "</form>";
print "</body></html>";
