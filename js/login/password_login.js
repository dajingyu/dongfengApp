mui.init({
	swipeBack: false
})

mui.plusReady(function() {
	
	// 登录按钮添加点击监听
	document.getElementById("btn-login").addEventListener('tap', function(e) {
				
		var account = document.getElementById("edt-account").value;
		
		var password = document.getElementById("edt-password").value;
		
		if(account == null || account.length == 0) {
			
			mui.toast('请输入登录手机号');
		} else if(password == null || password.length == 0) {
				
			mui.toast('请输入密码');
		} else {
			
			var myself = plus.webview.getWebviewById('page/tab/myself.html');
			mui.fire(myself,'loginsuccess', {'result' : 1});
			
			mui.back()
		}
	});
	
	// 快速注册按钮添加点击监听
	document.getElementById("btn-regiest").addEventListener('tap', function(e) {
				
		mui.openWindow('regiest.html','regiest',{})
	});
	
	// 忘记密码按钮添加点击监听
	document.getElementById("btn-forget-password").addEventListener('tap', function(e) {

		// 跳转至获取验证码画面
		mui.openWindow({
			id: 'get_captcha',
			url: 'get_captcha.html',
			extras: {
				// 标记位：忘记密码
				flag: 0
			},
			style: {
				cachemode:"noCache"
			}
		});
	});
});