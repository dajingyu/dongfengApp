mui.init()

mui.plusReady(function () {
    
	// 登录按钮添加点击监听
	document.getElementById("btn-confirm").addEventListener('tap', function(e) {
		
		var password = document.getElementById("edt-password").value;
		
		var passwordNew = document.getElementById("edt-new-password").value;
		
		var passwordConfirm = document.getElementById("edt-password-confirm").value;
		
		if(password == null || password.length == 0) {
					
			mui.toast('请输入原密码');
		} else if(passwordNew == null || passwordNew.length == 0) {
						
			mui.toast('请输入新密码');
		} else if(passwordConfirm == null || passwordConfirm.length == 0) {
					
			mui.toast('请确认密码');
		} else if(!checkPassword(passwordNew)) {
			
			mui.toast('密码不符合规定');
		} else if(password == passwordNew) {
					
			mui.toast('新密码不能与原密码相同');
		} else if(!(passwordNew == passwordConfirm)) {
				
			mui.toast('两次输入密码不一致');
		} else {
			console.log(passwordNew);
			
			// 我的页面更新数据
			var myself = plus.webview.getWebviewById('page/tab/myself.html');
			mui.fire(myself,'loginsuccess', {'result' : 1});
			
			// 回到首页
			backToIndex();
			
			// 关闭获取验证码页面
			closePageById('get_captcha');
			
			// 本页面关闭
			mui.back();
		}
	});
});