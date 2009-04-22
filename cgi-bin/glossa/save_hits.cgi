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
use File::Copy;
use strict;
use lib("/home/httpd/html/glossa/pm/");
use Glossa;
use Data::Dumper;

select(STDOUT);
$|=1;

print "Content-type: text/html\n\n";

my $corpus=CGI::param('corpus');
my $query_id = CGI::param('query_id');
my $user = $ENV{'REMOTE_USER'}; 

my $name = CGI::param('name');
 
my $conf = Glossa::get_conf_file($corpus);
my %conf = %$conf;






my %taken_names;
my $hits_dir = $conf{'config_dir'} . "/" . $corpus . "/hits/" . $user . "/";
my @confs = <$hits_dir/*.conf>;
foreach my $conf (@confs) {

    open (CONF, $conf);
    while (<CONF>) {
	chomp;
        my ($key,$val) = split(/\s*=\s*/, $_);
	if ($key eq "name") {
	    $taken_names{$val}=1;
	}
    }

}



#print "<pre>";
#print Dumper %conf;

#print "CORPUS: $corpus<br>";
#print "QI: $query_id<br>";
#print "NAME: $name<br>";

unless ($query_id) {
    die("no query id");
}

if ($taken_names{$name}) {
    print "The name $name is already in use. Hits not saved; please select another name.";
    die("The name $name is already in use.");
}

my $orig = $conf{'tmp_dir'} . "/" . $query_id; 
my $new = $conf{'config_dir'} . "/" . $corpus . "/hits/" . $user . "/";

my $new = $conf{'config_dir'} . "/" . $corpus . "/hits/" . $user . "/";
unless (-e $new) {
    mkdir($new);
}


# change .conf: add name
my $c = $orig . ".conf";
open (CONF, ">>$c");
print CONF "\nname=", $name, "\n";
close CONF;

my @files=<$orig*>;

my $warning;

foreach my $f (@files) {

    my $n = $f;
    $n =~ s|.*/||;
    $n = $new . $n;

    my $ok = copy($f,$n);
    unless ($ok) {
	print "WARNING: could not copy $f to $n<br>";
	$warning = 1;
    }
}


unless ($warning) {
    print "The results have been saved. Hit the 'back' button on your browser to return to your results.";
}
