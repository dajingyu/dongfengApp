mui.init()

mui.plusReady(function() {
		
	// 登录按钮添加点击监听
	document.getElementById("ul-no-login").addEventListener('tap', login);

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
		
		// 登录成功
		loginSuccess();
	});
	
	// 注册登出成功监听
	document.addEventListener('logoutsuccess', function(event) {
		
		// 登出成功
		logoutSuccess();
	});
});

/**
 * 跳转至登录画面
 */
function login(event) {
	
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
}

/**
 * 身份绑定
 */
function identityBinding(event) {
	
	console.log('点击身份绑定');
}

/**
 * 资质待完善
 */
function qualificationImproved(event) {
	
	console.log('点击资质待完善');
}

/**
 * 个人信息
 */
function personalInformation(event) {
	
	console.log('点击个人信息');
}

/**
 * 登录成功
 */
function loginSuccess() {
	
	// 隐藏未登录区域
	document.getElementById("ul-no-login").classList.add("mui-hidden");
	
	// 显示登录后信息
	document.getElementById("ul-login").classList.remove("mui-hidden");
	
	// 显示登录用户名
	document.getElementById("txt-user-name").innerText = '东风金融用户';
	
	// 显示登录用户头像
	document.getElementById("img-user").src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542122704672&di=b3f4503aeec2d166d64f57ddd3f2705e&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Fbmiddle%2F006f7SNggy1fhbgh7r844j30sg0sgwgp.jpg";
	
	// 未登录区域移除点击事件
	document.getElementById("ul-no-login").removeEventListener('tap', login);
	
	// 身份绑定按钮添加点击事件
	document.getElementById("btn-indentity").addEventListener('tap', identityBinding);
	
	// 资质待完善按钮添加点击事件
	document.getElementById("btn-credentials").addEventListener('tap', qualificationImproved);
	
	// 个人信息按钮添加点击事件
	document.getElementById("btn-personal-info").addEventListener('tap', personalInformation);
	
	// 用户头像添加点击事件
	document.getElementById("img-user").addEventListener('tap', personalInformation);
}

/**
 * 登出成功
 */
function logoutSuccess() {
	
	// 显示未登录区域
	document.getElementById("ul-no-login").classList.remove("mui-hidden");
	
	// 隐藏登录后信息
	document.getElementById("ul-login").classList.add("mui-hidden");
	
	// 清除登录用户名
	document.getElementById("txt-user-name").innerText = '';
	
	// 清除登录用户头像
	document.getElementById("img-user").src = "";
	
	// 未登录区域添加点击事件
	document.getElementById("ul-no-login").addEventListener('tap', login);
	
	// 身份绑定按钮移除点击事件
	document.getElementById("btn-indentity").removeEventListener('tap', identityBinding);
	
	// 资质待完善按钮移除点击事件
	document.getElementById("btn-credentials").removeEventListener('tap', qualificationImproved);
	
	// 个人信息按钮移除点击事件
	document.getElementById("btn-personal-info").removeEventListener('tap', personalInformation);
	
	// 用户头像移除点击事件
	document.getElementById("img-user").removeEventListener('tap', personalInformation);
}

