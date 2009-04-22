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
use lib("/home/httpd/html/glossa/pm");
use Glossa;

select(STDOUT);
$|=1;

print "Content-type: text/html\n\n";
print "<html><head></head><body>";


my $corpus = CGI::param('corpus');
my $conf=Glossa::get_conf_file($corpus);
my %conf = %$conf;

my $subcorp_dir = $conf{'subcorp_files'};

my $user = $ENV{'REMOTE_USER'};

$subcorp_dir = $subcorp_dir . "/" . $user;

my @files = <$subcorp_dir/*.dat>;

foreach my $f (@files) {
    $f =~ s/\.dat$//;
    $f =~ s/.*\///;
    print "<a href='", $conf{'htmlRoot'}, "/html/index_dev.php?corpus=$corpus&subcorpus=$f'>$f</a><br>";
}
