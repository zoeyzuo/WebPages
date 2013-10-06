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
	//maincenter4中，鼠标移入和移出时，相应内容的显示和隐藏
	showChangeMainCenter4();
	//mainCenter4 中关闭的显示和隐藏
	showCloseMainCenter4();
	//mainCenter4 切换图片
	changePicsMainCenter4();
	//mainLeft2中 改变颜色
	changeColorMainLeft2();
	//mainRight5中，幻灯片
	tabsMainRight5();
	//body,返回顶部
	gobackTop();
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

//maincenter1中，鼠标移入移出时，边框线的变化
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

//maincenter4中，鼠标移入和移出时，相应内容的显示和隐藏
function showChangeMainCenter4(){
	$(".mainCenter4").hover(function(){
		$(this).find(".mainCenter4MainContent1 a").css("color","rgb(235, 100, 120)");
		$(this).find(".hide").show();	
	},function(){
		$(".mainCenter4MainContent1 a").css("color","rgb(51, 51, 51)");
		$(this).find(".hide").hide();
	});
	$(".smallPic").click(function(){
			$(this).next().show();
	});
	$(".bigPic").click(function(){
		$(this).hide();
	});

}

//mainCenter4 中关闭的显示和隐藏及删除图片
function showCloseMainCenter4(){
	$(".mainCenter4MainContent5 li").hover(function(){
		$(this).find(".close").show();
	},function(){
		$(this).find(".close").hide();
	});
	$(".close").click(function(){
		$(this).parent().hide();
	});
}

//mainCenter4 切换图片,only one!
function changePicsMainCenter4(){
	var indexa=1,indexb=2;
	$(".mainCenter4MainCT4 a").bind("click",function(){
		if (indexa==1) {
			$(".mainCenter4MainContent5 ul").css("left","-=470px;");
			$(this).css("background-position","-75px -350px");
			$(".mainCenter4MainCT1 a").css("background-position","-100px -325px");
			$(".mainCenter4MainCT1 a").bind("click");
			$(".mainCenter4MainCT2 a").css("background-position","-75px -300px");
			$(".mainCenter4MainCT3 a").css("background-position","-100px -275px");
			indexa=2;
			indexb=1;
		};
		
	});
	$(".mainCenter4MainCT1 a").bind("click",function(){
		if (indexb==1) {
			$(".mainCenter4MainContent5 ul").css("left","+=470px;");
			$(this).css("background-position","-75px -325px");
			$(".mainCenter4MainCT4 a").css({"background-position":"-100px -350px","cursor":"pointer"});
			$(".mainCenter4MainCT4 a").bind("click");
			$(".mainCenter4MainCT3 a").css("background-position","-75px -300px");
			$(".mainCenter4MainCT2 a").css("background-position","-100px -275px");
			indexa=1;
			indexb=2;
		};	
	});

}
//mainLeft2中 改变颜色
function changeColorMainLeft2(){
	$(".mainRight2D1TPicC2").hover(function(){
		$(this).find("em").css("color","#fff");
	},function(){
		$(this).find("em").css("color","rgb(255, 160, 10)");
	});
}
//mainRight5中，幻灯片
var handle;
function tabsMainRight5(){
	$(".mainRight5Main").hover(function(){
		$(this).find(".hide").show();
	},function(){
		$(this).find(".hide").hide();
	});
	$(".mainRight5Main").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("tabsFun()",2000);
	});
	$(".mainRight5dirLR").click(function(){
		var val=$(this).attr("value");
		if (val==1) {
			if (IndexTabs==1) {
				IndexTabs=9;
			}else{
				IndexTabs--;
			}
		}else{
			if (IndexTabs==9) {
				IndexTabs=1;
			}else{
				IndexTabs++;
			}
		}
		$(".mainRight5MainUl li").hide();
		$(".mainRight5MainUl li:nth-child("+IndexTabs+")").show();
		$(".mainRight5No span").text(IndexTabs);
	});
	handle=setInterval("tabsFun()",1000);

}
var IndexTabs=1;
function tabsFun(){
	$(".mainRight5MainUl li").hide();
	$(".mainRight5MainUl li:nth-child("+IndexTabs+")").css("display","block");
	$(".mainRight5MainUl li:nth-child("+IndexTabs+")").animate({left:"184px"},"slow");
	$(".mainRight5No span").text(IndexTabs);
	IndexTabs++;
	if (IndexTabs==10) {
		IndexTabs=1;
	};
}
//body,返回顶部
function gobackTop(){
	$(window).scroll(function(){
		if ($(window).scrollTop()>=500) {
			$(".goBack").css({"display":"block","top":"400px"});
		}else{
			$(".goBack").css({"display":"none"});
		}
	});
}

