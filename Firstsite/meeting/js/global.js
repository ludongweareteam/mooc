// JavaScript Document
$(function(){
	var tmp;
	
	$('.note').each(function(){
		tmp = $(this).css('z-index');
		if(tmp>zIndex) zIndex = tmp;
	})
	
	make_draggable($('.note'));
	
	$("#fancy").fancybox({
		'type':'ajax',
		'modal':true,
		'titleShow':false,
	});
	$("#fancy1").fancybox({
		'type':'ajax',
		'modal':true,
		'titleShow':false,
	});
	$("#color li").live('click',function(e){
		var color = $(this).attr("class");
		$("#mycolor").val(color);
		//alert(color);
		$(this).css("border","1px solid #369");
		$(this).siblings().css("border","1px solid #fff");
	});

    $("#addbtn").live('click',function(e){
		var txt = $("#note_txt").val();
		var user = $("#user").val();
		var color = $("#mycolor").val();
		if(txt==""){
			 $("#msg").html("内容不能为空");
			 $("#note_txt").focus();
			 return false;
		}
		
		var data = {
			'zIndex': ++zIndex,
			'content': txt,
			'user': user,
			'color': color
		};
		
		$.post('add.php',data,function(msg){
			zIndex = zIndex++;
			//alert(zIndex);
			if(parseInt(msg)){
				var str = "<div class='note "+color+"' style='left:0;top:0;z-index:"+zIndex+"'><span class='data'>"+msg+".</span>"+txt+"<p>——"+user+"(刚刚)</p></div>";
			    $(".demo").append(str);
			    make_draggable($('.note'));
				$.fancybox.close();
			}else{
				$("#msg").html(msg);
			}			
		});
		e.preventDefault();
	});	
});

var zIndex = 0;
function make_draggable(elements){
	/*elements.click(function(){
		$(this).css('z-index',++zIndex);
	});*/
	elements.draggable({
		opacity: 0.8,
		containment:'parent',
		start:function(e,ui){ ui.helper.css('z-index',++zIndex)},
		stop:function(e,ui){
			$.get('update_position.php',{
				  x		: ui.position.left,
				  y		: ui.position.top,
				  z		: zIndex,
				  id	: parseInt(ui.helper.find('span.data').html())
			});
		}
	});
}