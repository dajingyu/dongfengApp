mui.init()

mui.plusReady(function() {
		
	// 登录按钮添加点击监听
	document.getElementById("li-login").addEventListener('tap', function(e) {
		
		// 进入登录画面
		mui.openWindow({
			id: 'login',
			url: '../login/login.html',
			show: {
				aniShow: 'fade-in',
				duration: 300
			},
			waiting: {
				autoShow: false
			}
		});
	});

	// 我的贷款按钮添加点击监听
	document.getElementById("li-my-loan").addEventListener('tap', function(e) {
		console.log('点击我的贷款');
	});

	// 意见反馈按钮添加点击监听
	document.getElementById("li-feedback").addEventListener('tap', function(e) {
		
		// 进入意见反馈画面
		mui.openWindow({
			id: 'feedback',
			url: '../myself/feedback.html',
			show: {
				aniShow: 'fade-in',
				duration: 300
			},
			waiting: {
				autoShow: false
			}
		});
	});

	// 关于我们按钮添加点击监听
	document.getElementById("li-about-us").addEventListener('tap', function(e) {
		
		// 进入关于我们画面
		mui.openWindow({
			id: 'about_us',
			url: '../myself/about_us.html',
			show: {
				aniShow: 'fade-in',
				duration: 300
			},
			waiting: {
				autoShow: false
			}
		});
	});

	// 设置按钮添加点击监听
	document.getElementById("li-setting").addEventListener('tap', function(e) {
		
		// 进入设置画面
		mui.openWindow({
			id: 'setting',
			url: '../myself/setting.html',
			show: {
				aniShow: 'fade-in',
				duration: 300
			},
			waiting: {
				autoShow: false
			}
		});
	});
	
	// 注册登录成功监听
	document.addEventListener('loginsuccess', function(event) {
		console.log(event.detail.result);
	});
});
