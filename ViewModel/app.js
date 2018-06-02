var username
var petname
var pethunger
var petclean
var petlove


function submitRegister() {
	$.ajax({
		type: "POST",
		url: "http://127.0.0.1:8000/signUp/",
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
		url: "http://127.0.0.1:8000/login/",
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
