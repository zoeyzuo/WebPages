$(function(){
	initEvents();
});
function initEvents(){
	//mainLeft2中，展开或者收缩隐藏的信息
	openMainLeft2();
	//mianLeft2中，鼠标移入移出时，显示和隐藏tool图标
	showMain2LeftTool();
	//mainLeft3中，展开或者收缩隐藏的信息
	openMainLeft3();
	//TopLeft中，鼠标移入移出时，显示和隐藏具体内容
	showTopContent();
	//searchs中，鼠标移入移出时的相应变化
	searchs();
	//TopRight中，鼠标移入移出时，显示和隐藏具体内容
	showTopRight1();
	//maincenter1中，鼠标移入移出时，边框线的变化
	changeBorder_mainCenter1();
}

//top 中，鼠标移入移出时，显示和隐藏具体内容
function showTopContent(){
	$(".topMainLeft1All").hover(function(){
		$(this).find(".topMainLeft1Title").addClass("topMainLeft1Title3");
		$(this).find(".topMainLeft1Content").show();
	},function(){
		$(this).find(".topMainLeft1Title").removeClass("topMainLeft1Title3");
		$(this).find(".topMainLeft1Content").hide();
	});
}

//TopRight中，鼠标移入移出时，显示和隐藏具体内容
function showTopRight1(){
	$(".topMainRight1All2").hover(function(){
		$(this).find(".topMainRight1Title2").addClass("topMainLeft1Title3");
		$(this).find(".topMainRight1All2Content").show();
	},function(){
		$(this).find(".topMainRight1Title2").removeClass("topMainLeft1Title3");
		$(this).find(".topMainRight1All2Content").hide();
	});
}

//mainLeft2 中，展开或者收缩隐藏的信息
var indexOpenMain2=1;
function openMainLeft2(){
	$(".opens").click(function(){
		showHide(".mainLeft2",2,".opens");
	});
}

//mainLeft3 中，展开或者收缩隐藏的信息
var indexOpenMain3=1;
function openMainLeft3(){
	$(".openss").click(function(){
		showHide(".mainLeft3",3,".openss");
	});
}
//mainLeft2 和mainLeft3
function showHide(showName,index,selfName){
	if (index==2) {
		if (indexOpenMain2==1) {
			$(showName).find(".hide").show();
			$(selfName).find("a").text("收起");
			indexOpenMain2=2;
		}else{
			$(showName).find(".hide").hide();
			$(selfName).find("a").text("展开");
			indexOpenMain2=1;
		}
	}else{
		if (indexOpenMain3==1) {
			$(showName).find(".hide").show();
			$(selfName).find("a").text("收起");
			indexOpenMain3=2;
		}else{
			$(showName).find(".hide").hide();
			$(selfName).find("a").text("展开");
			indexOpenMain3=1;
		}
	}
	
}

//mianLeft2中，鼠标移入移出时，显示和隐藏tool图标
function showMain2LeftTool(){
	$(".mainLeft2Ul li").hover(function(){
		$(this).find(".em1").css("background-image", 'url("css/images/icon.png")');
	},function(){
		$(this).find(".em1").css("background-image", 'none');
	});
	$(".em1").hover(function(){
		$(this).css("background-position", '-100px -50px');
	},function(){
		$(this).css("background-position", '-75px -50px');
	});
}

//searchs中，鼠标移入移出时的相应变化
function searchs(){
	$(".Topsearchs input").focus(function(){
		$(this).parent().css("background-position","-474px -5px");
		$(this).siblings().slideDown();
		var val2=$(this).val();
		var moren=$(this).attr("moren");
		if (val2==moren) {
			$(this).val("");
		}
	}).blur(function(){
		$(this).parent().css("background-position","0px -5px");
		$(this).siblings().slideUp();
		var val2=$(this).val();
		var moren=$(this).attr("moren");
		if (val2=="") {
			$(this).val(moren);
		}
	}).hover(function(){
		$(this).parent().css("background-position","-237px -5px");
	},function(){
		$(this).parent().css("background-position","0px -5px");
	});

}

function changeBorder_mainCenter1(){
	$(".mainCenter1Text textarea").focus(function(){
		$(this).parent().css("border-color","rgb(255,185,65)");
		var val=$(this).text();
		if (val=="十一七天假，准备带爸妈去哪玩？晒出你和爸妈的旅行照片吧！") {
			$(this).text("#带着爸妈去旅行#");
		};
		$(this).css("color","#000");
	}).blur(function(){
		$(this).parent().css("border-color","rgb(204,204,204)");
		var val=$(this).text();
		if (val=="#带着爸妈去旅行#") {
			$(this).text("十一七天假，准备带爸妈去哪玩？晒出你和爸妈的旅行照片吧！");
			$(this).css("color","rgb(128, 128, 128)");
		};	
	});
}




