// 从何处跳转的标记
// 0：忘记密码；1：修改密码
var flag = 0

mui.init()

mui.plusReady(function() {
	
	var self = plus.webview.currentWebview();
	flag = self.flag;
	
	console.log(flag);
	
	// 提交按钮添加点击监听
	document.getElementById("btn-submit").addEventListener('tap', function(e) {
				
		var phoneNumber = document.getElementById("edt-phone-number").value;
		
		var captcha = document.getElementById("edt-captcha").value;
		
		if(phoneNumber == null || phoneNumber.length == 0) {
			
			mui.toast('请输入手机号');
		} else if(captcha == null || captcha.length == 0) {
				
			mui.toast('请输入验证码');
		} else {
			console.log(phoneNumber);
			console.log(captcha);
		
			if(flag == 0) {
				// 重置密码
				mui.openWindow('reset_password.html','reset_password',{})
			} else {
				// 修改密码
				mui.openWindow('modify_password.html','modify_password',{})
			}
			
		}
	});
	
	document.addEventListener('close', function(e) {
		mui.back();
	});
});

// 获取验证码按钮添加点击监听
document.getElementById("btn-get-captcha").addEventListener('tap', function(e) {
	
	startCutdown(60, e.target);
});