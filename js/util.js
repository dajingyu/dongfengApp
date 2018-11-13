/**
 * 回到首页
 */
function backToIndex() {

	// Debug模式下，首页ID为HBuilder
	// 但是如果将工程打包进手机端原生工程首页ID同manifest.json中的id
	var index = plus.webview.getWebviewById('H509D2008');

	if (!index) {
		index = plus.webview.getWebviewById('HBuilder');
	}

	index.show();
}

/**
 * 关闭指定ID页面
 */
function closePageById(id) {
	
	// 获取指定ID页面
	var page = plus.webview.getWebviewById(id);
	
	// 关闭页面
	if(page) {
		page.close();
	}
}

/**
 * 开始倒计时
 */
function startCutdown(wait, button) {
	
    if (wait == 0) {
		button.disabled = false;
		button.innerHTML = "获取验证码";
	} else {
		// 按钮不可用
		button.disabled=true;
		button.innerHTML = wait+"秒后重新获取";
		wait--;
		setTimeout(function(){
			startCutdown(wait, button)
		}, 1000)
	}
}

function checkPassword(password) {
	
	// 密码长度6-20个字符，包含数字，字母，符号至少两种以上
	var re = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){6,20}$/;
	
	return re.test(password);
}