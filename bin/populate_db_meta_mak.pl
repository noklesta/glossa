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
use XML::Twig;

my $username = '';
my $password = '';

my $db=shift;
unless ($db) { die("please specify DB\n") }

my $xml=shift;
unless ($xml) { die("please specify XML file\n") }


my $dsn = "DBI:mysql:database=$db;host=omilia.uio.no";
my $dbh = DBI->connect($dsn, $username, $password, {RaiseError => 0}) || die $DBI::errstr;

$dbh->do("delete from metadata;");

my $t= XML::Twig->new();
$t->parsefile($xml);

my $r=$t->root;
my @t=$r->children('text');

foreach my $text (@t) {

    my $id = $text->att('id');
    $id =~ s/^0+//;

    foreach my $att ('title','author','genre') {
        my $val = $text->att($att);
        $val =~ s/([\"|\'|\;|\#])/\\$1/g;
        $dbh->do("insert into metadata set category = '$att', text= '$id', value='$val';");
    }

    foreach my $cat ('subject','publisher','dateOriginal','dateDigital','identifier','citation','source','relation','hasPart','isPartOf') {

        my @cat_elts = $text->children($cat);
        foreach my $cat_elt (@cat_elts) {
            my $val = $cat_elt->text;
            $val =~ s/([\"|\'|\;|\#])/\\$1/g;
            $dbh->do("insert into metadata set category = '$cat', text= '$id', value='$val';");
        } 
    }

}
