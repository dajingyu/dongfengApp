var cutdown = true;

mui.init();

mui.plusReady(function() {

	if (mui.os.ios) {
		plus.navigator.setFullscreen(true);
	}

	plus.navigator.closeSplashscreen();
	
	mui.back=function () {
		return false;
	}

	// 获取倒计时按钮
	var button = document.getElementById("btn-cutdown");

	// 倒计时按钮添加点击监听
	button.addEventListener('tap', function(e) {

		// 停止倒计时并返回首页
		cutdown = false;
		closeAdvertisement();
	});

	// 开始倒计时
	startCutdown(3, button);
});

/**
 * 开始倒计时
 */
function startCutdown(wait, button) {

	button.innerHTML = wait + "s跳过";

	// 倒计时结束，返回首页
	if (wait == 0) {
		closeAdvertisement();
	} else if (cutdown) {

		// 继续倒计时 
		wait--;
		setTimeout(function() {
			startCutdown(wait, button)
		}, 1000)
	}
}
/**
 * 广告页关闭
 */
function closeAdvertisement() {

	plus.storage.setItem("guide", "true");
	plus.navigator.setFullscreen(false);
	plus.webview.currentWebview().close();
}
