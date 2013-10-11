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
	//main1 LRight中,当鼠标移入和移出时，显示相应的内容
	showShadowmain1LRightImg();
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
}
function tabs(titlename,hideUl){
	var conName=titlename+"Con";
	$(hideUl).hide();
	$("[name='"+conName+"']").show();
}