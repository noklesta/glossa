#!/usr/bin/env perl

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

my @langs1 = ("en","fr", "de","nl","no","po");


foreach my $l1 (@langs1) {

    foreach my $l2 (@langs1) {

	next if ($l1 eq $l2);

	my $alg = "/hf/omilia/site/corpora/omc/alg/$l1$l2.alg2";
	next unless (-e $alg);
	print STDERR $alg, "\n";

	`/usr/local/bin/cwb-align-encode -D -C $alg`;

    }

}
