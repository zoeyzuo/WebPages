$(function(){
	initEvents();
});

function initEvents(){
	//type="text"，当文本框获得和失去焦点时，根据现有文本框的内容判断是否改变文本框的内容
	changeTextContent();
	//header Searchs中，点击时，显示选择区；选择搜索范围后，隐藏选择区，并显示选择的结果。
	selectSearchRange();
	//headerSinger中，当鼠标移入和移出时，改变尖尖头的背景图片以及现显示相应的内容；
	hoverHeaderSinger();
	//main1 LRight中,选项卡,鼠标点击时，改变自身样式，并显示相应的具体内容
	tabsmain1LRight();
	//main1 LRight中,当鼠标移入和移出时，显示相应的蒙版
	showShadowmain1LRightImg();
	//main1RightTop中，幻灯片
	slide1main1RightTop();
	//main3Left中，点击全选时，该列中的checkbox都被选中，或者都不选中
	allSelect();
	$(".main3RightCon span").css("opacity","0.5");
	//main4Right中，特殊的选项卡，当鼠标移动到标题时，显示具体内容并隐藏原有的标题，其他的标题都显示及内容都隐藏
	showContentMain4Right();
}
//type="text"，当文本框获得和失去焦点时，根据现有文本框的内容判断是否改变文本框的内容
function changeTextContent(){
	$("[type='text']").focus(function(){
		//alert("d");
		var val=$(this).val();
		var txt=$(this).attr("name");
		if (val==txt) {
			$(this).val("");
		};
	}).blur(function(){
		var val=$(this).val();
		var txt=$(this).attr("name");
		if (val=="") {
			$(this).val(txt);
		};
	});
}

//header Searchs中，点击时，显示选择区；选择搜索范围后，隐藏选择区，并显示选择的结果。
function selectSearchRange(){
	$(".headerTopS1Title").click(function(){
		$(this).next(".headerTopS1Content").show();
	});
	$(".headerTopS1Content a").click(function(){
		$(".headerTopS1Title").text($(this).text());
		$(".headerTopS1Content a").css("color","rgb(102,102,102)");
		$(this).css("color","rgb(0, 147, 225)");
		$(this).parents(".headerTopS1Content").hide();
	});
}

function hoverHeaderSinger(){
	$(".headerBottomNavLi a").hover(function(){
		$(".headerBottomNavLiS").css("background-position","-4px -18px");
		$(".headerBottomConPinDao").hide();
		$(".headerBottomConSinger").show();
	},function(){
		$(".headerBottomNavLiS").css("background-position","-4px -4px");
	});
	$(".headerBottomNavLiPindao").mouseover(function(){
		$(".headerBottomConPinDao").show();
		$(".headerBottomConSinger").hide();
		$(".headerBottomNavLiS").hide();
	});
}

//main1 LLeft中选项卡
function tabsmain1LRight(){
	$(".mian1LRightTitleA").click(function(){
		$(this).addClass("mian1LRightTitleAS");
		$(this).siblings().removeClass("mian1LRightTitleAS");
		var titleName=$(this).attr("name");
		tabs(titleName,".mian1LRightCon ul");
	});
	$(".main3Left1TitlePA").click(function(){
		$(this).addClass("main3Left1TitlePAS");
		$(this).siblings().removeClass("main3Left1TitlePAS");
		var titleName=$(this).attr("name");
		var val=$(this).parents(".main3Left1").attr("value");
		tabs(titleName,".main3Left1Con"+val+" ul");
	});
	$(".main3Right1TitlePa").click(function(){
		$(this).addClass("main3Left1TitlePAS");
		$(this).siblings().removeClass("main3Left1TitlePAS");
		var titleName=$(this).attr("name");
		tabs(titleName,".main3RightCon ul");
	});

}
function tabs(titlename,hideUl){
	var conName=titlename+"Con";
	$(hideUl).hide();
	$("[name='"+conName+"']").show();
}

//main1 LRight中,当鼠标移入和移出时，显示相应的蒙版
function showShadowmain1LRightImg(){
	
	$(document).on("mouseover",".mian1LRightShadow i",function(){
		$(this).css("background-image", 'url("css/images/btn_album_play_hover.png")');
	});
	$(document).on("mouseout",".mian1LRightShadow i",function(){
		$(this).css("background-image", 'url("css/images/btn_album_play.png")');
	});
	$(document).on("mouseover",".mian1LRightShadow",function(){
		$(".mian1LRightShadow").css("opacity","0.5");
	});
	$(".mian1LRightCon .mian1LRightConImgA").hover(function(){
		$(this).append('<span class="mian1LRightShadow"><i></i></span>');
	},function(){
		$(".mian1LRightShadow").detach();
	});

}

//main1RightTop中，幻灯片
var handle1;
function slide1main1RightTop(){
	handle1=setInterval("slide1()",1000);
	//当鼠标放到方向按钮时，也停止计时器
	$(".main1RightTopSlideUl,.slide1DirRight,.slide1DirLeft").hover(function(){
		clearInterval(handle1);
	},function(){
		handle1=setInterval("slide1()",1000);
	});
	$(".main1RightTopSlideNumP li").click(function(){
		var val=parseInt($(this).attr("value"));
		slidePicAndNum(val);
		if (val==4) {
			indexSlide1=1;
		}else{
			indexSlide1++;
		}
	});
	$(".slide1DirLeft").click(function(){
		if (indexSlide1==1) {
			indexSlide1=4;
		}else{
			indexSlide1--;
		}
		slidePicAndNum(indexSlide1);
	});
	$(".slide1DirRight").click(function(){
		if (indexSlide1>=4) {
			indexSlide1=1;
		}else{
			indexSlide1++;
		}
		slidePicAndNum(indexSlide1);
	})
}
var indexSlide1=1;
function slide1(){
	indexSlide1++;
	if (indexSlide1==5) {
		indexSlide1=1;
	};
	slidePicAndNum(indexSlide1);	
}
function slidePicAndNum(index){
	$(".main1RightTopSlideUl li").hide();
	$(".main1RightTopSlideUl li:nth-child("+index+")").show();
	$(".main1RightTopSlideNumP li").css("background-position","-8px -58px");
	$(".main1RightTopSlideNumP li:nth-child("+index+")").css("background-position", "-34px -58px");
}

var indexSelect=1;
function allSelect(){
	$(".main2LeftAllSelect").click(function(){
		if (indexSelect==1) {
			$(this).parents(".main3Left1Con").find("input").attr("checked","checked");
			indexSelect=2;
		}else{
			$(this).parents(".main3Left1Con").find("input").removeAttr("checked");
			indexSelect=1;
		}
		
	});
		
	
}

//main4Right中，特殊的选项卡，当鼠标移动到标题时，显示具体内容，其他的都隐藏
function showContentMain4Right(){
	$(".main4RightCon li").mouseover(function(){
		$(".main4RightConP").show();
		$(".main4RightConPCon").hide();
		$(this).find(".main4RightConP").hide();
		$(this).find(".main4RightConPCon").show();
	});
}