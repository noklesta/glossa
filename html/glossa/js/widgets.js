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

var htmlstring_ = "\
 <div style='display:%s' id='%s_show' onClick=\"changeVisibility('%s_show','none');\
                                                changeVisibility('%s','block');\"> \
   <nobr>\
     <span class='txt' id='%s_span'>%s</span>\
     <img src='../html/img/plus.gif' />\
   </nobr>&nbsp;&nbsp;\
 </div>\
 <div  style='display:%s' class='doubleTableTable' id='%s'>\
   <div id='%s_show' onClick=\"changeVisibility('%s_show','block');changeVisibility('%s','none');resetDoubleTable('%s');\">\
   <nobr>\
     <span class='txt2' id='%s_span'>%s</span><img src='../html/img/minus.gif' />\
   </nobr>&nbsp;&nbsp;\
 </div>\
 <table>\
   <tr>\
     <td valign='top'>\
       <select id=\'%s-selected' multiple size='%s' ondblclick=\"moveSelected(\'%s-selected\',\'%s-unselected\');\">\
         %s\
       </select>\
";

/*
var htmlstring = 
"<div style='display:%s' id='%s_show' onClick=\"changeVisibility('%s_show','none');" +
"changeVisibility('%s','block');\"><nobr><span class='txt' id='%s_span'>%s</span>" +
"<img src='../html/img/plus.gif' /></nobr>&nbsp;&nbsp;</div>" +
"<div  style='display:%s' class='doubleTableTable' id='%s'>" +
"<div id='%s_show' onClick=\"changeVisibility('%s_show','block');" +
"changeVisibility('%s','none');resetDoubleTable('%s');\"><nobr>" +
"<span class='txt2' id='%s_span'>%s</span><img src='../html/img/minus.gif' />" +
"</nobr>&nbsp;&nbsp;</div><table><tr><td valign='top'>" +
"<select id=\'%s-selected' multiple size='%s'" +
"ondblclick=\"moveSelected(\'%s-selected\',\'%s-unselected\');\">\n%s</select>\n";
*/
    /*
         var htmlstring = "<div style='display:%s' id='%s_show' onClick=\"changeVisibility('%s_show','none');" +
	     "changeVisibility('%s','block');\"><nobr><span class='txt' id='%s_span'>%s</span>" +
	     "<img src='../html/img/plus.gif' /></nobr>&nbsp;&nbsp;</div>" +
	     "<div  style='display:%s' class='doubleTableTable' id='%s'>" +
	     "<div id='%s_show' onClick=\"changeVisibility('%s_show','block');" +
	     "changeVisibility('%s','none');resetDoubleTable('%s');\"><nobr>" +
	     "<span class='txt2' id='%s_span'>%s</span><img src='../html/img/minus.gif' />" +
	     "</nobr>&nbsp;&nbsp;</div><table><tr><td valign='top'>" +
	     "<select id=\'%s-selected' multiple size='%s'" +
	     "ondblclick=\"moveSelected(\'%s-selected\',\'%s-unselected\');\">\n%s</select>\n";
    */




// block id id id id name none id

// none id id id id name block id

