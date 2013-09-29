//选项卡的效果
function show(a,b){
	var eleINTitle;
	var eleINContent;
    var eleJSNTitle;
    var eleJSNContent;

    if (a==0) {
		eleINTitle = document.getElementById("importantNews");
		eleINContent = document.getElementById("importantNewsContent");
	    eleJSNTitle = document.getElementById("jiangSuNews");
	    eleJSNContent=document.getElementById("jiangsuNewsContent");
	}else{ 
		if (a==1) {
			eleINTitle = document.getElementById("todayPlayT");
			eleINContent = document.getElementById("todayPlayC");
		    eleJSNTitle = document.getElementById("lm2MovieTVT");
		    eleJSNContent=document.getElementById("lm2MovieTVC");
		}else{
			eleINTitle = document.getElementById("peiXunT");
			eleINContent = document.getElementById("peiXunC");
		    eleJSNTitle = document.getElementById("examT");
		    eleJSNContent=document.getElementById("examC");
		}
	};
	if (b==1) {
		eleJSNTitle.style.fontWeight="400";
		
		eleJSNTitle.style.border="0px";

		eleINTitle.style.fontWeight="bold";
		
		eleINTitle.style.borderTop="2px solid rgb(69, 143, 206)";
		eleINTitle.style.borderLeft="1px solid rgb(189, 215, 242)";
        eleINTitle.style.borderRight="1px solid rgb(189, 215, 242)";
        eleINTitle.style.borderBottom="1px solid transplant";

		eleINContent.style.display="block";
		eleJSNContent.style.display="none";
	}else{
		eleINTitle.style.fontWeight="400";
		
		eleINTitle.style.border="0px";

		eleJSNTitle.style.fontWeight="bold";
		
		eleJSNTitle.style.borderTop="2px solid rgb(69, 143, 206)";
		eleJSNTitle.style.borderLeft="1px solid rgb(189, 215, 242)";
        eleJSNTitle.style.borderRight="1px solid rgb(189, 215, 242)";
        eleJSNTitle.style.borderBottom="1px solid transplant";

		eleINContent.style.display="none";
		eleJSNContent.style.display="block";
	};
	if (a==1||a==2) {
		if (b==1) {
			eleJSNTitle.style.backgroundImage="none";
			eleINTitle.style.backgroundImage="url('../qq/css/images/vH2Select.png')";
		}else{
			eleINTitle.style.backgroundImage="none";
			eleJSNTitle.style.backgroundImage="url('../qq/css/images/vH2Select.png')";
		}

	}else{
		if (b==1) {
			eleJSNTitle.style.backgroundImage="none";
			eleINTitle.style.backgroundImage="url('../qq/css/images/vH2Select.png')";
		}else{
			eleINTitle.style.backgroundImage="none";
			eleJSNTitle.style.backgroundImage="url('../qq/css/images/vH2Select.png')";
		}
		
	};
}

//搜索区背景图的切换
function showSelect(a){
	var ele=document.getElementById("searchSelect");
	var ele1=document.getElementById("searchSelectUL");
	
	if (a==1) {
		ele.style.backgroundPosition="-552px -200px";
		ele1.style.display="block";
	}else{
		ele.style.backgroundPosition="-877px -200px";
		ele1.style.display="none";
	}
}

