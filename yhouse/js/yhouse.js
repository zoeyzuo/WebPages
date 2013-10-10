$(function(){
	initEvents();
});
function initEvents(){
	//footTop中，鼠标移入和移出时，字体颜色的改变；
	changeFootTop();
	//type="text"，当文本框获得和失去焦点时，根据现有文本框的内容判断是否改变文本框的内容
	changeTextContent();
	//mainLeft1 slide1中，幻灯片的实现；当鼠标移入和移出图片时，停止幻灯片的转换；当鼠标放到相应的小图标时，显示相应的图片
	slide1MainLeft1();
	//mainLeft2 slide2中，幻灯片的实现；当鼠标移入和移出图片时，停止幻灯片的转换；当鼠标放到相应的小图标时，显示相应的图片
	slide2MainLeft();
	//main1Right slide3中,幻灯片的实现；当鼠标移入和移出图片时，停止幻灯片的转换；
	slide3MainRight();
	//main2Left中，改变透明度
	$(".main2LeftImgs span").css("opacity","0.5");

	//main2Right中，选项卡
	tabMain2Right();
	//main5中,手风琴效果
	accordionMain5();
	//main6Right slide4中，幻灯片的实现；当鼠标移入和移出图片时，停止幻灯片的转换；当鼠标放到相应的小图标时，显示相应的图片
	slide4Main6Right();

	//main10 slide5中，幻灯片的实现；当鼠标移入和移出图片时，停止幻灯片的转换；当鼠标放到相应的小图标时，显示相应的图片
	slide5Main10();
}
//footTop中，鼠标移入和移出时，字体颜色的改变；
function changeFootTop(){
	$(".footMainT a").hover(function(){
		$(this).css("color", "red");
		$(this).find("span").css("color", "red");
	},function(){
		$(this).css("color", "rgb(204, 204, 204)");
		$(this).find("span").css("color", "rgb(119, 119, 119)");
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
//mainLeft1Top中，简单的幻灯片
var handle1;
function slide1MainLeft1(){
	handle1=setInterval("slide1()",2000);
	slideOther("main1SlideUl","main1SlideNum",handle1,"slide1()",indexSlide1,1);
}
var indexSlide1=1;
function slide1(){
	if (indexSlide1==5) {
		indexSlide1=1;
		//$(".main1SlideUl").css("left","0px");
	};
	slideChangePicAndNum("main1SlideUl","main1SlideNum",indexSlide1,1);
	indexSlide1++;
}
//mainLeft2中，幻灯片的实现；当鼠标移入和移出图片时，停止幻灯片的转换；当鼠标放到相应的小图标时，显示相应的图片
var handle2;
function slide2MainLeft(){
	handle2=setInterval("slide2()",2000);
	slideOther("main1Slide2Ul","main1Slide2Num",handle2,"slide2()",indexSlide2,2);
}
var indexSlide2=1;
function slide2(){
	if (indexSlide2==3) {
		indexSlide2=1;
	};
	slideChangePicAndNum("main1Slide2Ul","main1Slide2Num",indexSlide2,2);
	indexSlide2++;
}

//main1Right slide3中,幻灯片的实现；当鼠标移入和移出图片时，停止幻灯片的转换；
var handle3;
function slide3MainRight(){
	handle3=setInterval("slide3()",2000);
	$(".main1Right1Slide3Ul").hover(function(){
		clearInterval(handle3);
	},function(){
		handle3=setInterval("slide3()",2000);
	});
}
var indexSlide3=1;
function slide3(){
	if (indexSlide3==5) {
		indexSlide3=1;
	};
	slideChangePicAndNum("main1Right1Slide3Ul","",indexSlide3,3);
	indexSlide3++;
}

//main6Right slide4中，幻灯片的实现；当鼠标移入和移出图片时，停止幻灯片的转换；当鼠标放到相应的小图标时，显示相应的图片
var handle4;
function slide4Main6Right(){
	handle4=setInterval("slide4()",2000);
	slideOther("main1Slide4Ul","main1Slide4Num",handle4,"slide4()",indexSlide4,4);
}
var indexSlide4=1;
function slide4(){
	if (indexSlide4==4) {
		indexSlide4=1;
	};
	slideChangePicAndNum("main1Slide4Ul","main1Slide4Num",indexSlide4,4);
	indexSlide4++;
}

//当鼠标移入和移出图片时，停止幻灯片的转换；当鼠标放到相应的小图标时，显示相应的图片
function slideOther(ulPicName,ulnumName,handle,slideFun,index,widthIndex){
	$("."+ulPicName+" li").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval(slideFun,2000);
	});
	$("."+ulnumName+" li").hover(function(){
		clearInterval(handle);
		var val=parseInt($(this).attr("value"));
		index=val;
		slideChangePicAndNum(ulPicName,ulnumName,index,widthIndex);
		var picNum=$("."+ulnumName+" li").length;
		if (val==picNum) {
			val=1;
		}else{
			val=val+1;
		}
		if (widthIndex==1) {
			indexSlide1=val;
		}else{
			if (widthIndex==2) {
				indexSlide2=val;
			}else{
				if (widthIndex==3) {
					indexSlide3=val;
				}else{
					if (widthIndex==4) {
						indexSlide4=val;
					}else{
						indexSlide5=val;
					}
				}
			}
		}
	},function(){
		handle=setInterval(slideFun,2000);
	});
}

//slide,切换图片和改变图标
function slideChangePicAndNum(ulPicName,ulnumName,index,widthIndex){
	var width;
	if (widthIndex==1) {
		width=680;
	}else{
		if (widthIndex==2) {
			width=320;
		}else{
			if (widthIndex==3) {
				width=246;
			}else{
				if (widthIndex==4) {
					width=268;
				};
			}
		}
	}
	$("."+ulPicName).animate({left:"-"+(index-1)*width+"px"},1000);
	if (ulnumName!="") {
		$("."+ulnumName+" li").css({"background-color":"rgb(255,255,255)","opacity":"0.5"});
		$("."+ulnumName+" li:nth-child("+index+")").css({"background-color":"rgb(255,255,255)","opacity":"1"});
	};	
}

//main2Right中，选项卡
function tabMain2Right(){
	$(".main2RightUl li").mouseover(function(){
		$(".main2RightUl li").css("color","rgb(51,51,51)");
		$(this).css("color","rgb(193, 39, 45)");
		var val=$(this).attr("value");
		$(".main2RightD").hide();
		$(".main2RightD"+val).show();
	});
}

//main5中,手风琴效果
function accordionMain5(){
	$(".main5Ul li").mouseover(function(){
		//$(".main5Ul li").stop();
		//$(".main5Ul").find(".on").animate({width:"41px"},300);
		$(".main5Ul li").css("width","41px");
		//$(this).animate({width:"714px"},500);
		
		$(this).css("width","714px");
		//$(this).addClass("on");
		
		/*$(".main5Ul li").animate({width:"41px"},300);
		$(this).animate({width:"714px"},2000);*/
	});
}

//main10 slide5中，幻灯片的实现；当鼠标移入和移出图片时，停止幻灯片的转换；当鼠标放到相应的小图标时，显示相应的图片
var handle5;
function slide5Main10(){
	handle5=setInterval("slide5()",2000);
	$(".main10ContentUl").hover(function(){
		clearInterval(handle5);
	},function(){
		handle5=setInterval("slide5()",2000);
	});
}
var indexSlide5=1;
function slide5(){
	if(indexSlide5==5){
		indexSlide5=1;
	}
	$(".main10ContentUl").animate({left:"-"+(indexSlide5-1)*915+"px"},1000);
	indexSlide5++;
}


