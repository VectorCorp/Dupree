$(document).ready(function(){
	$("#about").hover(function(){
		$("#aboutInfoBox").css('border','5px solid black');},function(){
			$("#aboutInfoBox").css('border','5px ridge');
	});
	//#0066FF
	$("#contact").hover(function(){
		$("#contactInfoBox").css('border','5px solid black');
		},function(){
			$("#contactInfoBox").css('border','5px ridge');
	});
	//#003366
	$("#services").hover(function(){
		$("#servicesInfoBox").css('border','5px solid black');},function(){
			$("#servicesInfoBox").css('border','5px ridge');
	});
});
$(document).ready(function(){
	$("#homeInfo_p").lettering();
	$(".char1").css({'font-size':'250%','font-weight':'bold','font-family':"'Script MT Bold',cursive"});
	$(".char2").css({'font-size':'250%','font-weight':'bold','font-family':"'Script MT Bold',cursive"});
});
$(document).ready(function(){
	controller = new ScrollMagic();
	
	var scene1 = new ScrollScene().setPin("#footer").addTo(controller);
});
