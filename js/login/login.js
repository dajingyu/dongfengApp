mui.init()

mui.plusReady(function() {

	// 获取当前WebView
	var _self = plus.webview.currentWebview();

	// 新建WebView组
	var group = new webviewGroup(_self.id, {
		items: [{

			// 验证码登录画面
			id: "phone_login.html",
			// id与url要相同，否则webviewGroup.switchTab会找不到webContext
			url: "phone_login.html",
			extras: {}
		}, {

			// 用户名密码登录画面
			id: "password_login.html",
			url: "password_login.html",
			extras: {}
		}],

		// 点击监听
		onChange: function(obj) {

			// 获取活动Tab
			var activeTab = document.querySelector(".mui-control-item.mui-active");

			// 活动Tab移除活动样式
			if (activeTab) {
				activeTab.classList.remove("mui-active");
			}
			var target = document.querySelector(".mui-control-item:nth-child(" + (parseInt(obj.index) + 1) + ")");
			target.classList.add("mui-active");
			if (target.scrollIntoView) {
				target.scrollIntoView();
			}
		}
	});
	mui(".mui-slider-indicator").on("tap", ".mui-control-item", function(e) {
		var wid = this.getAttribute("data-wid");
		group.switchTab(wid);
	});

	document.addEventListener('close', function(e) {
		mui.back();
	});
});
mui.back = function() {
	var _self = plus.webview.currentWebview();
	_self.close("auto");
}

document.getElementById('content').addEventListener('slide', function(e) {

});
