mui.init()

var totalActiveDom = new Vue({

	el: "#totalActiveDom",
	data: {
		homenavList: [{
				img: '../../images/car/car-01.jpg',
				name: "111",
				message: '222'
			},
			{
				img: '../../images/car/car-02.jpg',
				name: "111",
				message: '222'
			},
			{
				img: '../../images/car/car-03.jpg',
				name: "111",
				message: '222'
			},
			{
				img: '../../images/car/car-04.png',
				name: "111",
				message: '222'
			},

		]
	},
	methods:{
		enterActiveDetail(){
			mui.openWindow({
				url: "./activeDetail.html",
				id: "../main/activeDetail.html",
				style: {
				
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
	}


})