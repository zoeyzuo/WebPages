$(function(){
	//mainRight3中，“关闭”的显示和隐藏、边框变化及执行关闭
	closeMainRight3();
	//mainCenterMainTitle中，下拉菜单
	menuMainCenterTitle();
	//mainCenterMainContent中，鼠标移入和移出内容时，已隐藏的内容的显示和隐藏以及处理
	showMainCenterContent();
	//mainRight8中，下拉框，选择显示内容，并提交
	selectMainRight8();

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