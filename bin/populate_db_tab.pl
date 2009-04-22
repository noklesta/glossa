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

use DBI;
use Unicode::MapUTF8 qw(to_utf8 from_utf8 utf8_supported_charset);

my $username = '';
my $password = '';

my $db=shift;
unless ($db) { die("please specify DB\n") }

my $dsn = "DBI:mysql:database=$db;host=omilia.uio.no";
my $dbh = DBI->connect($dsn, $username, $password, {RaiseError => 0}) || die $DBI::errstr;

$dbh->do("delete from s;");
$dbh->do("delete from lex_stats;");

my $content;
my $s; 
my $t_id;

while (<STDIN>) {
    chomp;

    if (/^<s id=\"(\S+)\">$/) {

        # commit previous
        if ($content) {
            $dbh->do(qq{insert into s set t_id = '$t_id', s = '$s', content='$content';});
            $content="";
        }

        my $s_id = $1;
        $s=$s_id;
        my $tmp;
        ($tmp,$t_id)=split(/\./,$s_id);

    }
    elsif (/^<.*>$/) { }
    else {
        s/([\"|\'|\;|\#])/\\$1/g;

        my ($wf,$t,$le)=split(/\t/, $_);        
        $dbh->do("insert into lex_stats set freq=1, wf = '$wf', lemma = '$le', tag = '$t' on duplicate key update freq=freq+1;");

        s/\t.*//;
        $content.=$_ . " ";

    }

}
