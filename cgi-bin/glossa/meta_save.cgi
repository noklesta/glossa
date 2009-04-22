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
use File::Copy;
use lib("/home/httpd/html/glossa/pm");
use Glossa;
use CGI::Carp qw(fatalsToBrowser);

select(STDOUT);
$|=1;

print "Content-type: text/html\n\n";
print "<html><head></head><body>";

my $user = $ENV{'REMOTE_USER'};

my $cgi = CGI->new;
my $corpus = CGI::param('corpus');
my $file = CGI::param('subcorpus_id');
my $name = CGI::param('subcorpus_name');

my $conf = Glossa::get_conf_file($corpus);
my %conf = %$conf;

my $new_file_name = $conf{'config_dir'} . "/" . $corpus . "/subcorp/" . $user;
unless (-e $new_file_name) {
    mkdir($new_file_name);
}

$new_file_name = $new_file_name . "/" . $name . ".dat";

copy($file, $new_file_name) or die "File - $new_file_name - cannot be copied.";

print "Subcorpus is saved. Click <a href='' onclick='javascript:self.close()'>here</a> to close window.";
