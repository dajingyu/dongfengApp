mui.init()
mui.plusReady(function() {

// 	mui.getJSON("http://spider.dcloud.net.cn/api/news", data, function(rsp) {
// 		console.log(rep)
// // 					mui('#list').pullRefresh().endPullupToRefresh();
// // 					if(rsp && rsp.length > 0) {
// // 						minId = rsp[rsp.length - 1].id; //保存最后一条消息的id，上拉加载时使用
// // 						news.items = news.items.concat(convert(rsp));
// // 					}
// 				});

	document.getElementById('enterNavDetail').addEventListener('tap', function() {
		mui.openWindow({
			url: "../service/news_list.html",
			id: "news_list",
			style: {},
			show: {
				autoShow: true,
				aniShow: "slide-in-right",
				duration: 100
			},
			waiting: {
				autoShow: true,
				title: "正在加載...",
			}
		})
	})

})
//使用vue 绑定数据
var homeNavDom = new Vue({

	el: "#homePageNav",
	data: {
		homenavList: [{
				img: '../../images/logo.png',
				name: "111",
				message: '222'
			},
			{
				img: '../../images/logo.png',
				name: "111",
				message: '222'
			},
			{
				img: '../../images/logo.png',
				name: "111",
				message: '222'
			},
			{
				img: '../../images/logo.png',
				name: "111",
				message: '222'
			},

		]
	}

})


function enterDetail() {

	mui.openWindow({
		url: "../service/news_detail.html",
		id: "news_detail",
		style: {
			titleNView:{
				titleText:'标题栏',
				titleColor:'#fff'
			}
		},
		show: {
			autoShow: true,
			aniShow: "slide-in-right",
			duration: 100
		},
		waiting: {
			autoShow: true,
			title: "正在加載...",
		}
	})

}
