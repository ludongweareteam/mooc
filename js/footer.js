//购物车数量
var numberItem = 0;
$(function(){
	wmNavFun(); // 手机端导航方法
	scPos();
	sideNav();
	//显示购物车数量
	showshopnums();
	goTopFun();//返回顶部
	goTopFun2();

	$(".r-fix-box.r-fix-box>ul>li").mouseenter(function(){
		$(this).find(".smgz-pic").show("normal");
	}).mouseleave(function(){
		$(this).find(".smgz-pic").hide();
	});
});
$(window).resize(function() {scPos();});
function scPos() {
	var winW = $(window).height();
	$("#s-car-box-middle").css({"height" : winW-110 + "px","overflow-y" : "auto","overflow-x" : "hidden"});
}



function sideNav(){
	if(checkIsMobile()){      // 移动端环境下效果
		return false;
	} else {

		var vBtn=$("#v-nav-first"),
			naxBox=$(".r-fixed-wrap");
		vBtn2=$("#v-nav-close"),
			vBtn.click(function(e) {
				if(!vBtn.hasClass("vBtnCurr")){
					naxBox.stop().animate({"right" : "0"}, 400);
					vBtn.addClass("vBtnCurr");
					$("html").addClass("onScroll");
				}else{
					ccrFun();
				}
				stopFunc(e);
			});
		vBtn2.click(function(e) {
			ccrFun();
			stopFunc(e);
		});
		/*$(document).click(function() {
		 ccrFun();
		 });*/
		$("#shopcarthtml .s-car-close").click(function() {
			ccrFun();
		});
		function ccrFun() {
			naxBox.stop().animate({"right" : "-279px"}, 400);
			vBtn.removeClass("vBtnCurr");
			$("html").removeClass("onScroll");
		}
		function stopFunc(e) {
			document.all ? event.cancelBubble = true : e.stopPropagation();
		}

	}
}

function goTopFun2() {
	var _gt = $("#goTopBtn2");
	_gt.bind("click", function() {
		$("html,body").animate({"scrollTop" : 0}, 500);
	});
	var goTop = function() {
		var sTop = $(document).scrollTop();
		(sTop > 120) ? _gt.fadeIn(50) : _gt.fadeOut(50);
	};
	$(window).bind("scroll" , goTop);
}

/**
 * 查询购物车列表
 */
function shopCartHtml(){
	$.ajax({
		type:'post',
		dataType:'text',
		data:{},
		url:baselocation+'/shopcart/ajax/headerShopCartinfo?type=1',
		async:false,
		success:function (result){
			$("#shopcarthtml").html(result);
			/*if(isNotEmpty(result)){
			 $("#studulist").removeClass('undis').html(result);
			 }else{
			 $("#nocoursebug").removeClass('undis');
			 }*/
		}
	});
}

//删除购物车
function deleteCartId(id,goodsid,type) {
	$.ajax({
		url : baselocation + "/shopcart/ajax/deleteShopitem",
		data : {
			"id":id,
			'goodsid' : goodsid,
			"type":type
		},
		type : "post",
		dataType : "json",
		async : false,
		cache : false,
		success : function(result) {
			shopCartHtml();
			//显示购物车数量
			showshopnums();
		}
	});
}

/**
 * 显示购物车数量
 */
function showshopnums(){
	$.ajax({
		url:"/shopcart/ajax/shopcartnums",
		data:{"type":1},
		type : "post",
		dataType : "json",
		success: function (result){
			if(result.entity && isNotNull(result.entity ) && result.entity.shopCartNum>0){
				$("#shopCartNum").html(result.entity.shopCartNum);
				numberItem = result.entity.shopCartNum;
			}else{
				$("#shopCartNum").html(0);
				numberItem = 0;
			}
		}
	});
}