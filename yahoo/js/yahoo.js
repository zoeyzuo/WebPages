$(function(){
	//mainRight3中，“关闭”的显示和隐藏、边框变化及执行关闭
	closeMainRight3();
	//mainCenterMainTitle中，下拉菜单
	menuMainCenterTitle();
	//mainCenterMainContent中，鼠标移入和移出内容时，已隐藏的内容的显示和隐藏以及处理
	showMainCenterContent();
	//mainRight8中，下拉框，选择显示内容，并提交
	selectMainRight8();

	//mainCenterTop中，随着鼠标移入和移出，改变透明度，改变边框底部的颜色，以及自动交换图片和描述
	changeOpcitymainCenterSlides();
	//当鼠标滑动时，top、left、right定位
	scrollAndFixed();
	//type="text"，当文本框获得和失去焦点时，根据现有文本框的内容判断是否改变文本框的内容
	changeTextContent();

});

//mainRight3中，“关闭”的显示和隐藏、边框变化及执行关闭
function closeMainRight3(){
	$(".mainRight3,.mainRight4").hover(function(){
		$(this).css( "box-shadow","0 0 3px rgba(0,0,0,0.4)");
		$(this).find(".close").show();
	},function(){
		$(this).css( "box-shadow","none");
		$(this).find(".close").hide();
	});
	$(".close").click(function(){
		$(this).parent().hide();
	});
}

//mainCenterMainTitle中，下拉菜单
function menuMainCenterTitle(){
	$(".maincenterMTMore").hover(function(){
		$(this).find(".maincenterMTMoreC").show();
		$(this).css("background-color","#fff");
	},function(){
		$(this).find(".maincenterMTMoreC").hide();
		$(this).css("background-color","transparent");
	});
}
//mainCenterMainContent中，鼠标移入和移出内容时，已隐藏的内容的显示和隐藏以及处理
function showMainCenterContent(){
	$(".mainCenterMainContent1").hover(function(){
		$(this).find(".hide").show();
	},function(){
		$(this).find(".hide").hide();
	});
	$(".mainCenterMainContent1Attitude .a3").click(function(){
		$(this).parents(".mainCenterMainContent1").hide();
	});
}


//mainRight8中，下拉框，选择显示内容，并提交
function selectMainRight8(){
	$(".mainRight3TopAS,.mainRight3TopRight i").click(function(){
		$(".mainRight3TopRSelect").show();
	});
	$(".mainRight3TopRSelect a").click(function(){
		$(".mainRight3TopRSelect a").css("font-weight","400");
		$(this).css("font-weight","700");
		$(".mainRight3TopRSelect i").css("background-image", 'none');
		$(this).prev("i").css("background-image", 'url("css/images/pc_icons_btns_sprite_0913_3pm.png")');
		var txt=$(this).text();
		$(".mainRight3TopAS").text(txt);
		$(this).parents(".mainRight3TopRSelect").hide();
		$(".mainRight8content1 img").attr("src","css/images/"+txt+".jpg");
	});
}
//mainCenterTop中，随着鼠标移入和移出，改变透明度，改变边框底部的颜色，以及自动交换图片和描述
var handle;
function changeOpcitymainCenterSlides(){
	$(".mainCenterSlidesTopDes").hover(function(){
		$(this).css("opacity","1");
	},function(){
		$(this).css("opacity","0.7");
	});

	$(".mainCenterSlidesBottom li").hover(function(){
		$(".mainCenterSlidesBottom li").css("border-bottom","5px solid #fff");
		$(this).css("border-bottom","5px solid rgb(80, 0, 149)");
		var val=parseInt($(this).attr("value"));
		clearInterval(handle);
		indexSlides=val+1;
		$(".mainCenterSlidesTop img").attr("src","css/images/11"+val+".jpg");
		changeDes(val);

	},function(){
		$(this).css("border-bottom","#fff");
		handle=setInterval("slidesFun()",1000);
	});

	$(".mainCenterSlidesTop").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slidesFun()",1000);
	});
	handle=setInterval("slidesFun()",1000);
}
//幻灯片实现代码
var indexSlides=1;
function slidesFun(){
	if (indexSlides==6) {
		indexSlides=1;
	};
	$(".mainCenterSlidesBottom li").css("border-bottom","5px solid #fff");
	$(".mainCenterSlidesBottom li:nth-child("+indexSlides+")").css("border-bottom","5px solid rgb(80, 0, 149)");
	$(".mainCenterSlidesTop img").attr("src","css/images/11"+indexSlides+".jpg");
	changeDes(indexSlides);
	indexSlides++;
}
//slide中描述的改变
function changeDes(i){
	var h3,p,pa;
	switch(i){
		case 2:h3="Bryan Cranston's 'transformative' new role";
				p="The actor portrays another imposing figure, but it's a huge departure from his gritty turn in Breaking";
				break;
		case 3:h3="Hugh Jackman turns the tables on interviewer";
				p="The star instantly recognizes a young man on the red carpet from his past — and the Q&A takes a turn.";
				break;
		case 4:h3="Bryan Cranston's 'transformative' new role";
				p="The actor portrays another imposing figure, but it's a huge departure from his gritty turn in Breaking";
				break;
		case 5:h3="Hugh Jackman turns the tables on interviewer";
				p="The actor figure, but it's a huge departure from his gritty turn in Breaking";
				break;
		default:h3="Most expensive homes on the U.S. market";
				p="If you can't afford $115M to buy this Beverly Hills stunner, you could rent it — for $600K a month.";
	}
	$(".mainCenterSlidesTopDesH3 a").text(h3);
	$(".mainCenterSlidesTopDesMain p").text(p);
}

//当鼠标滑动时，top、left、right定位
function scrollAndFixed(){
	$(window).scroll(function(){
		var scr=$(window).scrollTop();
		if (scr>=88) {
			$("#top").css({"position":"fixed","top":"0","z-index":"99","box-shadow":"rgb(80, 0, 149) 0px 0px 9px 0px"});
			
		}else{
			$("#top").css({"position":"static","box-shadow":"none"});
		};
		if (scr>=100) {
			$("#mainLeftMain").css({"position":"fixed","top":"-50px","z-index":"98"});
		}else{
			$("#mainLeftMain").css({"position":"static"});
		};
		if (scr>=1550) {
			$("#mainRightMain").css({"position":"fixed","top":"-1550px","z-index":"98"});
		}else{
			$("#mainRightMain").css({"position":"static"});
		};
	});
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
