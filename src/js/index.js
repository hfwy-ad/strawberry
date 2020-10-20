
$(".w1").on("mouseenter", function () {
	$("#pox-span1").css({ "opacity": "1", "display": "block" })
	$("#pox-span1").on("mouseleave", function () {
		$(this).fadeOut("200")
		$(this).css({ "opacity": "0", "display": "block", "z-index": "100" })
	});
});


$(".w2").on("mouseenter", function () {
	$("#pox-span2").css({ "opacity": "1", "display": "block" })
	$("#pox-span2").on("mouseleave", function () {
		$(this).fadeOut("200")
		$(this).css({ "opacity": "0", "display": "block", "z-index": "100" })
	});

})
$(".w3").on("mouseenter", function () {
	$("#pox-span3").css({ "opacity": "1", "display": "block" })
	$("#pox-span3").on("mouseleave", function () {
		$(this).fadeOut("200")
		$(this).css({ "opacity": "0", "display": "block", "z-index": "100" })
	});

})
//轮播图
//获取id，tagName
function getIdName(id, tagName) {

	if (tagName != 0) {
		return document.getElementById(id).getElementsByTagName(tagName);
	} else {
		return document.getElementById(id);
	}
}
function hdp(json) {
	var timer = null;
	var pd = 0;
	var index = 0;
	var that;
	var option = {
		li: "li",	//默认值：默认用li包裹
		boxid: "",	//最外面div  id
		imgid: "",	//图片外面id
		optid: "",	//opt外面id	
		an: "",		//左右按钮id，用于移上显示和隐藏
		prev: "",	//左边箭头id
		next: "",	//右边箭头id
		ms: 800		//多少毫秒切换一张,默认800毫秒
	}
	for (var i in option) {
		if (json[i] != undefined) {
			option[i] = json[i];
		}
	}

	var div = getIdName(option.boxid, 0);
	var imgs = getIdName(option.imgid, option.li);
	var lis = getIdName(option.optid, option.li);
	var an = getIdName(option.an, 0);
	var prev = getIdName(option.prev, 0);
	var next = getIdName(option.next, 0);
	var ms = option.ms;

	function lbt(that) {
		if (that >= 0) {
			index = that;
		} else {
			if (pd == 0) {
				index++;
			} else {
				index--;
				pd = 0;
			}
		}
		if (index >= lis.length) index = 0;
		if (index < 0) index = lis.length - 1;
		for (var j = 0; j < lis.length; j++) {
			lis[j].className = "";
			imgs[j].className = "";
		}
		lis[index].className = "on";
		imgs[index].className = "current";
	}
	imgs[index].className = "current";
	lis[index].className = "on";
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function () {
			that = this.index;
			lbt(that);
		}
	}
	timer = setInterval(lbt, ms);


	div.onmouseover = function () {
		clearInterval(timer);
		an.style.display = "block";
	}
	div.onmouseout = function () {
		timer = setInterval(lbt, ms);
		an.style.display = "none";
	}
	prev.onclick = function () {
		pd = 1;
		lbt();
	}
	next.onclick = function () {
		pd = 0;
		lbt();
	}
}
hdp({
	li: "li",	//默认值：li;默认用li包裹
	boxid: "boxhdp",	//最外面div  id
	imgid: "img",	//图片外面id
	optid: "li",	//opt外面id	
	an: "an",		//左右按钮id，用于移上显示和隐藏
	prev: "prev",	//左边箭头id
	next: "next",	//右边箭头id
	ms: 3000		//多少毫秒切换一张,默认800毫秒
})
//登录  注册
$("#box5-click").on("click", function () {
	$("#model").css({"display":"block"})
	var b_width = document.body.clientWidth;            //获取整个页面的宽度
	var b_height = document.documentElement.clientHeight;     //获取整个页面的高度
	var left = b_width / 2 - 150 + 'px';
	var top = b_height / 2 - 50 + 'px';                    //使登录框居中
	$("#model").css({"height":b_height + 'px'})

	$("#all").css({"left":left,"top":top})
		
	$(".all-span").on("click",function(){
		$("#model").css({"display":"none"})
	})
	// $("#model").on("click",function(){
	// 	$("#model").css({"display":"none"})
	// })
	$(".A").on('click',function(){
		$("#login").css({"display":"block"})
		$("#new-user").css({"display":"none"})
	 })
	 $(".B").on('click',function(){
		 $("#new-user").css({"display":"block"})
		 $("#login").css({"display":"none"})
	 })
})
//回顶

window.onload = function(){
	var btn = document.getElementById('return');
	var timer = null;
	var isTop = true;
	//获取页面可视区高度
	var clientHeight = document.documentElement.clientHeight;
   console.log(clientHeight)
	 
	//滚动条滚动时触发
	window.onscroll = function() {
	//显示回到顶部按钮
	  var osTop = document.documentElement.scrollTop || document.body.scrollTop;
	  if (osTop >= clientHeight) {
		btn.style.display = "block";
	  } else {
		btn.style.display = "none";
	  };
	//回到顶部过程中用户滚动滚动条，停止定时器
	  if (!isTop) {
		clearInterval(timer);
	  };
	  isTop = false;
   
	};
   
	btn.onclick = function() {
	  //设置定时器
	  timer = setInterval(function(){
		//获取滚动条距离顶部高度
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log('osTop '+osTop);
		var ispeed = Math.floor(-osTop / 7);
		 console.log('ispeed '+ispeed);
		document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
		//到达顶部，清除定时器
		if (osTop == 0) {
		  clearInterval(timer);
		};
		isTop = true;
		 
	  },30);
	};
  };