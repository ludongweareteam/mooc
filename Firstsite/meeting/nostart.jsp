<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!doctype html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>遇见课堂-学习中心</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/styles.css" rel="stylesheet">
        <link rel="stylesheet" href="css/study-center.css">
</head>
<body>
<div class="col-md-10">
           <div>
              <ul class="nav nav-tabs">
				  <li role="presentation" ><a href="../meeting/study_center.html">正在</a></li>
				  <li role="presentation" class="active"></li>
				  <li role="presentation"><jsp:include page="finished.jsp" flush="true" /></li>
				</ul>
			</div>
			<div class="course">
				<div class="col-sm-6 col-md-4">
			        <a class="#" target="_blank">
			         <div class="thumbnail">
			          <img class="kecheng"src="images/50.jpg"width="230"height="140" alt="...">
			            <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                      <span class="sr-only">40% Complete (success)</span>
                    </div>
                  </div>
			            <div class="caption">
			            <p class="">c++ 人人都懂的编程课</p>
			            </div>
			            </div>
			          </a>
                 </div>

                <div class="col-sm-6 col-md-4">
			        <a class="#" target="_blank">
			         <div class="thumbnail">
			          <img class="kecheng"src="images/50.jpg"width="230"height="140" alt="...">
			           <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                      <span class="sr-only">40% Complete (success)</span>
                    </div>
                  </div>
			            <div class="caption">
			            <p class="">c++ 人人都懂的编程课</p>
			            </div>
			            </div>
			          </a>
                 </div>

                <div class="col-sm-6 col-md-4">
			        <a class="#" target="_blank">
			         <div class="thumbnail">
			          <img class="kecheng"src="images/79.jpg"width="230"height="140" alt="...">
			           <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                      <span class="sr-only">40% Complete (success)</span>
                    </div>
                  </div>
			            <div class="caption">
			            <p class="">c++ 人人都懂的编程课</p>
			            </div>
			            </div>
			          </a>
                 </div>

                  <div class="col-sm-6 col-md-4">
			        <a class="#" target="_blank">
			         <div class="thumbnail">
			          <img  class="kecheng"src="images/79.jpg"width="230"height="140" alt="...">
			           <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                      <span class="sr-only">40% Complete (success)</span>
                    </div>
                  </div>
			            <div class="caption">
			            <p class="">c++ 人人都懂的编程课</p>
			            </div>
			            </div>
			          </a>
                 </div>

                  <div class="col-sm-6 col-md-4">
			        <a class="#" target="_blank">
			         <div class="thumbnail">
			          <img class="kecheng" src="images/79.jpg"width="230"height="140" alt="...">
			           <div class="progress">
                    <div class="progress-bar progress-bar-success " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                      <span class="sr-only">40% Complete (success)</span>
                    </div>
                  </div>
			            <div class="caption">
			            <p class="">c++ 人人都懂的编程课</p>
			            </div>
			            </div>
			          </a>
                 </div>
            </div>
        </div>
<script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
   <script type="text/javascript">
   $(document).ready(function(){
  $(".kecheng").mouseenter(function(){
    $(this).css("background-color","rgba(23, 20, 20, 0.88");
    //document.getElementByTag("img").innerHTML="人人都懂的编程课";
  });
  $(".kecheng").mouseleave(function(){
    $(this).css("background-color","#ffffff");
  });
}); 
  </script>
</body>