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

use XML::XPath;
use XML::XPath::XMLParser;
use Data::Dumper;

my $xp = XML::XPath->new(filename => '/tmp/test.xhtml');
    
my $nodeset = $xp->find('/html/body/p'); # find all paragraphs    

my @nodes = $nodeset->get_nodelist;
my $a = 1;
while (@nodes) {
    print "FOUND\n\n";
      print XML::XPath::NodeSet::string_value(\@nodes);
    print "\n\n";
    XML::XPath::NodeSet::shift(\@nodes);
    $a++;
}
