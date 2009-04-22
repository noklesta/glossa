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

my $username = '';
my $password = '';

my $dsn = "DBI:mysql:database=cwb_glossa;host=localhost";
my $dbh = DBI->connect($dsn, $username, $password, {RaiseError => 0}) ||
        die $DBI::errstr;



my $tid;
my $wordcount;

while (<STDIN>) {

    chomp;
    if (/^<\/text>/) {
	update_wordcount();
	$wordcount=0;
    }
    elsif (/^<text id=[\"|\'](.*)[\"|\']>/) {
	$tid=$1;
    }

    next if (/^\s*\</);

    $wordcount++;



}

sub update_wordcount {

    $dbh->do("update TESTtext set wordcount = '$wordcount' where tid = '$tid';");

}
