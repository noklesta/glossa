<?php
#$file  = $_GET['file'];
$start = $_GET['start'];
$stop  = $_GET['stop'];
$movie_loc = "rtsp://lillestroem.uio.no/hf/ilf/";

$file = "samtale_001-002_800kbps.mov";
#$file = "lyd/samtale_001-002.mov";
$start = secs2hhmmssff($start);
$stop  = secs2hhmmssff($stop);

?>
<html>
<head>
<script src="http://omilia.uio.no/nota/js/AC_QuickTime.js" language="JavaScript" type="text/javascript"></script>
<script type="text/javascript" src="http://omilia.uio.no/nota/js/QT.js"></script>
<script type="text/javascript">
function times(){

    st = document.getElementById('sstart');
    st.innerHTML = "Start: " + document.QTplayer.GetStartTime();
    sp = document.getElementById('sstop');
    sp.innerHTML = "End:" + document.QTplayer.GetEndTime();


}
</script>


<style type="text/css">@import url('http://omilia.uio.no/nota/css/topframe.css');</style>
<style type="text/css">@import url('http://omilia.uio.no/nota/css/main.css');</style>
</head>

<div class="panel">
<!--
<div class="div" onclick="initQT(document.QTplayer);alert('yeah!')">
What's up?
</div><br />
-->
<div class="div">
<strong>Video:</strong><br /><span style="cursor: pointer;" onclick="javascript:replay(document.QTplayer);"><img src="http://omilia.uio.no/nota/img/qtp.png" /></span><br /><br />
<select id="" name="start" class="" size="1" onchange="javascript:restart(document.QTplayer, this.value*1);this.value=0;"><option value="0">-</option>
<option value="-500">-5</option>
<option value="-400">-4</option>
<option value="-300">-3</option>
<option value="-200">-2</option>
<option value="-100">-1</option>
<option value="0">0</option>

<option value="100">1</option>
<option value="200">2</option>
<option value="300">3</option>
<option value="400">4</option>
<option value="500">5</option>
</select><br />
<select id="" name="end" class="" size="1" onchange="javascript:reend(document.QTplayer, this.value*1);this.value=0;"><option value="0">-</option>
<option value="-500">-5</option>
<option value="-400">-4</option>

<option value="-300">-3</option>
<option value="-200">-2</option>
<option value="-100">-1</option>
<option value="0">0</option>
<option value="100">1</option>
<option value="200">2</option>
<option value="300">3</option>
<option value="400">4</option>
<option value="500">5</option>

</select><br />
<div class="tracker">
<div class="pointl" id="start0" onclick="indi('start0', '#1a1', 'lr');restart(document.QTplayer, -10);times();"></div>
<div class="pointl" id="start1" onclick="indi('start1', '#1a1', 'lr');restart(document.QTplayer, -9);times();"></div>
<div class="pointl" id="start2" onclick="indi('start2', '#1a1', 'lr');restart(document.QTplayer, -8);times();"></div>
<div class="pointl" id="start3" onclick="indi('start3', '#1a1', 'lr');restart(document.QTplayer, -7);times();"></div>
<div class="pointl" id="start4" onclick="indi('start4', '#1a1', 'lr');restart(document.QTplayer, -6);times();"></div>
<div class="pointl" id="start5" onclick="indi('start5', '#1a1', 'lr');restart(document.QTplayer, -5);times();"></div>
<div class="pointl" id="start6" onclick="indi('start6', '#1a1', 'lr');restart(document.QTplayer, -4);times();"></div>
<div class="pointl" id="start7" onclick="indi('start7', '#1a1', 'lr');restart(document.QTplayer, -3);times();"></div>
<div class="pointl" id="start8" onclick="indi('start8', '#1a1', 'lr');restart(document.QTplayer, -2);times();"></div>
<div class="pointl" id="start9" onclick="indi('start9', '#1a1', 'lr');restart(document.QTplayer, -1);times();"></div>
<div class="pointl" id="start10" onclick="indi('start10', '#1a1', 'lr');restart(document.QTplayer, 0);times();"></div>
<div class="pointl" id="start11" onclick="indi('start11', '#1a1', 'lr');restart(document.QTplayer, 1);times();"></div>
<div class="pointl" id="start12" onclick="indi('start12', '#1a1', 'lr');restart(document.QTplayer, 2);times();"></div>
<div class="pointl" id="start13" onclick="indi('start13', '#1a1', 'lr');restart(document.QTplayer, 3);times();"></div>
<div class="pointl" id="start14" onclick="indi('start14', '#1a1', 'lr');restart(document.QTplayer, 4);times();"></div>
<div class="pointl" id="start15" onclick="indi('start15', '#1a1', 'lr');restart(document.QTplayer, 5);times();"></div>
<div class="pointl" id="start16" onclick="indi('start16', '#1a1', 'lr');restart(document.QTplayer, 6);times();"></div>
<div class="pointl" id="start17" onclick="indi('start17', '#1a1', 'lr');restart(document.QTplayer, 7);times();"></div>
<div class="pointl" id="start18" onclick="indi('start18', '#1a1', 'lr');restart(document.QTplayer, 8);times();"></div>
<div class="pointl" id="start19" onclick="indi('start19', '#1a1', 'lr');restart(document.QTplayer, 9);times();"></div>
<div class="pointl" id="start20" onclick="indi('start20', '#1a1', 'lr');restart(document.QTplayer, 10);times();"></div>
</div>

