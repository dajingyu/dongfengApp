mui.init();

// 提交按钮添加点击监听
document.getElementById("btn-submit").addEventListener('tap', function(e) {
	
	// 获取留言内容
	var content = document.getElementById("edt-feedback").value;
	
	// 获取姓名
	var name = document.getElementById("edt-name").value;
	
	// 获取电话
	var phone = document.getElementById("edt-phone").value;
	
	// 获取邮箱
	var mail = document.getElementById("edt-mail").value;
	
	// 获取地址
	var address = document.getElementById("edt-address").value;
	
	if(content == null || content.length == 0) {
		
		mui.toast('请输入留言内容');
	} else if(phone == null || phone.length == 0) {
		
		mui.toast('请输入电话');
	} else {
		
		mui.toast('意见反馈提交成功！');
		
		// 本页面关闭
		mui.back();
	}
});