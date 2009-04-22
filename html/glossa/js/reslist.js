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

//showList(2,'heisann');

function showList(No,String,Label1,Hits,Label2,Corpus,Max,atttype) {

        var atttype = "";
        if( arguments.length > 7){ atttype = "&atttype=" + arguments[7]; }
	Object=document.getElementById("placeholder");
	if(!Object) {
	    return;
	}

	var HTML;
	// FIXME
	HTML=Label1+": <b>" + Hits + "</b>" + Max + "<br>"+Label2+": ";
	//	else {HTML="Hits found: <b>" + Hits + "</b>" + Max + "<br>Results pages: ";}

	for (var i = 1;i<=No;i++) {

		if (i==1) { HTML=HTML+"<font size=\"+1\"><b>" }
		// "&atttype="+atttype
		HTML=HTML+"<a href=\"" + cgiRoot + "/show_page_dev.cgi?n="+i+"&query_id="+String+"&corpus="+Corpus+atttype+"\"> "+i+"</a> ";
		if ( i==1 ) { HTML=HTML+"</b></font>" }	
 
	}

	Object.innerHTML=HTML;		

}

function boldPage(No) {

	var Id = "page_" + No;
	Object=document.getElementById(Id);
	Object.innerHTML="<font size=\"+1\"><b>" + No + "</b></font>";

}

function clearCheckBoxes() {
 
	var checkBoxes = document.getElementsByTagName('input');
	for (i=0; i<checkBoxes.length; i++) {
		checkBoxes[i].checked=false;
	}


}
