var username
var petname
var pethunger
var petclean
var petlove
var url = "http://127.0.0.1:8000/"

function submitRegister() {
	$.ajax({
		type: "POST",
		url: url + "signUp/",
		dataType: "JSON",
		crossDomain: true,
		data: $('#register').serialize(),
		success: function (res) {
			if(res == '0'){
				alert("重复用户名")
			}
			else{
				//data.username = res.
				//alert(res.username)
				//alert(res.username)
				username = res.username
				alert("注册成功")
				window.location.replace("login.html")
			}

		}
	});
}

function login(){
	$.ajax({
		type: "GET",
		url: url + "login/",
		dataType: "JSON",
		crossDomain: true,
		data: $('#login').serialize(),
		success: function (res) {
			if(res == '0'){
				alert("用户名或密码错误")
			}
			else{
				
				username = res.username
				alert("登录成功")
				window.location.replace("index.html")
			}

		}
	});

}

function getUserStatus(){
	$.ajax({
		type: "GET",
		url: url + "getUserStatus/",
		dataType: "JSON",
		crossDomain: true,
		data: {
			 "username" : username,
		},
		success: function (res) {
			if(res == "0"){
				petname = 0
				console.log("noPet")
			}else{
				petname = res.petname
				console.log(res)
			}

		}
	});
}


//宠物部分
function createPet(){
	$.ajax({
		type: "POST",
		url: url + "createPet/",
		dataType: "JSON",
		crossDomain: true,
		data: {
			"username" : username,
			//"petname" :           //引入宠物名 
		},
		success: function (res) {
			console.log(res)
			if(res === 1){
				alert("创建宠物成功")
			}
			else{
				
				alert("create pet error")
			}

		}
	});
}

function getPetStatus(){
	$.ajax({
		type: "GET",
		url: url + "getPetStatus/",
		dataType: "JSON",
		crossDomain: true,
		data: {
			"petname" : petname,
		},
		success: function (res) {
			pethunger = res.pet_hunger
	 		petclean = res.pet_clean
 			petlove = res.pet_love

		}
	});
}

function showAllPet(){
	$.ajax({
		type: "GET",
		url: url + "showAllPet/",
		dataType: "JSON",
		crossDomain: true,
		//data: 
		success: function (res) {
			//列表操作

		}
	});
}

function showOnePet(){
	$.ajax({
		type: "GET",
		url: url + "showOnePet/",
		dataType: "JSON",
		crossDomain: true,
		data:$('#login').serialize(), // {
		//	"petname" : petname,
		//},
		success: function (res) {
			//列表操作
			console.log(res)
		}
	});
}

function followFriends(){
	$.ajax({
		type: "GET",
		url: url + "followFriends/",
		dataType: "JSON",
		crossDomain: true,
		data: {
			"username" : username,
			//"friendname" :    //朋友名字获取
		},
		success: function (res) {
			if (res == "success"){
				alert("FollowSuccess")
			}else{
				alert("follow failed")
			}

		}
	});
}

function havePet(){
	$.ajax({
		type: "POST",
		url: url + "havePet/",
		dataType: "JSON",
		crossDomain: true,
		data: {
			"username" : username,
			//"petname" :    //宠物名字获取
		},
		success: function (res) {
			if (res == 1){
				alert("Success")
			}else{
				alert("Failed")
			}

		}
	});
}

function feedPet(){
	$.ajax({
		type: "POST",
		url: url + "feedPet/",
		dataType: "JSON",
		crossDomain: true,
		data: {
			//"username" : username,
			"petname" : petname          //引入宠物名 
		},
		success: function (res) {
			pethunger = res.pethunger
 			petlove = res.petlove
 			console.log("success")
 			console.log("hunger:",pethunger)
 			console.log("love:",petlove)

		}
	});
}

function cleanPet(){
	$.ajax({
		type: "POST",
		url: url + "cleanPet/",
		dataType: "JSON",
		crossDomain: true,
		data: {
			//"username" : username,
			"petname" : petname          //引入宠物名 
		},
		success: function (res) {
			petclean = res.petclean
 			petlove = res.petlove
 			console.log("success")
		}
	});
}