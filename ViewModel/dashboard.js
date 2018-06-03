
$("#usrM").hide();
$("#petM").hide();

$(".menu_button").click(function(){
	window.location.replace("map.html");
});

$(".mask_button").click(function(){
	$(".mine").attr("src", "../public/imgs/mine/1.gif");
})


$(".history_button").click(function(){
	$(".mine").attr("src", "../public/imgs/mine/2.gif");
})


$(".message_button").click(function(){
	$(".mine").attr("src", "../public/imgs/mine/3.gif");
})

$(".usrTable").click(function() {
	$("#usrM").show();
	$("#petM").hide();
	console.log("shit1");
})

$(".petTable").click(function() {
	$("#usrM").hide();
	$("#petM").show();
	console.log("shit2");
})

