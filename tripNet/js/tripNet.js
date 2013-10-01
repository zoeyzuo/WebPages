$(function(){
	initEvents();
});
function initEvents(){	
	//top
	$(".topRSearchs input").focus(function(){
		var text1=$(this).val();
		var val=$(this).attr("name");
		if (text1==val) {
			$(this).val("");
		};
	}).blur(function(){
		var text1=$(this).val();
		var val=$(this).attr("name");
		if (text1=="") {
			$(this).val(val);
		};
	});
	//mainLeft
	$(".main2LeftLi").hover(function(){
		var clickI= $(this).attr("clickIt");
		if (clickI!="y") {
			$(this).find("p").css({"color":"rgb(228,0,119)"});
			$(this).css("background-image", 'url("css/images/banner_bg2.gif")');
		}	
	},function(){
		var clickI= $(this).attr("clickIt");
		if (clickI!="y") {
			$(this).find("p").css({"color":"rgb(163, 163, 163)"});
			$(this).css("background-image", 'url("css/images/banner_bg1.gif")');
		}
	}).click(function(){
		var clickI= $(this).attr("clickIt");
		if (clickI!="y") {
			$(".main2LeftLi").css("background-image", 'url("css/images/banner_bg1.gif")');
			$(this).css("background-image", 'url("css/images/banner_bg3.gif")');
			$(".main2LeftLi").find("p").css({"color":"rgb(163, 163, 163)"});
			$(this).find("p").css({"color":"#fff"});
			$(".main2LeftLi").attr("clickIt","n");
			$(this).attr("clickIt","y");
		};
		
	});

	slide1other();
	
	//main right2
	$(".main2RLeft1Content li").hover(function(){
		$(this).find("p").show();
	},function(){
		$(this).find("p").hide();
	});
	//main right3
	$(".main2RLeft2Ul li").hover(function(){
		$(this).find("span").hide();
	},function(){
		$(this).find("span").show();
	});

	tab();
	hoverShow();
	setPositon();
	setInterval("slide2()",1000);
	slide2Dir();
	setInterval("slide3()",2000);
	slide3Other();
}
function slide1other(){
	//幻灯片1，mainRight1 ，鼠标移入和移出时，方向图标的显示和隐藏
	var handle=setInterval("showLight()",2000);
	$(".main2RTopUl").hover(function(){
		clearInterval(handle);
		$(".main2RDir").show();
	},function(){
		handle=setInterval("showLight()",2000);
		$(".main2RDir").hide();
	});
	//幻灯片1，点击幻灯片上的方向时，图片的显示
	$(".main2RDir").click(function(){
		var val2=$(this).attr("value");
		if (val2=="1") {	
			if (index==1) {
				index=5;
			}
			index--;
		};
		if (val2=="2") {
			if (index>=4) {
				index=0;
			};
			index++;
		};
		show(index);
	});
	//幻灯片1
	$(".main2RNum span").hover(function(){
		clearInterval(handle);
		var val=parseInt($(this).attr("value"));
		show(val);
		index=val;
	},function(){
		handle=setInterval("showLight()",2000);
	});
}
function slide3Other(){
	$(".main2RLeft4Bottom1").hover(function(){
		$(this).css("background-image","url('css/images/ad_right2.gif')");
	},function(){
		$(this).css("background-image","url('css/images/imgs/ad_right1.gif')");
	});
	$(".main2RLeft4Bottom2").hover(function(){
		$(this).css("background-image","url('css/images/ad_left2.gif')");
	},function(){
		$(this).css("background-image","url('css/images/imgs/ad_left1.gif')");
	});
	$(".main2RLeft4Bottom div").click(function(){
		var val3=$(this).attr("value");
		if (val3=="1") {
			if (index3==1) {
				index=4;
			}else{
				index3--;
			}	
			
		}else{
			if (index3==4) {
				index=1;
			}else{
				index3++;
			}	
		}
		$(".main2RLeft4Content").hide();
		$(".main2RLeft4Content"+index3).show();
	});
}
var index3=1;
function slide3(){
	$(".main2RLeft4Content").hide();
	$(".main2RLeft4Content"+index3).show();
	index3++;
	if (index3==5) {
		index3=1;
	};
}
function slide2Dir(){
	$(".main2RLeft3LR").click(function(){
		var val4=$(this).attr("value");
		if (val4<=2) {
			if (slide2Index==1) {
				slide2Index=9;
			};
			slide2Index--;
			$(".main2RLeft3Center ul").animate({left:"+112px"},1000);
			$(".main2RLeft3Center ul").append($(".main2RLeft3CenterLi"+slide2Index));
		}else{
			if (slide2Index>=9) {
				slide2Index=1;
			};
			slide2Index++;
			$(".main2RLeft3Center ul").animate({left:"-112px"},1000);
			$(".main2RLeft3Center ul").append($(".main2RLeft3CenterLi"+slide2Index));
		}
	});
}
var slide2Index=1;
function slide2(){
	$(".main2RLeft3Center ul").animate({left:"-112px"},1000);
	
	$(".main2RLeft3Center ul").append($(".main2RLeft3CenterLi"+slide2Index));
	slide2Index++;
	/*$(".main2RLeft3CenterLi"+index).hide();*/
	if (slide2Index==10) {
		slide2Index=1;
	};
}
//页面滚动时
function setPositon(){

	$(window).scroll(function(){
		if ($(window).scrollTop()>=170) {
			$(".main2Left").css({"position": "fixed", "top": "0px", "left": "178px"});
		}else{
			$(".main2Left").css({"position": "static"});
		}
		//var scrollTop= $(window).scrollTop();
		/*if ($(window).scrollTop()>=170){
			alert("e");
			//$(".main2Left").css({"position": "fixed", "top": "-170px", "left": "195px"});
			
		})else{
			//
		}*/
	});
	
}
//mainRight bottom
function hoverShow(){
	$(".main2R2RightC4Content a").css("opacity","0.4");
    var handle2=setInterval("hoverTurnShow()",2000);
	$(".main2R2RightC4Content a").hover(function(){
		$(this).css({"background-color":"red","opacity":"1"});
		clearInterval(handle2);
	},function(){
		$(this).css({"background-color":"#fff","opacity":"0.4"});
		handle2=setInterval("hoverTurnShow()",2000);
	});	
}
function hoverTurnShow(){
	var ran1=Math.random()*200;
	var ran2=Math.random()*200;
	var ran3=Math.random()*200;
	var ran4=Math.random()*200;
	$(".main2R2RightC4ContentA1").animate({left:ran1+"px",top:"-20px"},2000,function(){
		$(this).css("top","235px");
	});
	$(".main2R2RightC4ContentA2").animate({left:ran2+"px",top:"-20px"},3000,function(){
		$(this).css("top","250px");
	});
	$(".main2R2RightC4ContentA3").animate({left:ran3+"px",top:"-20px"},4000,function(){
		$(this).css("top","235px");
	});
	$(".main2R2RightC4ContentA4").animate({left:ran4+"px",top:"-20px"},5000,function(){
		$(this).css("top","235px");
	});
}

function tab(){
	$(".main2RRight1Title span").mouseover(function(){
		var val3=$(this).attr("value");
		if (val3=="1") {
			$(".main2R2RDir1").css("left","52px");
		}else{
			$(".main2R2RDir1").css("left","172px");
		}
		$(".main2RRight1Title span").css("color","rgb(65, 62, 62)");
		$(this).css("color","rgb(228, 0, 119)");
		$(".main2R2RightC1Content").hide();
		$(".main2R2RightC1Content"+val3).show();
	});

}
//幻灯片1
var index=0;
function showLight(){
	//如果放后面，那么点击right图标时，就会跳过一张图片，所以应放在此位置
	index++;
	if (index==5) {
		index=1;
	};
	show(index);
}
//幻灯片1
function show(j){
	for( var i=1;i<5;i++){
		$(".main2RTopLi"+i).css("display","none");
		$(".main2RNum span").css("opacity","0.4");
	}
	$(".main2RTopLi"+j).css("display","block");
	$(".main2RNum span:nth-child("+j+")").css("opacity","1");
}