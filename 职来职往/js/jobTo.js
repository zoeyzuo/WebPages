$(function(){
	initEvents();
});
var nowLeft=0;
function initEvents(){
	setInterval("middle3PicShow()",1000);	
	setInterval("middle1PicShow()",1000);
	$("#middle1Centernumber").css("opacity","0.8");
	$(".middle1CnumberSpan").click(function(){
		for( var i=1 ; i<=4;i++)
		{
			$("#middle1CnumberSpan"+i).css({"width": "21px","background-color": "rgb(76,76,76)"});
			$(".middle1Centerpic"+i).css("display","none");
		}
		$(this).css({"width": "28px","background-color": "red"});
		var val=$(this).attr("value");
		$(".middle1Centerpic"+val).css("display","block");
		index=parseInt(val);
	});
	$("#middle3ContentLeft").click(function(){
		nowLeft-=200;
		$(".middle3ContentUL li").animate({"left":nowLeft+'px'},"slow");
		if (nowLeft<=-1300) {
		nowLeft=100;
		};
	});
	$("#middle3ContentRight").click(function(){
		nowLeft+=200;
		$(".middle3ContentUL li").animate({"left":nowLeft+'px'},"slow");
		if (nowLeft>=0) {
			nowLeft=-1100;
		};
		
	});
}
function middle3PicShow(){
	nowLeft=nowLeft-100;
	$(".middle3ContentUL li").animate({"left":nowLeft+'px'},"slow");
	
	$(".middle3ContentUL").css("left",nowLeft+"px");	
	if (nowLeft<=-1300) {
		nowLeft=100;
	};
}
var index=1;
function middle1PicShow(){
	for( var i=1 ; i<=4;i++)
	{
		$("#middle1CnumberSpan"+i).css({"width": "21px","background-color": "rgb(76,76,76)"});
		$(".middle1Centerpic"+i).css("display","none");
	}
	$("#middle1CnumberSpan"+index).css({"width": "28px","background-color": "red"});
	$(".middle1Centerpic"+index).css("display","block");
	index++;
	if (index==5) {
		index=1;
	};
}
