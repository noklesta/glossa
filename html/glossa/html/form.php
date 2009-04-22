<?php
$snacks = $_POST['snacks'];
// Note that $snacks will be an array.
foreach ($snacks as $s) {
  echo "$s<br />";
}
?>
