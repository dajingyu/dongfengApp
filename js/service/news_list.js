mui.init()

mui.plusReady(function() {
	mui('.mui-table-view-cell').on('tap', 'a', function() {
		mui.openWindow({
			url: "news_detail.html",
			id: "news_detail",
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

	function downFresh() {


		setTimeout(function() {
			alert("111")
			mui('#navListADom').pullRefresh().endPulldown(true)
		}, 2000)
	}

	//Vue数据
	var navListADom = new Vue({
		el: '#navListADom',
		data: {
			navList: [{
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
	});
})

//打开资讯详情页面
function open_detail(item) {
	//触发详情页面的movieId事件
	// 				mui.fire(detailPage,'movieId',{
	// 					id:item.id
	// 				});
	//打开
	mui.openWindow({
		url: "news_detail.html",
		id: "news_detail",
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
}
