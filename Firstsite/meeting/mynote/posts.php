<?php
require_once('connect.php');
$action = $_GET['action'];
switch($action){
	case 'add':
		addform();
		break;
	case 'edit':
        $id = (int)$_GET['id'];
		editform($id);
		break;
}
$txt = stripslashes(trim($_POST['content']));
$txt = htmlspecialchars($txt, ENT_QUOTES);
$txt = mysql_real_escape_string(strip_tags($txt),$link); //过滤HTML标签，并转义特殊字符
if(strlen($txt)<1 || strlen($txt)>100){
	echo '内容长度为1~100字符之间';
	exit;
}   

$user = stripslashes(trim($_POST['user']));
$user = htmlspecialchars($user, ENT_QUOTES);
$user = mysql_real_escape_string(strip_tags($user),$link);
if(strlen($user)<2 || strlen($user)>30){
	echo '姓名长度为2~10字符之间';
	exit;
}
if($action=='add'){ 
	
$color = $_POST['color'];
$time = date('Y-m-d H:i:s');
$zIndex = $_POST['zIndex'];
$xyz = '0|0|'.$zIndex;
$query = mysql_query("insert into notes(content,name,color,xyz,addtime)values('$txt','$user','$color','$xyz','$time')");
if($query){
	echo mysql_insert_id($link);
}else{
	echo '出错了！';
}
}elseif($action=='edit'){
    $txt = $_POST['content'];
    $time = date('Y-m-d H:i:s');
    $id = $_POST['id'];
$query=mysql_query("update notes set content='$txt',`addtime`='$time'where `id`='$id'");
	if(mysql_affected_rows()==1){
		echo '1';
	}else{
		echo '出错了！';	
	}
}else($action=='del'){
	$id = intval($_POST['id']);
	if($id>0){
      $query = mysql_query("delete from notes where id='$id'");
      if(mysql_affected_rows()==1){
			echo '1';
		}else{
			echo '出错了！';	
		}
	}else{
		echo '事件不存在！';
    }
}

?>