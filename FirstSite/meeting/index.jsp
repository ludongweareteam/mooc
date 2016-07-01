<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
  <head>
    <base href="<%=basePath%>">
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>遇见课堂-首页</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link href="css/bootstrap.min.css" rel="stylesheet">
       <link rel="stylesheet"  href="css/index.css">
       <link href="css/styles.css" rel="stylesheet">
		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
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
        <img alt="Brand" width="150x" src="images/logo.png">
      </a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#" target="_top">首页</a></li>
            <li class="active"><a href="../meeting/course.html
            "  target="_top">课程</a></li>
            <li class="active"><a href="#" target="_top">直播</a></li>
            <li class="active">
              <a href="../meeting/community.html" target="_top">社区</a>
            </li>
             <li class="active">
              <a href="../meeting/study-center.html" target="_top">学习中心</a>
            </li>
             <li class="active">
              <a href="#" class="btn-login" target="_top">登录/注册</a>
            </li>
          </ul>
           <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
          </form>
          
        </div>
    </div>
  </div><!-- /container -->
</div><!-- /navbar wrapper -->


<!-- Carousel
================================================== -->
<div id="myCarousel" class="carousel slide">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="item active">
      <img src="images/2_1.jpg" style="width:100%" class="img-responsive">
      <div class="container">
        <div class="carousel-caption">
          <h1>一起mooc</h1>
          <p></p>
          <p><a class="btn btn-lg btn-primary" href="#">更多</a>
        </p>
        </div>
      </div>
    </div>
    <div class="item">
      <img src="images/94.jpg" class="img-responsive">
      <div class="container">
        <div class="carousel-caption">
        <!--button
          <h1></h1>
          <p></p>
          <p><a class="btn btn-large btn-primary" href="#">Learn more</a></p>

          button-->
        </div>
      </div>
    </div>
    <div class="item">
      <img src="images/86.jpg" class="img-responsive">
      <div class="container">
        <div class="carousel-caption">
          <!--button
          <h1></h1>
          <p></p>
          <p><a class="btn btn-large btn-primary" href="#">Browse gallery</a></p>
          button-->
        </div>
      </div>
    </div>
  </div>
  <!-- Controls -->
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="icon-prev"></span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="icon-next"></span>
  </a>  
</div>
<!-- /.carousel -->


<!-- Marketing messaging and featurettes
================================================== -->
<!-- Wrap the rest of the page in another container to center all the content. -->

<div class="container marketing">

  <!-- Three columns of text below the carousel -->
  <div class="row content-top">
    <div class="col-md-4 text-center">
      <img class="img-circle" src="images/10.jpg"width="230"height="230">
      <h2>热门课程</h2>
      <p>这里有很多热门的课程，你可以从这开始你的学习之旅！</p>
      <p><a class="btn btn-default" href="#">详情 »</a></p>
    </div>
    <div class="col-md-4 text-center">
      <img class="img-circle" src="images/10.jpg"width="230"height="230">
      <h2>最新课程</h2>
      <p>实时更新最新课程，让你紧跟潮流，一起mooc吧！</p>
      <p><a class="btn btn-default" href="#">详情 »</a></p>
    </div>
    <div class="col-md-4 text-center">
      <img class="img-circle" src="images/10.jpg"width="230"height="230">
      <h2>经典课程</h2>
      <p>经典课程是经过万千学生打分推荐出来的，总有一款适合你。</p>
      <p><a class="btn btn-default" href="#">详情 »</a></p>
    </div>
  </div><!-- /.row -->


  <!-- START THE FEATURETTES -->

  <div class="row content-middle">
  <div class="title"> </div>
    <div class="col-sm-6 col-md-4">
        <a class="#" target="_blank">
         <div class="thumbnail">
          <img src="images/10.jpg"width="230"height="140" alt="...">
            <div class="caption">
            <p class="">c++ 人人都懂的编程课</p>
              <div class="course-info">
              <span class="label label-info">评分：<b class="course-info-num">8.8</b></span>
               <span class="course-info-line"></span>
                 <p class="text-primary">9662人关注</p>
                </div>
              </div>
            </div>
          </a>
    </div>

    <div class="col-sm-6 col-md-4">
        <a class="#" target="_blank">
         <div class="thumbnail">
          <img src="images/10.jpg"width="230"height="140" alt="...">
            <div class="caption">
            <p class="">c++ 人人都懂的编程课</p>
              <div class="course-info">
              <span class="label label-info">评分：<b class="course-info-num">8.8</b></span>
               <span class="course-info-line"></span>
                 <p class="text-primary">9662人关注</p>
                </div>
              </div>
            </div>
          </a>
    </div>

    <div class="col-sm-6 col-md-4">
        <a class="#" target="_blank">
         <div class="thumbnail">
          <img src="images/10.jpg"width="230"height="140" alt="...">
            <div class="caption">
            <p class="">c++ 人人都懂的编程课</p>
              <div class="course-info">
              <span class="label label-info">评分：<b class="course-info-num">8.8</b></span>
               <span class="course-info-line"></span>
                 <p class="text-primary">9662人关注</p>
                </div>
              </div>
            </div>
          </a>
    </div>

    <div class="col-sm-6 col-md-4">
        <a class="#" target="_blank">
         <div class="thumbnail">
          <img src="images/10.jpg"width="230"height="140" alt="...">
            <div class="caption">
            <p class="">c++ 人人都懂的编程课</p>
              <div class="course-info">
              <span class="label label-info">评分：<b class="course-info-num">8.8</b></span>
               <span class="course-info-line"></span>
                 <p class="text-primary">9662人关注</p>
                </div>
              </div>
            </div>
          </a>
    </div>
    

    <div class="col-sm-6 col-md-4">
        <a class="#" target="_blank">
         <div class="thumbnail">
          <img src="images/10.jpg"width="230"height="140" alt="...">
            <div class="caption">
            <p class="">c++ 人人都懂的编程课</p>
              <div class="course-info">
              <span class="label label-info">评分：<b class="course-info-num">8.8</b></span>
               <span class="course-info-line"></span>
                 <p class="text-primary">9662人关注</p>
                </div>
              </div>
            </div>
          </a>
    </div>

    <div class="col-sm-6 col-md-4">
        <a class="#" target="_blank">
         <div class="thumbnail">
          <img src="images/10.jpg"width="230"height="140" alt="...">
            <div class="caption">
            <p class="">c++ 人人都懂的编程课</p>
              <div class="course-info">
              <span class="label label-info">评分：<b class="course-info-num">8.8</b></span>
               <span class="course-info-line"></span>
                 <p class="text-primary">9662人关注</p>
                </div>
              </div>
            </div>
          </a>
    </div>


   </div>
</div>

  <!-- /END THE FEATURETTES -->


  <!-- FOOTER -->
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
          <p><img src="images/wechat.jpg"width=100px height="100px"></img><br>微信</p>
          联系我们：222-22222<br>
          关注我们，随时掌握最新全球好课
        </section>
      </div>
      <div class="text-center">&copy; Power by WeAreTeam 2016
      <p class="pull-right"><a href="#">返回顶部</a></p>
      </div>
    </div>
    
  </footer>


	<!-- script references -->
		<script src="1/js/jquery.min.js"></script>
		<script src="1/js/bootstrap.min.js"></script>
  </body>
</html>
