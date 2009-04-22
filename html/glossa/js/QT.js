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

/*

usefull ref: http://developer.apple.com/documentation/QuickTime/Conceptual/QTScripting_JavaScript/index.html?http://developer.apple.com/documentation/QuickTime/Conceptual/QTScripting_JavaScript/bQTScripting_JavaScri_Document/chapter_1000_section_5.html

*/

var start=0;
var end=0;
var intv = 0;
var offset_left=0;
var offset_right=0;
var inited = 0;

//alert("start: "+start+", end: "+end);
//var start = mov.GetStartTime();
//var end = mov.GetEndTime();
function initQT(mov){
   intv = intvSize(movLength(mov),10);
   start = mov.GetStartTime();
   end =   mov.GetEndTime();
   //   alert("intv: "+intv+", start: "+start+", end: "+end);
}

function movLength(mov){
   return mov.GetEndTime() - mov.GetStartTime() ;
}
function intvSize(time, intvs){
  return Math.ceil(time/intvs);
}
function restart(mov, x){
    //            alert(mov.GetStartTime() +" ---- "+ mov.GetEndTime())
   if(!inited){inited = 1; initQT(mov);}
   mov.Stop();
//   var start = mov.GetStartTime()+x;
//   var end = mov.GetEndTime();
   var offset=intv*x;
   var newstart = start+offset;
   //   alert("offset: "+offset+", Duration: "+(end-newstart));
   if(newstart>=end){return;}
   mov.SetStartTime(newstart);
   mov.Rewind();
   mov.Play();
}
function reend(mov, x){
   if(!inited){inited = 1; initQT(mov);}
   mov.Stop();
//   var start = mov.GetStartTime();
//   var end = mov.GetEndTime()+x;
   var newend = end+intv*x;
//   alert("Duration: "+(newend-start));
   if(start>=newend){return;}
   mov.SetEndTime(newend);
   mov.Rewind();
   mov.Play();
}
function replay(mov){
   mov.Stop();
   mov.Rewind();
   mov.Play();
}
function indi(id, colour, dir){
   var regexp = /\d+/;
   var regexp2 = /\D+/;
   var root = id.replace(regexp, "");
   var i = id.replace(regexp2, "");
   var bgcolour;
   for(var j=0; j<9; j++){
	if(dir=='lr'){
	   if(j>i){bgcolour="#fff"}
           else{bgcolour="#777"}
        }
	if(dir=='rl'){
	   if(j<i){bgcolour="#fff"}
           else{bgcolour="#777"}
        }
	document.getElementById(root+j).style.background=bgcolour;
   }
   var el=document.getElementById(id);
       el.style.background=colour;
}