//指数的选择
function showZhiShu(a){
	var eleShangT=document.getElementById("shangZhengT");
	var eleHengT=document.getElementById("hengZhiT");
	var eleDaoT=document.getElementById("daoZhiT");
	var eleShangC=document.getElementById("shangZhengC");
	var eleHengC=document.getElementById("hengZhiC");
	var eleDaoC=document.getElementById("daoZhiC");
	if (a==1) {
		eleShangT.style.backgroundColor="rgb(69, 143, 206)";
		eleShangT.style.color="#fff";

		eleHengT.style.backgroundColor="#fff";
		eleHengT.style.color="rgb(69, 143, 206)";

		eleDaoT.style.backgroundColor="#fff";
		eleDaoT.style.color="rgb(69, 143, 206)";
		
		eleShangC.style.display="block";
		eleHengC.style.display="none";
		eleDaoC.style.display="none";
	}else{
		if (a==2) {
			eleShangT.style.backgroundColor="#fff";
			eleShangT.style.color="rgb(69, 143, 206)";

			eleHengT.style.backgroundColor="rgb(69, 143, 206)";
			eleHengT.style.color="#fff";

			eleDaoT.style.backgroundColor="#fff";
			eleDaoT.style.color="rgb(69, 143, 206)";

			eleShangC.style.display="none";
			eleHengC.style.display= "block";
			eleDaoC.style.display="none";
		}else{
			eleShangT.style.backgroundColor="#fff";
			eleShangT.style.color="rgb(69, 143, 206)";

			eleHengT.style.backgroundColor="#fff";
			eleHengT.style.color="rgb(69, 143, 206)";

			eleDaoT.style.backgroundColor="rgb(69, 143, 206)";
			eleDaoT.style.color="#fff";

			eleShangC.style.display="none";
			eleHengC.style.display="none";
			eleDaoC.style.display="block";
		}
	}

}

//lm2左侧隐藏内容的显示
var i=0;
function showQQMore(a){
	var eleQQMore=document.getElementById("rightArea1R");
	var eleQQMoreC=document.getElementById("lm2RLineULC");
	if (a==1) {
		if (i==0) {
			eleQQMoreC.style.display="block";
			eleQQMore.style.left="-353px";
			eleQQMore.style.backgroundPosition ="-86px -162px";
			i=1;
		}else{
			eleQQMoreC.style.display="none";
			eleQQMore.style.left="-14px";
			eleQQMore.style.backgroundPosition ="-86px 0px";
			i=0;
		}
	}else{
		eleQQMoreC.style.display="none";
		eleQQMore.style.left="-14px";
		eleQQMore.style.backgroundPosition ="-86px 0px";
		i=0;
	}
}


//搜索区边框变成蓝色
function borderTurnBlue(a){
	var eleborderB=document.getElementById("searchs");
	if (a==1) {
		eleborderB.style.borderColor="rgb(50,151,216)";
	}else{
		eleborderB.style.borderColor="rgb(211,211,211)";
	}
}

//lm3右侧第三块内容的手风琴效果
function lm3R3showContent(a,b){
	var eveCurrent;
	var eveNow;
	//eveCurrent=document.getElementById("lm2R3T"+a+b);
	eveNow=document.getElementById("lm2R3C"+a+b);
	eveNow.style.display="block";
	for (var i =  1; i<=5; i++) {
		if (i!=b) {
			eveCurrent=document.getElementById("lm2R3C"+a+i);
			eveCurrent.style.display="none";
		};
	};
}
//lm3右侧第三块内容，当鼠标悬浮上面时，显示背景色
function lm2R3showBgBlue(a,b){
	var elebg=document.getElementById("lm2R3Li"+a);
	if (b==1) {		
		elebg.style.backgroundColor="#d2e1f1";
	}else{
		elebg.style.backgroundColor="#fff";
	}
}

//搜索区text的变化
function textNo(a){
	var eletext=document.getElementById("textsosoT");
	var val=eletext.value;
	if (a==1) {
		if (val=="QQ") {
			eletext.value="";
		}
	}else{
		if (val=="") {
			eletext.value="QQ";
		}
	}
}

//lm9左侧的特效，随着时间变化而选择不同的元素进行背景颜色的变化
function lm9RCTurn(){
	setInterval("lm9trun()", 1000);
}
var index=1;
function lm9trun(){
	var eleNotCurrent;
	var elepicA;
	
	for (var i = 1; i<=16;i++) {
		eleNotCurrent=document.getElementById("lm9TCLi"+i);
		elepicA=document.getElementById("lm9TCPicA"+i);
		if (i!=index) {
			eleNotCurrent.style.backgroundImage="url('../qq/css/images/1328595636476.gif')";
			eleNotCurrent.style.color="rgb(102, 102, 102)";
			elepicA.style.display="none";
		}else{
			eleNotCurrent.style.backgroundImage="url('../qq/css/images/T1X7YOXmReXXchKLPa-6-31.gif')";
			eleNotCurrent.style.color="#fff";
			elepicA.style.display="block";
		}
	};
	index++;
	if (index==17) {
		index=1;
	};
}