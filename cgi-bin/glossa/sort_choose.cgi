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
my $query_id = CGI::param('query_id');
my $corpus=CGI::param('corpus');

my $conf = Glossa::get_conf_file($corpus);
my %conf = %$conf;


print "<html><head></head><body>";
print "<form action=\"", $conf{'cgiRoot'}, "/sort.cgi\" method=\"get\">";
print "<input type=\"hidden\" name=\"query_id\" value=\"$query_id\"></input>";
print "<input type=\"hidden\" name=\"corpus\" value=\"$corpus\"></input>";

print "<input type=\"checkbox\" name=\"case\">Case sensitive</input><br><br>";

print "<b>Sort by:</b><br>";
print "<select name=\"primary\">";
print " <option value=\"left\">Left context</option>";
print " <option value=\"match\" selected>Match</option>";
print " <option value=\"right\">Right context</option>";
print " <option value=\"sent_id\">Sentence ID</option>";
print " <option value=\"random\">randomize</option>";
print "</select>";
print "<br><input type=\"text\" name=\"pos1\" size=\"2\"></input> Position in context (counting from match)<br>";
print "Features used on tokens:<br>";
print "<input type=\"checkbox\" name=\"form_in1\" checked>Word Form</input> ";
print "<input type=\"checkbox\" name=\"pos_in1\">Part-of-Speech</input> ";
print "<input type=\"checkbox\" name=\"lexeme_in1\">Lexeme</input> <br>";

print "<br><b>Sort by (secondary):</b><br>";
print "<select name=\"secondary\">";
print " <option value=\"\" selected></option>";
print " <option value=\"left\">Left context</option>";
print " <option value=\"match\">Match</option>";
print " <option value=\"right\">Right context</option>";
print " <option value=\"sent_id\">Sentence ID</option>";
print "</select>";
print "<br><input type=\"pos2\" size=\"2\"></input> Position in context (counting from match)<br>";
print "Features used on tokens:<br>";
print "<input type=\"checkbox\" name=\"form_in2\">Word Form</input> ";
print "<input type=\"checkbox\" name=\"pos_in2\">Part-of-Speech</input> ";
print "<input type=\"checkbox\" name=\"lexeme_in2\">Lexeme</input> <br>";

print "<br><input type=\"reset\"></input>";
print " <input type=\"submit\"></input><br>";
print "</form>";
print "</body></html>";
