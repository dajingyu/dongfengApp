mui.init()

var tabMainDom = new Vue({

	el: "#tabMainDom",
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
		
	}


})
function enterTotal () {
	
		mui.openWindow({
			url: "../main/totalActive.html",
			id: "../main/totalActive.html",
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
	


