$(function(){
	initEvents();
});
var handle;
function initEvents(){
    handle=setInterval("slide()",1000);
    setInterval("slideBeauty()",1000);
    //main1Left中，鼠标移入和移出幻灯片的图片上时，停止和继续幻灯片
	$(".main1CLeftLi").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});
	//main1Left中,点击num数字时，将显示相应的图片
	$(".main1NumA").click(function(){
		var val=$(this).attr("value");
		index=val;
	});
	//鼠标移入移出图片时，字体颜色的变化
	$(".mostPic1").hover(function(){
		$(this).find(".main1CRightTopP a").css("color","rgb(255,102,0)");
	},function(){
		$(this).find(".main1CRightTopP a").css("color","#000");
	});
	//图片上文字颜色变化
	$(".imgDes").hover(function(){
		$(this).css("color","rgb(255,102,0)");
	},function(){
		$(this).css("color","#fff");
	});

	//main2中，特殊选项卡的的显示和隐藏   
	$(".main2Leftli").mouseover(function(){
		$(".main2Leftli").find(".main2LeftLiContent").css("display","none");
		$(".main2Leftli").find(".main2LeftH3").css("display","block");
		$(this).children(".main2LeftLiContent").css("display","block");
		$(this).children(".main2LeftH3").css("display","none");
	});
	
	//main5中，随着鼠标的移入和移出，图片上的边框和介绍的显示和消失
	$(".main5Pic").hover(function(){
		$(this).find(".main5picA span,.main5PicP").css("display","block");
	},function(){
		$(this).find(".main5picA span,.main5PicP").css("display","none");
	});

	//main6中，随着鼠标的移入和移出，介绍的显示和隐藏
	$(".main6Li").hover(function(){
		$(this).find("div").css("display","block");
	},function(){
		$(this).find("div").css("display","none");
	});


}


//普通的幻灯片实现代码
var index=1;
function slide(){
	var leftL=(index-1)*824;
	
	$(".main1NumA").css({"top":"0", "background-color":"#fff", "color": "#000"});
	$(".main1NumA"+index).css({"top":"-10px", "background-color":"#000", "color": "#fff"});
	index++;
	if (index==5) {
		index=1;
	};
}

//漂亮的循环幻灯片
var indexBeauty=1;
function slideBeauty(){
	for( i=1; i<=8;i++)
	{
		if (i>indexBeauty) {
			$("#main3PicliID"+i).attr("class","main3Picli"+(i-indexBeauty));
		}else{
			$("#main3PicliID"+i).attr("class","main3Picli"+(8+i-indexBeauty));
		}
	}	
	indexBeauty++;
	if (indexBeauty==9) {
		indexBeauty=1;
	};
}
