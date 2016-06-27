<?php
include_once('connect.php');
if(!is_numeric($_GET['id']) || !is_numeric($_GET['x']) || !is_numeric($_GET['y']) || !is_numeric($_GET['z']))
die("0");

$id = intval($_GET['id']);
$x = intval($_GET['x']);
$y = intval($_GET['y']);
$z = intval($_GET['z']);

mysql_query("UPDATE notes SET xyz='".$x."|".$y."|".$z."' WHERE id=".$id);

echo "1";
?>