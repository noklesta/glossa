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

use strict;
use DBI;
use Getopt::Long qw(:config bundling);

my $username = '';
my $password = '';

my ($tag, $mode, $table);
GetOptions ("tag=s"   => \$tag,
	    "mode=s"    => \$mode,
	    "table=s" => \$table
	   );

unless ($tag and $mode and $table) {
    die("you must specify tag, mode and table\n"); 
}


my $dsn = "DBI:mysql:database=glossa;host=omilia.uio.no";
my $dbh = DBI->connect($dsn, $username, $password, {RaiseError => 0}) ||
        die $DBI::errstr;



my $tid;
my $start;
my $end;
my $current=-1;


while (<STDIN>) {

    chomp;
    if (/^<\/$tag>/) {
	$end=$current;
	printpos();
    }
    elsif (/^<$tag id=[\"|\'](.*)[\"|\']>/) {
	$tid=$1;
	$start = $current+1;
    }

    if (/^\<\<\</) {     # this can be a token
	$current++;
    }
    next if (/^\s*\</);
    my ($form, $lemma, $pos) = split(/\t/);

    $current++;



}

sub printpos {

    if ($mode eq 'db') {
	$dbh->do("update $table set startpos = '$start', endpos='$end' where tid = '$tid';");
    }
    elsif ($mode eq 'file') {
	print "$tid\t$start\t$end\n";
    }

}
