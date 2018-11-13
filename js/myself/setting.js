mui.init()

mui.plusReady(function () {
    
})

// 退出登录按钮添加点击监听
document.getElementById("btn-logout").addEventListener('tap', function(e) {
	
	
	var myself = plus.webview.getWebviewById('page/tab/myself.html');
	mui.fire(myself,'logoutsuccess');
	
	mui.back()
});

// 修改密码按钮添加点击监听
document.getElementById("li-modify-password").addEventListener('tap', function(e) {
	
	// 跳转至获取验证码画面
	mui.openWindow({
		id: 'get_captcha',
		url: '../login/get_captcha.html',
		extras: {
			// 标记位：修改密码
			flag: 1
		},
		style: {
			cachemode:"noCache"
		}
	});
});