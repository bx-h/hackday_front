function submitRegister() {
	$('#register').ajaxSubmit(function(message){
		if (true == true) {
			window.location.replace="http://localhost:8080/hackday/View/login.html";
		}
		else {
			alert("invalid");
		}
	});

	return false;
}