$(document).ready(function(){
	$("#about").hover(function(){
		$("#aboutInfoBox").css('border','5px solid black');},function(){
			$("#aboutInfoBox").css('border','5px ridge');
	});
	//#0066FF
	$("#contact").hover(function(){
		$("#contactInfoBox").css('border','5px solid black');},function(){
			$("#contactInfoBox").css('border','5px ridge');
	});
	//#003366
	$("#services").hover(function(){
		$("#servicesInfoBox").css('border','5px solid black');},function(){
			$("#servicesInfoBox").css('border','5px ridge');
	});
});
$(document).ready(function($){
	controller = new ScrollMagic();
	
	var scene1 = new ScrollScene().setPin("#footer").addTo(controller);
});