<div class="tracker">
<div class="pointr" id="stop0" onclick="indi('stop0', '#c11', 'lr');reend(document.QTplayer, 10);times();"></div>
<div class="pointr" id="stop1" onclick="indi('stop1', '#c11', 'lr');reend(document.QTplayer, 9);times();"></div>
<div class="pointr" id="stop2" onclick="indi('stop2', '#c11', 'lr');reend(document.QTplayer, 8);times();"></div>
<div class="pointr" id="stop3" onclick="indi('stop3', '#c11', 'lr');reend(document.QTplayer, 7);times();"></div>
<div class="pointr" id="stop4" onclick="indi('stop4', '#c11', 'lr');reend(document.QTplayer, 6);times();"></div>
<div class="pointr" id="stop5" onclick="indi('stop5', '#c11', 'lr');reend(document.QTplayer, 5);times();"></div>
<div class="pointr" id="stop6" onclick="indi('stop6', '#c11', 'lr');reend(document.QTplayer, 4);times();"></div>
<div class="pointr" id="stop7" onclick="indi('stop7', '#c11', 'lr');reend(document.QTplayer, 3);times();"></div>
<div class="pointr" id="stop8" onclick="indi('stop8', '#c11', 'lr');reend(document.QTplayer, 2);times();"></div>
<div class="pointr" id="stop9" onclick="indi('stop9', '#c11', 'lr');reend(document.QTplayer, 1);times();"></div>
<div class="pointr" id="stop10" onclick="indi('stop10', '#c11', 'lr');reend(document.QTplayer, 0);times();"></div>
<div class="pointr" id="stop11" onclick="indi('stop11', '#c11', 'lr');reend(document.QTplayer, -1);times();"></div>
<div class="pointr" id="stop12" onclick="indi('stop12', '#c11', 'lr');reend(document.QTplayer, -2);times();"></div>
<div class="pointr" id="stop13" onclick="indi('stop13', '#c11', 'lr');reend(document.QTplayer, -3);times();"></div>
<div class="pointr" id="stop14" onclick="indi('stop14', '#c11', 'lr');reend(document.QTplayer, -4);times();"></div>
<div class="pointr" id="stop15" onclick="indi('stop15', '#c11', 'lr');reend(document.QTplayer, -5);times();"></div>
<div class="pointr" id="stop16" onclick="indi('stop16', '#c11', 'lr');reend(document.QTplayer, -6);times();"></div>
<div class="pointr" id="stop17" onclick="indi('stop17', '#c11', 'lr');reend(document.QTplayer, -7);times();"></div>
<div class="pointr" id="stop18" onclick="indi('stop18', '#c11', 'lr');reend(document.QTplayer, -8);times();"></div>
<div class="pointr" id="stop19" onclick="indi('stop19', '#c11', 'lr');reend(document.QTplayer, -9);times();"></div>
<div class="pointr" id="stop20" onclick="indi('stop20', '#c11', 'lr');reend(document.QTplayer, -10);times();"></div>
</div>
<!--<img src="http://omilia.uio.no/nota/img/strip.png" />-->
</div>
<div>

<span id="sstart"></span>
<span id="sstop"></span>
<span id="track"></span>
</div>
</div>

<div class="screen">

<object CLASSID='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' 
width='320' height='256' CODEBASE='http://www.apple.com/qtactivex/qtplugin.cab' 
id='QTplayer'>

<param name='src' value='QuickTime4_Required.mov'>

<param name='qtsrc' value=<?php echo "'$movie_loc$file'"; ?>>

<param name='starttime' value=<?php echo "'$start'"; ?>>

<param name='endtime' value=<?php echo "'$stop'"; ?>>

<param name='autoplay' value='true'>

<param name='loop' value='false'>

<param name='controller' value='true'>

<embed src='http://lillestroem.uio.no/hf/ilf/test.mov' 
qtsrc=<?php echo "'$movie_loc$file'"; ?> starttime=<?php echo "'$start'"; ?>
endtime=<?php echo "'$stop'"; ?> width='320' height='256' autoplay='true' 
loop='false' controller='true' pluginspage='http://www.apple.com/quicktime/' 
name='QTplayer'>

</embed>

</object><br />



</div>

<script language="JavaScript" type="text/javascript">
//initQT(document.QTplayer);
indi('start4', '#1a1', 'lr');
indi('stop4', '#c11', 'lr');
</script>
</body>
</html>
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