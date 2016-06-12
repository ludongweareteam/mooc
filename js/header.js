$(function() {
	cssNavigation();
	showUserInfo();
	queryUnReadNum();// 查询未读消息
});

/**
 * 头部显示用户信息
 */
function showUserInfo() {
	var user = getLoginUser();
	if(user!=null && user.userId>0){
		var showName = user.showName;
		if (showName == null || $.trim(showName) == '') {
			showName = user.email;
		}
		// 头像
		var useImg = user.picImg;
		if (useImg == null || $.trim(useImg) == '') {
			useImg = baselocation + '/static/inxweb/img/avatar-boy.gif';
		} else {
			useImg = baselocation + useImg;
		}
		$("#userName").text(showName);
		$(".userImgPhoto").attr("src", useImg);
		$(".userImgPhoto").attr("alt", showName);
		$(".userNameClass").html(showName);
		$("#showName").text(showName);
		$("#showName").attr('title', showName);
		userBannerImage = user.bannerUrl;
		// 头部显示
		$("#userName").text(showName);
		$("#userName").attr('title', showName);
		$("#is-login-one,#is-login-two,#mobileExitDiv").show();
		$(".picImg").attr("src", useImg);
	} else {
		$("#no-login").show();
	}
}
/**
 * 设置导航选中样式
 */
function cssNavigation() {
	var url = window.document.location.pathname;
	$("a[href$='" + url + "']").parent().addClass("current");
	if (url.indexOf("/teacherlist") > 0) {
		searchType('TEACHER');
	} else if (url.indexOf("/articlelist") > 0) {
		searchType('ARTICLE');
	} else if (url=="/questions/list") {
		searchType('QUESTIONS');

	} else {
		searchType('COURSE');
	}

	//顶部搜索下拉类型选择
	ssFun();
}

/**
 * 初始化选择搜索类型
 * @param type
 */
function searchType(type) {
	if (type == "TEACHER") {
		$("#headerformSearch").attr("action", "/front/teacherlist");
		$("#headerSearchName").attr("name", "queryTeacher.name");
		$("#headerSearchTitle").html("名&nbsp;师");
	} else if (type == "ARTICLE") {
		$("#headerformSearch").attr("action", "/front/articlelist");
		$("#headerSearchName").attr("name", "queryArticle.queryKey");
		$("#headerSearchTitle").html("文&nbsp;章");
	}else if (type == "QUESTIONS") {
		$("#headerformSearch").attr("action", "/questions/list");
		$("#headerSearchName").attr("name", "questions.title");
		$("#headerSearchTitle").html("问&nbsp;答");
	}else {
		$("#headerformSearch").attr("action", "/front/showcoulist");
		$("#headerSearchName").attr("name", "queryCourse.courseName");
		$("#headerSearchTitle").html("课&nbsp;程");
	}
}

//顶部搜索下拉类型选择
function ssFun() {
	var _sBox = $(".t-s-select"),
		_sTxt = $(".s-vv-txt>tt"),
		_sOl = _sBox.children(".s-vv-ol"),
		_sLi = $(".s-vv-ol>li");
	_sBox.hover(function () {
		_sOl.stop(true,true).slideDown(50);
	}, function () {
		_sOl.stop(true,true).slideUp(50);
	});
	_sLi.each(function () {
		var _this = $(this);
		_this.click(function () {
			if (!_this.hasClass("current")) {
				_sTxt.html(_this.children("a").text());
				_this.addClass("current").siblings().removeClass("current");
				searchType(_this.children("a").attr("tagid"));
			}
			_sOl.hide();
		})
	});
	 _sLi.each(function () {
         var _this = $(this);
         _this.click(function () {
             if (!_this.hasClass("current")) {
                 _sTxt.html(_this.children("a").text());
                 _this.addClass("current").siblings().removeClass("current");
             }
			 _sOl.hide();
         })
     })
}
