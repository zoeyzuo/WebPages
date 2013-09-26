$( function(){
	initEvents();
});
function initEvents(){
	//改变Interior中的li的左边距，使居中
	$(".mainInterior3Content li:nth-child(5)").css("margin-left","110px");

	//top中Li随着鼠标移入和移出的color的变化
	$(".topTAContent li").hover(function(){
		$(this).css("color","#000");
	},function(){
		$(this).css("color","rgb(102, 102, 102)");
	});
	//top中的标题随着鼠标移入，使隐藏的标题显示
	$(".topTA").hover(function(){		
		$("#topHide").animate({top:"60px"},100);
		var val=parseInt($(this).attr("value"));
		if (val!=1) {
			$(this).css("color","red");
		};
		$(".topTAContent").css("display","none");
		$(".topTAContent"+val).show(1000);
	},function(){
		var val=parseInt($(this).attr("value"));
		if (val!=1) {
			$(this).css("color","rgb(114, 114, 114)");
		};
	});
	//top中的标题随着鼠标移出，使隐藏的标题隐藏
	$("#main").mouseover(function(){
		$("#topHide").animate({top:"-55px"},500);
		$(".topTAContent").css("display","none");
	});
	//大标题的索引的显示
	$(window).scroll(function(){
		if ($(window).scrollTop()>=260) {
			/*var top=$(window).scrollTop();
			$("#mainTitleUl").css({"position": "absolute", "top": top+"px", "left": "195px"});*/

			$("#mainTitleUl").css({"position": "fixed", "top": "-80px", "left": "195px"});
			$(".mainTitlesA7").css("display","block");
		}else{
			$("#mainTitleUl").css({"position": "static"});
			$(".mainTitlesA7").css("display","none");
		};
	});
	//大标题的click时，背景图的转化
	$(".mainTitlesA").click(function(){
		var val=$(this).attr("value");
		if (val!=7) {
			for(var i=1;i<7;i++){
				$(".mainTitlesA"+i).css("background-image","url('css/images/normal_03.png')");
				$(this).css("background-image","url('css/images/nav_hover_03.png')");
			}
		};
	});
}