$(function(){
	initEvents();
});
function initEvents(){
	//mainLeft中，漂亮的幻灯片
	slideMainLeft();
	
}
var handle;
function slideMainLeft(){
	handle=setInterval("slide()",2000);
	$(".mainLeftSlideUl,.mainLeftSlideNum").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",2000);
	});
	$(".mainLeftSlideNum li").click(function(){
		var val=parseInt($(this).attr("value"));
		$(".mainLeftSlideUl").animate({left:"-"+(val-1)*675+"px"},500);
		$(".mainLeftSlideNum li").removeClass("slideLis");
		$(this).addClass("slideLis");
		index=val+1;
	});
}
var index=1;
function slide(){
	if (index==5) {
		index=1;
		$("mainLeftSlideUl").css("left","0");
	};
	$(".mainLeftSlideUl").animate({left:"-"+(index-1)*675+"px"},500);
	$(".mainLeftSlideNum li").removeClass("slideLis");
	$(".mainLeftSlideNum li:nth-child("+index+")").addClass("slideLis");
	//alert($(".mainLeftSlideUl li:nth-child("+index%4+")").html());
	//$(".mainLeftSlideUl").append($(".mainLeftSlideLi1"));
	index++;
}