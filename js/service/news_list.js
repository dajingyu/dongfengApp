mui.init({
	pullRefresh: {
		container: "#refreshContainer",
		down: {
			callback: downFresh
		},
		up: {
			height: 5099,
			contentrefresh: "你想看啥...",
			contentnomore: '没有更多数据了',
			callback: pullup_fresh
		}
	}
})

function downFresh() {
	setTimeout(function() {
if(navListADom.navList.length > 13){
	mui('#refreshContainer').pullRefresh().endPulldownToRefresh(true);
}else{
	navListADom.navList.unshift({
				img: '../../images/logo.png',
				name: "刷新出来的",
				message: '000'
			})
			mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
			mui('#refreshContainer').pullRefresh().refresh(true);
	
}

		
	}, 1000)
}

function pullup_fresh() {
	// alert(navListADom.navList.length)

	setTimeout(function() {
		if (navListADom.navList.length > 13) {
			mui('#refreshContainer').pullRefresh().endPullupToRefresh(true);
		} else {
			navListADom.navList.push({
				img: '../../images/logo.png',
				name: "加载更多 出来的",
				message: '3333'
			})
			mui('#refreshContainer').pullRefresh().endPullupToRefresh(false); //参数为true代表没有更
		}
	}, 1000);
}




mui.plusReady(function() {



})

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
			{
				img: '../../images/logo.png',
				name: "111",
				message: '222'
			},

		]
	}
});
//打开 搜索页面
function enterSearch() {
	mui.openWindow({
		url: "../service/search.html",
		id: "../service/search.html",
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
//预加载详情页
var detailPage = mui.preload({
	id: 'navDetail-detail',
	url: '../service/news_detail.html'
});

//打开资讯详情页面
function open_detail(item) {

	//触发详情页面的movieId事件
	// 				mui.fire(detailPage,'movieId',{
	// 					id:item.id
	// 				});
	//打开
	mui.openWindow({
		id: 'navDetail-detail',
	})
}
