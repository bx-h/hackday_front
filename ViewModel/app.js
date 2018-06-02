function submitRegister() {
	$.ajax({
		type: "POST",
		url: "http://192.168.1.9:8000/signUp/",
		dataType: "JSON",
		crossDomain: true,
		data: $('#register').serialize(),
		success: function (result) {
			console.log(result);


		},
		error: function (result) {
			console.log(result);
		}
	});
}