function _writeWidgetDoubleTable_(widgetId, widgetName, defaultPosition) {
    var htmlstring = "<div style='display:block' id='%s_show' onClick=\"changeVisibility('%s_show','none');" +
	"changeVisibility('%s','block');\"><nobr><span class='txt' id='%s_span'>%s</span>" +
	"<img src='../html/img/plus.gif' /></nobr>&nbsp;&nbsp;</div>" +
	"<div  style='display:none' class='doubleTableTable' id='%s'>";
    var selected = widgetContent[widgetId].selected;
    var unselected = widgetContent[widgetId].unselected;
    var tableName = widgetContent[widgetId].tablename;
    var mode = widgetContent[widgetId].mode;
    var colName = widgetContent[widgetId].colname;

    var HTML='';
    var style1 = "none";
    var style2 = "block";

    var listLen = selected.length + unselected.length;
    if (listLen > 7) { listLen = 7 } 
    if (listLen < 3) { listLen = 3 } 
    
    if (unselected.length > 0) { defaultPosition="visible" }
    
    //
    //      ** selected **
    // 


    if (defaultPosition == 'hidden') {
	style1 = "block";
	style2 = "none";
    }
    HTML += sprintf(htmlstring, style1, widgetId, widgetId, widgetId, widgetId, widgetName, style2, widgetId);
    HTML += "<div id='" + widgetId + "_show' " + "onClick=\"changeVisibility('" + widgetId + "_show','block');changeVisibility('" + widgetId + "','none');resetDoubleTable('" + widgetId + "');\"><nobr><span class='txt2' id='_span"+widgetId+"'>" + widgetName + "</span><img src='../html/img/minus.gif' /></nobr>&nbsp;&nbsp;</div>"
	
	
	+ "<table><tr><td valign='top'>"
	+ "<select id=\'" + widgetId + "-selected' multiple "
	+ "size='" + listLen + "'" 
	+ "ondblclick=\"moveSelected(\'" + widgetId + "-selected\',\'" + widgetId + "-unselected\');\">";
    
    
    for(var i=0;i<selected.length;i++) {
	
	var optionValue=selected[i][0];
	var optionName=selected[i][0];
	
	if (selected[i].length == 2) {
	    optionName=selected[i][1];
	}
	HTML += "<option title='" + optionValue + "' value='" + optionValue + "'>" + optionName + "</option>";    
    }
    
    HTML += "</select>";
    
    
    
    //
    //      ** buttons **
    // 
    
    HTML += "</td><td valign='top'><br>"
	
	+ "<span onclick=\"moveSelected(\'" + widgetId + "-selected\',\'" + widgetId + "-unselected\')\">[&#8250;]</span>"
	+ "<br>"
	+ "<span onclick=\"moveSelected(\'" + widgetId + "-unselected\',\'" + widgetId + "-selected\')\">[&#8249;]</span>"
	+ "<br></td>";
    
    

    //
    //      ** unselected **
    // 
    
    
    HTML += "<td valign='top'>"
	+ "<select id=\'" + widgetId + "-unselected' multiple "
	+ "name='meta_values_" + widgetId + "::" + tableName + "." + colName + "' size='" + listLen + "'"
	+ "ondblclick=\"moveSelected(\'" + widgetId + "-unselected\',\'" + widgetId + "-selected\');\">";
    
    for(var i=0;i<unselected.length;i++) {
	var optionName;
	if (selected[i][1]) {
	    optionName=unselected[i][1];
	}
	else {
	    optionName=unselected[i][0];
	}
	HTML += "<option value='" + unselected[i][0] + "'>" + optionName + "</option>";    
    }
    
    HTML += "</select><br>";
    HTML += "<select name='meta_mode_" + widgetId + "'>";
    HTML += "<option value='LIKE'>" + strings[language]['choose'] + "</option><option value='NOT LIKE'";
    if (mode == 'NOT LIKE') {
	HTML += " selected";
    }
    HTML += ">" + strings[language]['exclude'] + "</option></select>";
    


    HTML += "</div></td></tr></table>";	
    
    document.write(HTML);
    
    var idAll= widgetId + "-alle";
    if (widgetContent[idAll]) {   
	var selected_all = widgetContent[idAll].selected;	
    }
    
    var detailsName = widgetName + " (" + strings[language]['details'] + ")";
    
    if (selected_all) {
	// document.write('<br>');
	writeWidgetDoubleTable(idAll, detailsName, 'hidden')
	    }
    
    document.write("</div>");
       
}


var htmlstring__ = "\
 <div style='display:%s' id='%s_show' onClick=\"changeVisibility('%s_show','none');\n\
                                                changeVisibility('%s','block');\"> \n\
   <nobr>\
     <span class='txt' id='%s_span'>%s</span>\n\
     <img src='../html/img/plus.gif' />\n\
   </nobr>&nbsp;&nbsp;\n\
 </div>\n\
 <div  style='display:%s' class='doubleTableTable' id='%s'>\n\
   <div id='%s_show' onClick=\"changeVisibility('%s_show','block');changeVisibility('%s','none');resetDoubleTable('%s');\">\n\
   <nobr>\n\
     <span class='txt2' id='%s_span'>%s</span><img src='../html/img/minus.gif' />\n\
   </nobr>&nbsp;&nbsp;\n\
 </div>\n\
 <table>\n\
   <tr>\n\
     <td valign='top'>\n\
       <select id='%s-selected' multiple size='%s' ondblclick=\"moveSelected('%s-selected','%s-unselected');\">\n\
         %s\n\
       </select>\n\
     </td>\n\
     <td valign='top'>\n\
       <br />\n\
       <span onclick=\"moveSelected('%s-selected','%s-unselected')\">[&#8250;]</span>\n\
       <br />\n\
       <span onclick=\"moveSelected('%s-unselected','%s-selected')\">[&#8249;]</span>\n\
       <br />\n\
     </td>\n\
     <td valign='top'>\n\
       <select id='%s-unselected' multiple\n\
               name='meta_values_%s::%s.%s' size='%s'\n\
               ondblclick=\"moveSelected('%s-unselected','%s-selected');\">\n\
         %s\n\
       </select>\n\
       <br />\n\
       <select name='meta_mode_%s'>\n\
        %s\n\
        %s\n\
       </select>\n\
     </td>\n\
   </tr>\n\
 </table>\n\
";
    
