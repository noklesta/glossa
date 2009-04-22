/*
Copyright 2009 The Text Laboratory, University of Oslo.

This file is part of Glossa.

Glossa is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Glossa is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Glossa.  If not, see <http://www.gnu.org/licenses/>.
*/

var Html='searching ';
var i = 0;
var Finished=0;

Print();

function Print() {
	setTimeout("doIt()", 500);
}

function doIt() {

	i++;
	writeIt();
	if (Finished) {} 
	else if (i < 10) { Print() } 
	else { 
		i=0; 
		Html='searching ';
		Print()
	}

}

function writeIt() {

   	object = document.getElementById("waiting");
   	object.innerHTML=Html;
  	Html = Html + "&nbsp;.";

}

function stopWait() {
//   	object = document.getElementById("waiting");
//   	object.innerHTML='';
	Html="";
	Finished=1;
}