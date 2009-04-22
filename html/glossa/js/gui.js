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

var lingo = "no";

var labels = new Array("lang",
		       "stored_results",
		       "statistics",
		       "full_query",
		       "help",
		       "save_subcorpus",
		       //"show_text_list",
		       "show_texts",
		       "full_query",
		       "search",
		       "reset",
		       "choose_subcorpus",
		       "tid",
		       "bred",
		       "abode",
		       "longest",
		       "pro",
		       "agegroup",
		       "sex",
		       "bred-alle",
		       "abode-alle",
		       "longest-alle",
		       "edu",
		       "tid",
		       "rep",
		       "genre",
		       "addbutton_",
		       "delbutton_",
		       "regexp"
		       );

var buttons = new Array;

buttons["search"] = 1;
buttons["reset"] = 1;
buttons["show_texts"] = 1;
buttons["save_subcorpus"] = 1;
buttons["addbutton_"] = 1;
buttons["delbutton_"] = 1;

var span = new Array;

span["tid"]=1;
span["bred"]=1;
span["bred-alle"]=1;
span["abode"]=1;
span["abode-alle"]=1;
span["longest"]=1;
span["longest-alle"]=1;
span["pro"]=1;
span["agegroup"]=1;
span["sex"]=1;
span["edu"]=1;
span["tid"]=1;
span["rep"]=1;
span["genre"]=1;
span["regexp"]=1;


function toggleLang(){
    var label;
    var button;
    var suff= "";
    if(lingo == "no"){ lingo = "en";  }
    else { lingo = "no";  }
    for(var j = 0; j < labels.length; j++){
	//	alert(label);
	label = labels[j];
	if(span[label]){ suff = "_span"; }
	else{ suff = "";  }
	var elt = document.getElementById(label+suff);
	if(buttons[label]){
	    //	     alert(label);
	    elt.value = strings[lingo][label];
	}
	else{
	    //	    alert(label);
	    elt.firstChild.nodeValue = strings[lingo][label];
	}
    }
}
