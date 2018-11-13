mui.init({
	swipeBack: false
})

mui.plusReady(function() {
	
	// 登录按钮添加点击监听
	document.getElementById("btn-login").addEventListener('tap', function(e) {
				
		var phoneNumber = document.getElementById("edt-phone-number").value;
		
		var captcha = document.getElementById("edt-captcha").value;
		
		if(phoneNumber == null || phoneNumber.length == 0) {
			
			mui.toast('请输入手机号');
		} else if(captcha == null || captcha.length == 0) {
				
			mui.toast('请输入验证码');
		} else {
			console.log(phoneNumber);
			console.log(captcha);
			
			var myself = plus.webview.getWebviewById('page/tab/myself.html');
			mui.fire(myself,'loginsuccess', {'result' : 0});
			
			mui.back()
		}
	});
});

// 获取验证码按钮添加点击监听
document.getElementById("btn-get-captcha").addEventListener('tap', function(e) {
			
	// 获取验证码
	startCutdown(60, e.target);
});
