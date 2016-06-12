var isok=$("#isok").val();
var currentprice = $("#currentprice").val();
//评论课程id
var otherId = $("#otherId").val();
//课程有效期到期时间
var loseTimeTime = $("#loseTimeTime").val();
//有效期类型，0：到期时间，1：按天数
var loseType=$("#loseType").val();
//评论类型,类型2为课程
var type = $("#type").val();

$(function() {
	shareShow(); //课程分享
	getCourseKpointList(otherId,1);

	replyFun(); //回复展开
	cTabFun($("#c-i-tabTitle>a")); //滚动定位
	queryComment();//评论
	//学过此课程的用户
	getCourseLearnedUser(otherId);
	//课程详情收起展开
	ctbodyFun();
	//课程封面图适配尺寸
	cvPic();
	//cShopcar();//购物车飞入效果
	/*if(vedioConent==null || vedioConent==''){
	 $("#zTreeMenuWrap").html(' <div class="mt50 mb50"><div class="tip pl10 pr10 of tac"><tt class="disIb icon30 png vam tipIcon"></tt><font class="vam c_666 fsize14">课程暂时没有上传视频</font></div></div>');
	 }else{
	 //初始化树结构，三个参数中前两个必须的
	 var zTrees = $.fn.zTree.init($("#zTreeMenuWrap"), setting, vedioConent);
	 zTrees.expandAll(true);
	 }*/

	var render = "canvas";
	try {
		//默认字符串转二维码的方法，仅支持html5
		document.createElement('canvas').getContext('2d');
	} catch (e) {
		//如果不支持html5报错后通过table生成二维码
		render = "table";
	}
	//生成二维码
	$('#output').qrcode({
		text: baselocation+"/front/couinfo/"+otherId,
		height: 120,
		width: 120,
		render: render,
		src: '/favicon.ico'//这里配置Logo的地址即可。
	});
});
//课程详情收起展开
var ctbodyFun = function() {
	var ctb = $(".course-txt-body"),
		ctBtn = $(".ctb-btn>a");
	if (ctb.height() < 88) {
		ctBtn.parent().hide();
		return false;
	} else {
		ctb.css({"height" : "88px"});
		ctBtn.parent().show();
		ctBtn.toggle(function() {
			ctBtn.text("收起更多∧");
			ctb.stop().animate({"height" : "100%"}, 500);
		}, function() {
			ctBtn.text("查看更多∨");
			ctb.css({"height" : "88px"});
		});
	}
};
//课程封面图适配尺寸
var cvPic = function() {
	$(".c-v-pic-wrap").css("height" , $(".c-v-pic").height());
};
//调整页面兼容问题等图片完全加载完成之后再调方法
var t_img; // 定时器
var isLoad = true; // 控制变量
// 判断图片加载状况，加载完成后回调
isImgLoad(function(){
	// 加载完成
	cvPic();
});

