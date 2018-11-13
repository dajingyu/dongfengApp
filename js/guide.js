mui.init()

mui.back = function() {};

mui.plusReady(function() {
	if(mui.os.ios) {
		plus.navigator.setFullscreen(true);
	}

	plus.navigator.closeSplashscreen();
});
			
// 立即体验按钮点击事件
document.getElementById("close").addEventListener('tap', function(event) {
	plus.storage.setItem("guide", "true");
	plus.navigator.setFullscreen(false);
	plus.webview.currentWebview().close();
}, false);