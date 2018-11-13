mui.init({
	pullRefresh: {
		container: "#pull_refresh",
		up: {
			height: 50,
			contentrefresh: "正在加载...",
			contentnomore: '没有更多数据了',
			callback: pullup_fresh
		}
	}
});

mui.plusReady(function() {

});

mui("#category_btn").on('tap', '.mui-btn', function(e) {

	console.log('click......');

});

function pullup_fresh() {
	setTimeout(function() {

		mui('#pull_refresh').pullRefresh().endPullupToRefresh(true); //参数为true代表没有更多数据了。

	}, 1000);
}
