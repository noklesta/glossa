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

select(STDOUT);
$|=1;

print "Content-type: text/html\n\n";
print "<html><head></head><body>";






my $cgi = CGI->new;
# FIXME: this should be done in module
my %cgi_hash;
my @prms = $cgi->param();
foreach my $p (@prms) {
    my @vals = $cgi->param($p);
    $cgi_hash{$p}=\@vals;
}


my $in = Glossa::create_cgi_hash2(\%cgi_hash);
my %in = %$in;


my $CORPUS = $in{'query'}->{'corpus'}->[0];
my $base_corpus = $in{'phrase'}->{'0'}->{'corpus'}->[0];


my $conf = Glossa::get_conf_file($CORPUS);
my %conf = %$conf;




my $dsn = "DBI:mysql:database=$conf{'db_name'};host=$conf{'db_host'}";
my $dbh = DBI->connect($dsn, $conf{'db_uname'}, $conf{'db_pwd'}, {RaiseError => 0}) || die $DBI::errstr;

my $format = CGI::param('format');


my $tablename = $base_corpus . "_lexstat";


my ($subcorpus,$sql_query_nl,$texts_allowed,$subcorpus_string) = Glossa::create_tid_list(\%conf, \%in, $CORPUS);

if ($subcorpus_string) {

    print "<pre>";
    print $subcorpus_string;
    print "</pre>";
    
    # save string
    my $fname = "/tmp/meta_" . int(rand 100000) . ".dat";

    open (TMP, ">$fname");
    print TMP $subcorpus_string;
    close TMP;

    # print form

    print "<form action='", $conf{'cgiRoot'}, "/meta_save.cgi' method='get'>\n";
    print "<input type='text' name='subcorpus_name'></input>\n";
    print "<input type='hidden' name='subcorpus_id' value='$fname'></input>\n";
    print "<input type='hidden' name='corpus' value='$CORPUS'></input>\n";
    print "<input type='submit'></input>\n";
    print "</form>";

    

}
else {
    print "<b>No selection to save.</b>";
}

