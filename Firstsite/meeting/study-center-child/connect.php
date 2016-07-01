<?php
$host="10.66.132.139:3306";
$db_user="root";
$db_pass="qwer1234";
$db_name="meet";
$timezone="Asia/Shanghai";

$link=mysql_connect($host,$db_user,$db_pass);
if (!$link) {
        die("链接数据库错误！");
    }
mysql_select_db($db_name,$link);
mysql_query("SET names UTF8");

header("Content-Type: text/html; charset=utf-8");
date_default_timezone_set($timezone); //北京时间
?>
