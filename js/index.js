mui.init();

var subpages = ['page/tab/main.html', 'page/tab/select_car.html', 'page/tab/service.html',
	'page/tab/myself.html'
];
var subpage_style = {
	top: '0px',
	bottom: '51px'
};

var aniShow = {};

mui.plusReady(function() {

	var self = plus.webview.currentWebview();

	for (var i = 0; i < 4; i++) {
		var temp = {};
		var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
		if (i > 0) {
			sub.hide();
		} else {
			temp[subpages[i]] = "true";
			mui.extend(aniShow, temp);
		}
		self.append(sub);
	}

	// 查看是否已经进入过引导页
	var hasGuide = plus.storage.getItem('guide');

	if (hasGuide) {
		//有值，说明已经显示过了，无需显示
		//关闭启动页
		plus.navigator.closeSplashscreen();
		plus.navigator.setFullscreen(false);
	} else {

		// 进入引导页
		//显示启动导航
		mui.openWindow({
			id: 'guide',
			url: 'guide.html',
			styles: {
				popGesture: "none"
			},
			show: {
				aniShow: 'none'
			},
			waiting: {
				autoShow: false
			}
		});
	}
});

//当前激活选项
var activeTab = subpages[0];

//选项卡点击事件
mui('.mui-bar-tab').on('tap', 'a', function(e) {
	var targetTab = this.getAttribute('href');
	if (targetTab == activeTab) {
		return;
	}

	// 显示目标选项卡
	// 若为iOS平台或非首次显示，则直接显示
	if (mui.os.ios || aniShow[targetTab]) {
		plus.webview.show(targetTab);
	} else {
		//否则，使用fade-in动画，且保存变量
		var temp = {};
		temp[targetTab] = "true";
		mui.extend(aniShow, temp);
		plus.webview.show(targetTab, "fade-in", 300);
	}
	// 隐藏当前;
	plus.webview.hide(activeTab);
	// 更改当前活跃的选项卡
	activeTab = targetTab;
});
