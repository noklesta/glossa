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
use lib("/home/httpd/html/glossa/pm");
use Glossa;

print "Content-type: text/html\n\n";

my $corpus = CGI::param('corpus');

my $conf = Glossa::get_conf_file($corpus);
my %conf = %$conf;

my $dsn = "DBI:mysql:database=$conf{'db_name'};host=$conf{'db_host'}";
$dbh = DBI->connect($dsn, $conf{'db_uname'}, $conf{'db_pwd'}, {RaiseError => 0}) || die $DBI::errstr;

my $query_id = CGI::param('query_id');

print "<html><head></head><body>";
print "<form action=\"", $conf{'cgiRoot'}, "/download.cgi\" method=\"get\">";
print "<input type=\"hidden\" name=\"query_id\" value=\"$query_id\">";
print "<input type=\"hidden\" name=\"corpus\" value=\"$corpus\">";

print "<input type=\"checkbox\" name=\"head\" checked></input> Create headings<br>";

print "<table cellspacing=\"10\"><tr><td valign=\"top\">";

print "<b>Token data (all):</b><br>";
print "<input type=\"checkbox\" name=\"form\" checked></input> Word form<br>";
print "<input type=\"checkbox\" name=\"lexeme\"></input> Lexeme<br>";
print "<input type=\"checkbox\" name=\"pos\"></input> POS tag<br>";

print "<b>Token data (match):</b><br>";
print "<input type=\"checkbox\" name=\"mform\" checked></input> Word form<br>";
print "<input type=\"checkbox\" name=\"mlexeme\"></input> Lexeme<br>";
print "<input type=\"checkbox\" name=\"mpos\"></input> POS tag<br>";

print "</td><td valign=\"top\">";

print "<b>Metadata:</b><br>";
print "<input type=\"checkbox\" name=\"text_id\"></input> Text id<br>";
print "<input type=\"checkbox\" name=\"sent_id\" checked></input> Sentence id<br>";
print "<input type=\"checkbox\" name=\"author\"></input> Author<br>";
print "<input type=\"checkbox\" name=\"language\"></input> Language<br>";
print "<input type=\"checkbox\" name=\"date\"></input> Publication date<br>";

if ($conf{'type'} eq 'multilingual') {
print "</tr><tr><td valign=\"top\">";
print "<b><font size=\"+1\"><I>Alignments:</I></font></b><br>";
print "<input type=\"checkbox\" name=\"align\" checked></input> Include aligmnents";

print "</tr><tr><td valign=\"top\">";
print "<b>Token data (aligment):</b><br>";
print "<input type=\"checkbox\" name=\"aform\" checked></input> Word form<br>";
print "<input type=\"checkbox\" name=\"alexeme\"></input> Lexeme<br>";
print "<input type=\"checkbox\" name=\"apos\"></input> POS tag<br>";

print "</td><td valign=\"top\">";
print "<b>Metadata (alignment):</b><br>";
print "<input type=\"checkbox\" name=\"atext_id\"></input> Text id<br>";
print "<input type=\"checkbox\" name=\"asent_id\" checked></input> Sentence id<br>";
print "<input type=\"checkbox\" name=\"aauthor\"></input> Author<br>";
print "<input type=\"checkbox\" name=\"alanguage\"></input> Language<br>";
print "<input type=\"checkbox\" name=\"adate\"></input> Publication date<br>";
}

print "</td></tr><tr><td valign=\"top\">";
print "<b>Annotation:</b><br>";
print "<select name=\"annotationset\">";
print "<option value=\"\" selected></option>";
print "<option value=\"__FREE__\">** free annotation **</option>";

my $sets_table = uc($corpus) . "annotation_sets";

# get sets
my $sth = $dbh->prepare(qq{ SELECT id, name FROM $sets_table;});
$sth->execute  || die "Error fetching data: $DBI::errstr";
while (my ($id, $name) = $sth->fetchrow_array) {
    print "<option value=\"$id\">$name</option>";
}
print "</select>";


print "</td></tr></table>";

print "<br>Format: <select name=\"format\"><option value=\"tsv\">Tab separated values</option><option value=\"csv\">Comma separated values</option><option value=\"xls\">Excel spreadsheet</option><option value=\"html\">HTML</option></select><br>";
print "<input type=\"submit\"></input>";
print "</form>";
print "</body></html>";
