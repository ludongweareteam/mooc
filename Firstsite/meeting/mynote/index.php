<?php
include_once('connect.php');
include_once('function.php');

$notes = '';  
$left='';  
$top='';  
$zindex='';  
$query = mysql_query("select * from notes order by id desc limit 0, 50");
while($row=mysql_fetch_array($query)){
	list($left,$top,$zindex) = explode('|',$row['xyz']); 
	$time = strtotime($row['addtime']);
	$notes.= '
	<div class="note '.$row['color'].'" style="left:'.$left.'px;top:'.$top.'px;z-index:'.$zindex.'">
		<span class="data">'.$row['id'].'.</span>'.htmlspecialchars($row['content']).'
		<p class="user">——'.htmlspecialchars($row['name']).'<br/>('.tranTime($time).')</p>
	</div>';
}
?>
<!doctype html>
<html>
<head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>遇见课堂-学习中心-我的笔记</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link href="../css/bootstrap.min.css" rel="stylesheet">
        <link href="../css/styles.css" rel="stylesheet">
        <link rel="stylesheet" href="../css/study-center.css">
		<!--<link rel="stylesheet" type="text/css" href="../css/main.css" />-->
		<link rel="stylesheet" type="text/css" href="../css/note.css" />
		<link rel="stylesheet" type="text/css" href="../css/fancybox33.css" />
		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
       <script src="//cdn.bootcss.com/jquery.form/3.51/jquery.form.js"></script>
       <script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
		<script type="text/javascript" src="../js/jquery.fancybox-1.3.1.pack.js"></script>
		<script type="text/javascript" src="../js/global.js"></script>
</head>

<body>
  <div class="navbar-wrapper">
  <div class="container">
    <div class="navbar navbar-inverse navbar-static-top">
      
        <div class="navbar-header">
      <a class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
       <a class="navbar-brand" href="#">
        <img alt="Brand" src="../images/logo.png"width="150px">
      </a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="../meeting/index.jsp" target="_top">首页</a></li>
            <li class="active"><a href="../meeting/course.html
            " target="_top">课程</a></li>
            <li class="active"><a href="#" target="_top">直播</a></li>
            <li class="active">
              <a href="../meeting/community.html" target="_top">社区</a>
            </li>
             <li class="active">
              <a href="#" target="_top">学习中心</a>
            </li>
             <li class="active">
              <a href="#" class="btn-login" target="_blank">登录/注册</a>
            </li>
          </ul>
         
        </div>

    </div>
  </div><!-- /container -->
</div><!-- /navbar wrapper -->

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">
                <ul id="main-nav" class="nav nav-tabs nav-stacked" style="">
                    <li>
                        <a href="../study-center.html">  <i class="glyphicon glyphicon-book"></i>
                            我的课程    
                        </a>
                    </li>
                    <li>
                        <a href="#myshoucang" class="nav-header collapsed" data-toggle="collapse"> <i class="glyphicon glyphicon-star"></i>
                            我的收藏
                      <span class="badge">4</span>
                        </a>
                    </li>
                    <li>
                        <a href="../study-center-child/mystudyplan.html" class="nav-header collapsed" data-toggle="collapse">            
                        <i class="glyphicon glyphicon-list-alt"></i>
                            我的学习计划    
                        </a>
                    
                    </li>

                    <li >
                        <a href="#mydriction" class="nav-header collapsed" data-toggle="collapse">
                       <i class="glyphicon glyphicon-ok"></i>我的题库
                        </a>
                   
                    </li>

                    <li class="active">
                        <a href="#mynote" class="nav-header collapsed" data-toggle="collapse">               
                        <i class="glyphicon glyphicon-pencil"></i>
                            我的笔记
                           
                        </a>
                    </li>


                    <li>
                        <a href="#discuess"><i class="glyphicon glyphicon-comment"></i>
                            讨论
                            <span class="badge">4</span>
                        </a>
                    </li>
                    <li>
                        <a href="#focus"><i class="glyphicon glyphicon-envelope"></i>
                            关注/粉丝
                            <span class="badge">4</span>
                        </a>
                    </li>

                </ul>
            </div>

       <div id="main" class="col-md-10">
      <div id="add"><a href="add_note.html" id="fancy"><button class="btn btn-primary btn-xs" type="button">
                      新增笔记
                </button></a></div>
      <div id="edit"><a href="edit-note.html" id="fancy1"><button class="btn btn-primary btn-xs" type="button">
                      修改笔记
                </button></a></div>
     <div class="demo">
       <?php echo $notes;?>
     </div>
   </div>


 <footer class="panel-footer">
  <div class="container">
      <div class="row">
        <section id="hours" class="col-sm-4">
          <span>新闻</span><br>
          Sun-Thurs: 11:15am - 10:00pm<br>
          Fri: 11:15am - 2:30pm<br>
          Saturday Closed
          <hr class="visible-xs">
        </section>
        <section id="tag" class="col-sm-4">
          <span>关于我们</span><br>
          <a href="#"class="tag-a">服务条款</a><br>
          <a href="#"class="tag-a">诚聘英才</a><br>
          <a href="#"class="tag-a">隐私保护</a><br>
          
          <hr class="visible-xs">
        </section>
        <section id="tag" class="col-sm-4">
        <span>联系我们</span><br>
          <p><img src="../images/wechat.jpg"width=100px height="100px"></img><br>微信</p>
          联系我们：222-22222
        </section>
      </div>
      <div class="text-center">&copy; Power by WeAreTeam 2016
      <p class="pull-right"><a href="#">返回顶部</a></p>
      </div>
    </div>
    
  </footer>
  <script type="text/javascript">
    
  </script>

</body>
</html>