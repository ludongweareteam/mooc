<?php
include_once('connect.php');//连接数据库
require_once('connect.php');
$txt = stripslashes(trim($_POST['note_txt']));
$txt = htmlspecialchars($txt, ENT_QUOTES);
$txt = mysql_real_escape_string(strip_tags($txt),$link); //过滤HTML标签，并转义特殊字符
if(strlen($txt)<1 || strlen($txt)>100){
	echo '内容长度为1~100字符之间';
	exit;
}   

$user = stripslashes(trim($_POST['name']));
$user = htmlspecialchars($user, ENT_QUOTES);
$user = mysql_real_escape_string(strip_tags($user),$link);
if(strlen($user)<2 || strlen($user)>30){
	echo '姓名长度为2~10字符之间';
	exit;
}
	
$color = $_POST['mycolor'];
$time = date('Y-m-d H:i:s');
$zIndex = $_POST['zIndex'];
$xyz = '0|0|'.$zIndex;
$query = mysql_query("update notes set content ='$txt',xyz='$xyz',color='$color' ,name='$user',addtime='$time' where name='$user'");
if($query){
	echo ('成功1');
	header('Location: index.php');
}else{
	echo '出错了！';
}

?>

