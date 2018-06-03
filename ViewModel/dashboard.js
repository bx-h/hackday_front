
$("#usrM").hide();
$("#petM").hide();
$(function () {
	username = window.location.href.split("=")[1];
	
	
	
	if(getUserStatus()){
		getPetStatus()
	}
	$("#hungryV").html(pethunger);
	$("#cleanV").html(petclean);
	$("#loveV").html(petlove);
	
	//getPetStatus()

});

$(".menu_button").click(function(){
	window.location.replace("map.html");
});

$(".mask_button").click(function(){
	$(".mine").attr("src", "../public/imgs/mine/1.gif");
	petname = "lin2";
	feedPet();
	//getPetStatus();
	console.log("aa");

	$("#hungryV").html(pethunger);
	$("#cleanV").html(petclean);
	$("#loveV").html(petlove);
})


$(".history_button").click(function(){
	$(".mine").attr("src", "../public/imgs/mine/2.gif");
	petname = "lin2";
	cleanPet();
	//getPetStatus();
	$("#hungryV").html(pethunger);
	$("#cleanV").html(petclean);
	$("#loveV").html(petlove);
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
	getPetStatus();
	$("#usrM").hide();
	$("#petM").show();
	//console.log("shit2");

	petname = "lin2";
	//console.log("aa");

	$("#hungryV").html(pethunger);
	$("#cleanV").html(petclean);
	$("#loveV").html(petlove);
})