// 判断图片加载的函数
function isImgLoad(callback){
	// 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
	// 查找所有封面图，迭代处理
	$('.c-v-pic').each(function(){
		// 找到为0就将isLoad设为false，并退出each
		if(this.height === 0){
			isLoad = false;
			return false;
		}
	});
	// 为true，没有发现为0的。加载完毕
	if(isLoad){
		clearTimeout(t_img); // 清除定时器
		// 回调函数
		callback();
		// 为false，因为找到了没有加载完成的图，将调用定时器递归
	}else{
		isLoad = true;
		t_img = setTimeout(function(){
			isImgLoad(callback); // 递归扫描
		},500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	}
}

window.onresize = function() {cvPic();};
var cShopcar=function(){
	alert("ssss");
	// 元素以及其他一些变量
	var eleFlyElement = document.querySelector("#flyItem"), eleShopCart = document.querySelector("#shopCart");

	// 抛物线运动
	var myParabola = funParabola(eleFlyElement, eleShopCart, {
		speed: 400, //抛物线速度
		curvature: 0.0008, //控制抛物线弧度
		complete: function() {
			eleFlyElement.style.visibility = "hidden";
			eleShopCart.querySelector("tt").innerHTML = ++numberItem;
		}
	});
	// 绑定点击事件
	if (eleFlyElement && eleShopCart) {

		[].slice.call(document.getElementsByClassName("btnCart")).forEach(function(event) {
			//button.addEventListener("click", function(event) {
			//button.click(function(event) {
			//var src = $(this).parent().parent().parent().parent().siblings(".c-v-pic-wrap").find('.p-h-video-box').find("img").attr("src");
			var src = $("#aCoursesList").find("article.c-v-pic-wrap").find('.p-h-video-box').find("img").attr("src");
			$("#flyItem").find("img").attr("src", src);
			// 滚动大小
			var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
				scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
			eleFlyElement.style.left = event.clientX + scrollLeft + "px";
			eleFlyElement.style.top = event.clientY + scrollTop + "px";
			eleFlyElement.style.visibility = "visible";

			// 需要重定位
			myParabola.position().move();
			//});
		});
	}
};

/**
 * 获得课程章节目录
 * @param num
 */
function getCourseKpointList(courseId,type) {
	$.ajax({
		url : baselocation + "/front/ajax/courseKpointList/"+courseId+"/"+type,
		data:{},
		type : 'post',
		dataType : 'text',
		success : function(result) {
			$("#courseKpointMenu").html(result);
			treeMenu(); //课程树
		}
	});
}
var setting={
	view: {
		showIcon: true,//是否显示节点图片
		dblClickExpand: false,//是否双击展开节点
		showLine: true,//是否显示节点之间的连接线
		selectedMulti: false,//是否可以按Ctrl键选择多个节点
		nameIsHTML:true
	},
	data: {
		simpleData: {
			enable:true,//true  false 分别表示 使用  不使用 简单数据模式
			idKey: "kpointId",//节点数据中保存唯一标识的属性名称,enable = true 时生效
			pIdKey: "parentId"//节点数据中保存其父节点唯一标识的属性名称。[setting.data.simpleData.enable = true 时生效]
		},
		key: {
			name: "name",//标明节点的显示属性
			title:"name"
		}
	},
	callback: {
		//当单击时触发的方法，三个参数是固定的
		onClick:  function(event,treeId, treeNode) {
			if(!treeNode.isParent){
				//1免费
				var videoUrl = treeNode.videoUrl;
				if(videoUrl!=null && $.trim(videoUrl)!=''){
					if(treeNode.free==1){
						playVideo(videoUrl);
					}else if(treeNode.free==2){//收费
						if(isok==true){
							playVideo(videoUrl);
						}
					}
				}
			}
		}
	}
};

/**
 * 显示分享组件
 */
function shareShow() {
	$(".kcShare").hover(function() {
		$(this).stop().animate({"width" : "190px"}, 200);
		$(this).siblings("span").css({"width" : "60px"});
		$(this).children("#bdshare").stop().animate({"right" : "0"}, 200);
	}, function() {
		$(this).stop().animate({"width" : "48px"}, 200);
		$(this).children("#bdshare").stop().animate({"right" : "-160px"}, 200);
	});
}

/**
 * 立即购买
 * @param courseId 课程ID
 */
function buyNow(courseId){
	var loseTime = new Date(loseTimeTime.replace(/\-/g, "\/"));
	//到期类型
	if(loseType=='0'){
		var nowDAte = new Date();
		if(loseTime>nowDAte){
			//添加到购物车 并跳转
			window.location.href="/shopcart?goodsid="+courseId+"&type=1&command=addShopitem";
		}else{
			dialog('提示',"对不起，课程已过期!",1);
		}
	}else{
		//添加到购物车 并跳转
		window.location.href="/shopcart?goodsid="+courseId+"&type=1&command=addShopitem";
	}
		
}

/**
 * 收藏课程
 * @param courseId 课程ID
 */
function favorites(courseId,obj){
	if(isLogin()){
		$.ajax({
			url:baselocation+'/front/createfavorites/'+courseId,
			type:'post',
			dataType:'json',
			success:function(result){
				if(result.success==false){
					dialog('提示',result.message,1);
				}else{
					$(obj).html("已收藏").attr("title","已收藏").parent().addClass("sc-end");
					dialog('提示',result.message,0);
				}
			}
		});
	}else{
		lrFun();
	}
}

//视频试听播放方法
function vedioClick(freeVideoId){
	if(freeVideoId!=""&&freeVideoId!=0&&freeVideoId!=null)
	{
		// 播放视频
		getPlayerHtml(freeVideoId,1,"");
	}else{
		dialog('提示',"该课程暂不支持试听!",1);
	}
}


/**
 * 加入购物车
 * @param courseId
 */
function addShoppingCart(courseId){
	var loseTime = new Date(loseTimeTime.replace(/\-/g, "\/"));
	//到期类型
	if(loseType=='0'){
		var nowDAte = new Date();
		if(loseTime>nowDAte){
			toShoppingCart(courseId);
		}else{
			dialog('提示',"对不起，课程已过期!",1);
		}
	}else{
		toShoppingCart(courseId);
	}
}

/*
* 到加入购物车
*/
function toShoppingCart(courseId){

	//添加到购物车
	$.ajax({//验证课程金额
		url:baselocation+"/course/check/"+courseId,
		type:"post",
		dataType:"json",
		success:function(result){
			if(result.message!='true'){
				dialog('提示信息',result.message,1);
			}else{
				//添加到购物车
				$.ajax({//验证课程金额
					url:baselocation+"/shopcart/ajax/add",
					data:{
						"goodsid":courseId,
						"type":"1"
					},
					type:"post",
					dataType:"json",
					success:function(result){
						if(result.success!=true){
							dialog('提示信息',result.message,1);
						}else{
							cShopcar();//购物车飞入效果
							//window.location.href="/shopcart?goodsid="+courseId+"&type=1&command=addShopitem";
						}
					}
				})
			}
		}
	})

}