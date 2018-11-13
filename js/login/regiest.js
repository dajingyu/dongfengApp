mui.init({

});

mui.plusReady(function () {
    
	// 注册按钮添加点击监听
	document.getElementById("btn-regiest").addEventListener('tap', function(e) {
				
		var phoneNumber = document.getElementById("edt-phone-number").value;
		
		var captcha = document.getElementById("edt-captcha").value;
		
		var password = document.getElementById("edt-password").value;
		
		var passwordConfirm = document.getElementById("edt-password-confirm").value;
		
		var checked = document.getElementById("chk-ok").checked;
		
		if(phoneNumber == null || phoneNumber.length == 0) {
			
			mui.toast('请输入手机号');
		} else if(captcha == null || captcha.length == 0) {
				
			mui.toast('请输入验证码');
		} else if(password == null || password.length == 0) {
					
			mui.toast('请输入密码');
		} else if(passwordConfirm == null || passwordConfirm.length == 0) {
					
			mui.toast('请确认密码');
		} else if(!checkPassword(password)) {
			
			mui.toast('密码不符合规定');
		} else if(!(password == passwordConfirm)) {
				
			mui.toast('两次输入密码不一致');
		} else if(!checked) {
				
			mui.toast('请同意用户章程');
		} else {
			console.log(phoneNumber);
			console.log(captcha);
			console.log(password);
			
			// 我的页面更新数据
			var myself = plus.webview.getWebviewById('page/tab/myself.html');
			mui.fire(myself,'loginsuccess', {'result' : 1});
			
			// 回到首页
			backToIndex();
			
			// 关闭登录画面
			closePageById('login');
			
			// 本页面关闭
			mui.back();
		}
	});
});

// 获取验证码按钮添加点击监听
document.getElementById("btn-get-captcha").addEventListener('tap', function(e) {
			
	// 开始倒计时
	startCutdown(60, e.target);
});