// widgetId widgetId tableName colName listLen widgetId widgetId 

function writeWidgetDoubleTable__(widgetId, widgetName, defaultPosition) {
    
    var optionFormat = "<option value='%s' %s>%s</option>\n";


    var options  = "";
    var options2 = "";
    var options3 = "";
    var options4 = "";

    var selected = widgetContent[widgetId].selected;
    var unselected = widgetContent[widgetId].unselected;
    var tableName = widgetContent[widgetId].tablename;
    var mode = widgetContent[widgetId].mode;
    var colName = widgetContent[widgetId].colname;
    var optionName;
    var HTML='';

    var selectedp = "";

    var style1 = "none";
    var style2 = "block";

    var listLen = selected.length + unselected.length;
    if (listLen > 7) { listLen = 7 } 
    if (listLen < 3) { listLen = 3 } 
    
    if (unselected.length > 0) { defaultPosition="visible" }
    
    //
    //      ** selected **
    // 


    if (defaultPosition == 'hidden') {
	style1 = "block";
	style2 = "none";
    }
    for(var i=0;i<selected.length;i++) {
	
	var optionValue=selected[i][0];
	var optionName=selected[i][0];
	
	if (selected[i].length == 2) {
	    optionName=selected[i][1];
	}
	options += sprintf(optionFormat, optionValue, selectedp, optionName );
    }


    for(var i=0;i<unselected.length;i++) {

	if (selected[i][1]) {
	    optionName=unselected[i][1];
	}
	else {
	    optionName=unselected[i][0];
	}
	options2 += sprintf(optionFormat, selectedp, unselected[i][0], optionName);    
    }



    options3 = sprintf(optionFormat, "LIKE", selectedp, strings[language]['choose']);
  
    if (mode == 'NOT LIKE') {
	selected = " selected";
    }
    options4 = sprintf(optionFormat, "NOT LIKE", selectedp, strings[language]['exclude']);

    HTML += sprintf(htmlstring, style1, widgetId, widgetId, widgetId, widgetId, widgetName, style2, widgetId, widgetId,
		    widgetId, widgetId, widgetId, widgetId, widgetName, widgetId, listLen, widgetId, widgetId, options,
		    widgetId, widgetId, widgetId, widgetId,
		    widgetId, widgetId, tableName, colName, listLen, widgetId, widgetId,
		    options2,
		    widgetId, options3, options4);

    //
    //      ** buttons **
    // 
    /*
    HTML += "</td><td valign='top'><br>"
	
	+ "<span onclick=\"moveSelected(\'" + widgetId + "-selected\',\'" + widgetId + "-unselected\')\">[&#8250;]</span>"
	+ "<br>"
	+ "<span onclick=\"moveSelected(\'" + widgetId + "-unselected\',\'" + widgetId + "-selected\')\">[&#8249;]</span>"
	+ "<br></td>";
    */
    

    //
    //      ** unselected **
    // 
    
    /*       
    HTML += "<td valign='top'>"
	+ "<select id=\'" + widgetId + "-unselected' multiple "
	+ "name='meta_values_" + widgetId + "::" + tableName + "." + colName + "' size='" + listLen + "'"
	+ "ondblclick=\"moveSelected(\'" + widgetId + "-unselected\',\'" + widgetId + "-selected\');\">";
    */
    
    //    HTML += "</select><br>";
    /*
    HTML += "<select name='meta_mode_" + widgetId + "'>";
    HTML += "<option value='LIKE'>" + strings[language]['choose'] + "</option><option value='NOT LIKE'";
    if (mode == 'NOT LIKE') {
	HTML += " selected";
    }
    HTML += ">" + strings[language]['exclude'] + "</option></select>";
    */

    //HTML += "</div></td></tr></table>";	
    
    document.write(HTML);
        
    var idAll= widgetId + "-alle";
    if (widgetContent[idAll]) {   
	var selected_all = widgetContent[idAll].selected;	
    }
    
    var detailsName = widgetName + " (" + strings[language]['details'] + ")";
    
    if (selected_all) {
	writeWidgetDoubleTable(idAll, detailsName, 'hidden');
    }
    
    document.write("</div>");
       
}
