<?php }
error_reporting(E_ALL ^ E_NOTICE); 
include_once("connect.php");
$query = mysql_query("select course.courseimg,course.title,xuanke.progress from student,course,xuanke where student.studentId=xuanke.studentId' and course.courseId=selelct.courseId");
?>
<?php    
    while($row = mysql_fetch_array($query)
        {
    ?>
	    <div class="col-sm-6 col-md-4" id="zhengzai">
			<a class="#" target="_top">
			    <div class="thumbnail">
			        <img class="kecheng"src="<?php echo $row['courseimg'] ?>" width="230"height="140" alt="...">
			      <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="<?php echo $row["name"]?>" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                      <span class="sr-only"><?php echo $row["progress"]?></span>
                    </div>
                  </div>
			      <div class="caption">
			        <p class=""><?php echo $row["title"]?></p>
			      </div>
			    </div>
			</a>
        </div>
<?php 
  }
?>
            </div>
        </div>
    </div>
    </div>
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
          联系我们：222-22222
        </section>
      </div>
      <div class="text-center">&copy; Power by WeAreTeam 2016
      <p class="pull-right"><a href="#">返回顶部</a></p>
      </div>
    </div>
    
  </footer>

 
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
  
  $('#weikaishi').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  })；
  $('#zhengzai').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  })；
  $('#yijieshu').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  })；
})
 

  </script>
</body>
</html>