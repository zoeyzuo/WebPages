$(function() {
	initEvents();
});

function initEvents(){
	$(window).scroll(function(){
		$("#hoverLeft").css("top",$(window).scrollTop()+200+"px");
	});
	$(".hoverLeftAll").click(function(){
		/*alert("dd");*/
		$(this).find(".hoverLeftUl").css("display","block");
		$(this).siblings().find(".hoverLeftUl").css("display","none");
	});
	$("#Bodycontent").click(function(){
		//alert("not dd");
		$(".hoverLeftUl").css("display","none");
	});
	//top中，下拉菜单
	$(".top1MRight2Contain").hover(function(){
		$(this).find(".top1MR2Title a").css({"color": "#fff","background-color": "rgb(123,92,58)"});
		$(this).find(".top1MR2Content").css("display","block");
	},function(){
		$(this).find(".top1MR2Title a").css({"color": "rgb(126,126,126)","background-color": "transparent"});
		$(this).find(".top1MR2Content").css("display","none");
	});
	//top中，搜索框
	$("#searchText").keyup(function(){
		var val=$(this).val();
		if (val!="") {
			$(this).parent().css("background-image","none");
		}else{
			$(this).parent().css("background-image","url('css/images/searching.gif')");
		}
	});
	//within中，选项卡
	$(".withinTitleBLi1A").click(function(){
		$("#mainLeft1").css("display","block");
		$("#mainLeft2").css("display","none");
		$("#mainLeft3").css("display","none");
		$(".withinTitleBLi1A").css("background-position","0 -324px");	
		$(".withinTitleBLi2A").css("background-position","0 -297px");
		$(".withinTitleBLi3A").css("background-position","0 -297px");

		$(".withinTitleBLi1D").css("background-position","0 -243px");
		$(".withinTitleBLi2D").css("background-position","0 -27px");
		$(".withinTitleBLi3D1").css("background-position","0 -54px");
		$(".withinTitleBLi3D2").css("background-position","0 -108px");
	
	});
	$(".withinTitleBLi2A").click(function(){
		$("#mainLeft1").css("display","none");
		$("#mainLeft2").css("display","block");
		$("#mainLeft3").css("display","none");
		$(".withinTitleBLi1A").css("background-position","0 -297px");	
		$(".withinTitleBLi2A").css("background-position","0 -324px");
		$(".withinTitleBLi3A").css("background-position","0 -297px");

		$(".withinTitleBLi1D").css("background-position","0 -189px");
		$(".withinTitleBLi2D").css("background-position","0 0px");
		$(".withinTitleBLi3D1").css("background-position","0 -27px");
		$(".withinTitleBLi3D2").css("background-position","0 -108px");
	});
	$(".withinTitleBLi3A").click(function(){
		$("#mainLeft1").css("display","none");
		$("#mainLeft2").css("display","none");
		$("#mainLeft3").css("display","block");
		$(".withinTitleBLi1A").css("background-position","0 -297px");	
		$(".withinTitleBLi2A").css("background-position","0 -297px");
		$(".withinTitleBLi3A").css("background-position","0 -324px");

		$(".withinTitleBLi1D").css("background-position","0 -189px");
		$(".withinTitleBLi2D").css("background-position","0 -54px");
		$(".withinTitleBLi3D1").css("background-position","0 0px");
		$(".withinTitleBLi3D2").css("background-position","0 -135px");
	});
	$(".mainL1BottomPicShow").hover(function(){
		$(this).next(".picHide").css({"display":"block"});
	},function(){
		$(this).next(".picHide").css("display","none");
	});

	//footer中，文本随着焦点的获得和失去的变化
	$("#footerContainer2BBottom").children("input[type='text']").focus(function(){
		var val=$(this).val();
		var defaults=$(this).attr("defaults");
		$(this).css("background-color","rgb(30, 30, 30)");
		if (val==defaults) {
			$(this).val("");
		};
	});
	$("#footerContainer2BBottom").children("input[type='text']").blur(function(){
		var val=$(this).val();
		var defaults=$(this).attr("defaults");
		$(this).css("background-color","rgb(42, 42, 42)");
		if (val=="") {
			$(this).val(defaults);
		};
	});

	//页面中，当单击按钮时，背景色的改变
	$(".footerContainer2BB1Btn,.mainL1TopDA").click(function(){
		$(this).css("background-color","rgb(99, 75, 48");
	});
	//页面中，当移入移出按钮时，背景色的改变
	$(".footerContainer2BB1Btn,.mainL1TopDA").hover(function(){
		$(this).css("background-color","rgb(138, 103, 65)");
	},function(){
		$(this).css("background-color","rgb(112, 85, 54)");
	});


}