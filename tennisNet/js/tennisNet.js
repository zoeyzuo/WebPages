$(function() {
	initEvents();
});
var handle;
function initEvents(){
	handle=setInterval("main1Show()",2000);
	$(".main1TopPic").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("main1Show()",2000);
	});
	$(".main6LeftContentTbody tr:odd").css("background-color","rgb(246,246,246)");
	 $(".topMiddleSearchText").focus(function(){
	 	var val=$(this).val();
	 	var text=$(this).attr("name");
	 	if (val==text) {
	 		$(this).val("");
	 	}
	 });
	 $(".topMiddleSearchText").blur(function(){
	 	var val=$(this).val();
	 	var text1=$(this).attr("name");
	 	if (val=="") {
	 		$(this).val(text1);
	 	}
	 });
	$(".topBottomA").click(function(){
		$(this).addClass("topBottomselected");
		$(this).siblings().removeClass("topBottomselected");
		$(".topBottomA span").removeClass("topBottomselectedSpan");
		$(this).find("span").addClass("topBottomselectedSpan");
	});
	
	$("#main1Bottom a").click(function(){
		var val=$(this).attr("value");
		index=parseInt(val);
	});
	$(".main2LTopBul a").mouseover(function(){
		var val=parseInt($(this).attr("value"));
		$("#main2LTopBB div").css("display","none");
		$(".main2LTopBBLi"+val).css("display","block");
	});
	$(".main4LeftTRightLi").mouseover(function(){
		var val=$(this).attr("value");
		tabs(3,".main4LeftContentli",val,".main4LeftTRightLi");
	});

	$(".main6LeftTRightLi").mouseover(function(){
		var val=$(this).attr("value");
		tabs(2,".main6LeftContentTable",val,".main6LeftTRightLi");
	});
	$(".main7TitleLi").mouseover(function(){
		var val=$(this).attr("value");
		tabs(4,".main7Pic",val,".main7TitleLi");
	});
	$(".main6RTRightLi").mouseover(function(){
		var val=$(this).attr("value");
		tabs(2,".main6RightContent",val,".main6RTRightLi");
	});
	$(".main2CTitleLi").mouseover(function(){
		var val=$(this).attr("value");
		tabs(2,".main2CContent",val,".main2CTitleLi");
	});
}
function tabs(total,showName,val,selfName){
	$(selfName).css({"border-bottom": "1px solid rgb(204,204,204)", "background-color": "transparent"});
	$(selfName+val).css({"border-bottom": "1px solid #fff", "background-color": "#fff"});
	$(showName).css("display","none");
	$(showName+val).css({"display":"block"});
}

var index=1;
function main1Show(){
	$("#main1BottomDiv").animate({width: '-825px'}, 2000,function(){
		$("#main1BottomDiv").css("width","825px");
	});
	$("#main1Top img").css("display","none");
	$("#main1Bottom li").children().css("background-color","#ccc");
	$(".main1TopPic"+index).css("display","block");
	$("#main1Bottom li:nth-child("+index+")").children("a").css("background-color","red");
	index++;
	if (index==5) {
		index=1;
	};
}