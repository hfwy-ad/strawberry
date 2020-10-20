
$(".w1").on("mouseenter", function () {
	$("#pox-span1").css({ "opacity": "1", "display": "block" })
	$("#pox-span1").on("mouseleave", function () {
		$(this).fadeOut("200")
		$(this).css({ "opacity": "0", "display": "block", "z-index": "5" })
	});
});


$(".w2").on("mouseenter", function () {
	$("#pox-span2").css({ "opacity": "1", "display": "block" })
	$("#pox-span2").on("mouseleave", function () {
		$(this).fadeOut("200")
		$(this).css({ "opacity": "0", "display": "block", "z-index": "5" })
	});

})
$(".w3").on("mouseenter", function () {
	$("#pox-span3").css({ "opacity": "1", "display": "block" })
	$("#pox-span3").on("mouseleave", function () {
		$(this).fadeOut("200")
		$(this).css({ "opacity": "0", "display": "block", "z-index": "5" })
	});

})

//登录  注册
$("#box5-click").on("click", function () {
	var b_width = document.body.clientWidth;            //获取整个页面的宽度
	var b_height = document.documentElement.clientHeight;     //获取整个页面的高度
	var left = b_width / 2 - 150 + 'px';
	var top = b_height / 2 - 50 + 'px';                    //使登录框居中

	var mask = document.createElement('div');

	mask.style.height = b_height + 'px';              //使遮罩层高度能够覆盖整个页面

	mask.id = 'mask';

	document.body.appendChild(mask);

	var pop_login = document.createElement('div');
	pop_login.style.left = left;
	pop_login.style.top = top;
	pop_login.id = 'pop-login';                           //使登录框能够居中显示
	pop_login.innerHTML =
		   `<form action="#" method="post">
			   <input type="button" value="登入"></input>
			   <input type="text" name="登入" placeholder="请输入用户名"></input>
			   <input type="password" name="登入" placeholder="请输入密码"></input>
			   <a href="#">忘记密码</a>
			   <input type="submit" value="登入"></input>
		   </form>
		   <div id="close-pop">X</div>`

	document.body.appendChild(pop_login);
	document.getElementById('close-pop').onclick = function () {
		document.body.removeChild(mask);
		document.body.removeChild(pop_login);                         //给x添加点击事件，移除登录框和遮罩层
	}

	mask.onclick = function () {
		document.body.removeChild(mask);
		document.body.removeChild(pop_login);                                //给遮罩层添加点击事件，移除登录框和遮罩层
	}
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