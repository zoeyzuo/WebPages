$(function(){
	initEvents();

});

//文本框获得焦点和失去焦点时
function initEvents(){
	$(".loginTextT,.mainRBLeftText,.mainRBLeftTextP").focus(function(){
		$(this).css({"border-style":"inset"});
		if ($(this).val()==this.name) {
			$(this).val("");	
		};
		$(this).next().css("display","block");	
	});

	$(".loginTextT,.mainRBLeftText").blur(function(){
		$(this).css({"border-style":"solid"});
		if ($(this).val()=="") {
			$(this).val(function(){
				return this.name;
				$("#closePic").css("display","none");
			});
		};
		$(this).next().css("display","none");
	});

	$("#loginPicT").keyup(function(){
		var val=$(this).val();
		if (val=="") {
			$("#closePic").css("display","none");
		}else{
			$("#closePic").css("display","block");
		}
	});
	$("#closePic").click(function(){
		$("#loginPicT").val("");
	});
	$("#topR1SearchInput").keyup(function(){
		var val=$(this).val();
		if (val=="") {
			$(this).css("background-image",'url("images/searchbg2.gif")');
		}else{
			$(this).css("background-image",'none');
		}
	});
	$("#placeBtn").click(function(){
		$(".foucesShowSpecial").css("display","none");
	});
	$("#focusShowUl span").click(function(){
		var val=$(this).text();
		$("#mainRBLeftTextPlace").val(val);
	});
	$("#topR2RightDao a").mouseover(function(){
		$(this).next().css("display","block");
	});
	$("#daoHangMore").hover(function(){
		$(this).css("display","block");
	},function(){
		$(this).css("display","none");
	});

	$("#loginBtn").hover(function(){
		$(this).css("background-position","0 -112px");
	},function(){
		$(this).css("background-position","0 -70px");
	}).mousedown(function(){
		$(this).css("background-position","0 -154px");
	});

	$("#loginSign").hover(function(){
		$(this).css("background-position","-200px -112px");
	},function(){
		$(this).css("background-position","-200px -70px");
	}).mousedown(function(){
		$(this).css("background-position","-200px -154px");
	});
}
