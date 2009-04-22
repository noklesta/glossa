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

my %stats;
my $tid;

while (<STDIN>) {

    chomp;
    if (/^<\/text>/) {
	printstats();
    }
    elsif (/^<text id=[\"|'](.*)[\"|']>/) {
	$tid=$1;
    }

    next if (/^\s*\</);
    my ($form, $lemma, $e, $pos) = split(/\t/);

    my $tmp = $lemma . "__" . $pos;
    $stats{$tmp}++;


}

sub printstats {


    open(STATS, ">stats/$tid.dat");
    while (my ($k,$v)=each %stats) {
	my ($l,$p)=split(/__/,$k);
	print STATS $l, "\t", $p,"\t", $v, "\n";
    }

    undef %stats;

    close STATS;

    `gzip stats/$tid.dat`;

}
