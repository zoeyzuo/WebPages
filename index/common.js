$(function(){
	alert($(window).height());
	$("#goBack").css("top", 500px - $("#goBack").height() + "px");
	$("#goBack").css("left", 1459px - $("#goBack").width() + "px");
    /*$(document).scroll(function () {
        $("#goBack").css("top", $(window).scrollTop() + 500px - $("#miniNav").height() + "px");
    });*/
});
/*function initEvents(){
	var heightNow=$(window).scrollTop()+$(window).height()-60px;
	var WidthNow=$(window).width()-60px;
	$("#goBack").css({"top":heightNow+"px","left":WidthNow+"px");
}*/