<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN"  "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
 <head>
  <script language="JavaScript" src="http://omilia.uio.no/nota/js/QT.js"></script>
  <script language="JavaScript" src="http://omilia.uio.no/glossa/js/showtag.js"></script>
  <script language="JavaScript" src="http://omilia.uio.no/glossa/js/AC_QuickTime.js"></script>
  <link href="http://omilia.uio.no/glossa//html/tags.css" rel="stylesheet" type="text/css"></link>
  <style>
body {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    font-family: verdana, arial, helvetica, sans-serif;
    color: #000; /* was ccc */
    font-size: 10px;
    line-height: 16px;
    margin-top: 12px;
    margin-bottom: 10px;
    background-color: #fff;
}
div.txt{
	position: absolute;
	top: 0px;
	left:0px;
	padding: 5px;
	border: 0px solid #000;
	background: #fff;
	width: 500px;
        height: 260px; 
}
div.iframe{
	position: absolute;
	top: 0px;
	left:0px;
	padding: 0px;
	border: 0px solid #000;
	background: #fff;
	width: 560px;
        height: 260px;
}
div.mov{
	position: absolute;
	top: 0px;
	left:530px;
	padding: 5px;
	border: 0px solid #000;
/*	background: #fff;
	width: 500px; 
	height: 250px; 
	float: right; */
}
div.ctrl{
	position: absolute;
	top: 0px;
        left:864px;
	padding: 5px;
	border: 0px solid #000;
	background: #fff;
	width: 100px;
	height: 260px;

}
table.res{
/*	width: 100%; */
	border : 0px solid #aaa;
	font-size:9px;
	background-color:#fff;
}
  </style>
</head>
<body>
<?php

  // INIT

$file  = $_GET['file'];
$start = $_GET['start'];
$stop  = $_GET['stop'];
$movie_loc = "rtsp://lillestroem.uio.no/hf/ilf/";

$file = "samtale_001-002_800kbps.mov";

$start = secs2hhmmssff($start);
$stop  = secs2hhmmssff($stop);

?>
start[<span style="cursor: pointer" onclick="restart(document.QTplayer, -2);">&lt;</span> <span style="cursor: pointer">&gt;</span>]<br />
stop[<span style="cursor: pointer">&lt;</span> <span style="cursor: pointer">&gt;</span>]
<div class="mov">
playing <?php echo "$file: $start, $stop"; ?>
<!--
<script language="javascript" type="text/javascript">

var mov = <?php echo "'$movie_loc$fn'";?>;
    QT_WriteOBJECT( mov, '320', '256', '', 'EnableJavaScript', 'True', 'emb#NAME' , 'movie1' , 'obj#id' , 'movie1') ;

</script>
-->

<object  CLASSID='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' width='320' height='256' CODEBASE='http://www.apple.com/qtactivex/qtplugin.cab' id='QTplayer'>

<param name='qtsrc' value=<?php


echo "'$movie_loc$file'";

?>>

<param name='starttime' value=<?php

echo "'$start'";

?>>
<param name='endtime' value=<?php

echo "'$stop'";

?>>

<param name='autoplay' value='true'>
<param name='loop' value='false'>
<param name='controller' value='true'>
<embed src='http://lillestroem.uio.no/hf/ilf/test.mov' qtsrc=<?php
     
echo "'$movie_loc$file' starttime='$start' endtime='$stop'";

?> width='320' height='256' autoplay='true' loop='false' controller='true' pluginspage='http://www.apple.com/quicktime/' name='QTplayer'>
</embed>
</object><br />

</div>

</body>

<?php
function secs2hhmmssff($sex){
    $secs = $sex / 1;
    $dec  = fmod($sex, 1);
    $h = $secs / 3600;
    $m = $secs % 3600;    
    $s = $m % 60;
    $m = $m / 60;
    $f = $dec * 25;
    return sprintf("%02d:%02d:%02d:%02d",$h,$m,$s,$f);
}

?>