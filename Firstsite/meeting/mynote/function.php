<?php
/*时间转换函数*/
function tranTime($stime) {
	$rtime = date("m-d H:i",$stime);
	$htime = date("H:i",$stime);

	$day_time = date("j",$stime);
	$today=date("j",time());
	$ds = $today - $day_time;

	$time = time() - $stime;

	if ($time < 60) {
		$str = '刚刚';
	}
	elseif ($time < 60 * 60) {
		$min = floor($time/60);
		$str = $min.'分钟前 '.$htime;
	}
	elseif ($time < 60 * 60 * 24) {
		$h = floor($time/(60*60));
		$str = $h.'小时前 '.$htime;
		if($ds==1)
		  $str = '昨天 '.$rtime;
	}
	elseif ($time < 60 * 60 * 24 * 2) {
		$str = '昨天 '.$rtime;
		if($ds==2)
		   $str = '前天 '.$rtime;
	}elseif($time < 60 * 60 * 24 * 3){
		$str = '前天 '.$rtime;
		if($ds>2)
		   $str = $rtime;
	}
    else {
		$str = $rtime;
	}
	return $str;
}

?>