var p = {
	ini: function () {
		$("#project-tabs div").each(function(i) {
			$(this).delay(450*(i+1)).animate({top: "-320px"}, 700,"easeOutElastic");
		});
	},
	out: function () {
		$("#project-tabs div").each(function(i) {
			$(this).delay(400*(i+1)).animate({top: "-355px"}, 400,"easeInBack");
		});
	}
}


$(document).ready(function() {
	switch (window.location.hash) {
		case '#about':
			$("#underbottom div.a").css("display", "block");
			$("#cover").animate({top: "-20px"}, 700, "easeOutCubic");
			$("#a").toggleClass("hbuttondown");
			break;
		case '#projects':
			$("#underbottom div.p").css("display", "block");
			$("#cover").animate({top: "-20px"}, 700, "easeOutCubic");
			p.ini();
			$("#p").toggleClass("hbuttondown");
			break;
		case '#blogs':
			$("#underbottom div.b").css("display", "block");
			$("#cover").animate({top: "-20px"}, 700, "easeOutCubic");
			$("#b").toggleClass("hbuttondown");
			break;
		case '#merch':
			$("#underbottom div.m").css("display", "block");
			$("#cover").animate({top: "-20px"}, 700, "easeOutCubic");
			$("#m").toggleClass("hbuttondown");
			break;
		case '#contact':
			$("#underbottom div.c").css("display", "block");
			$("#cover").animate({top: "-20px"}, 700, "easeOutCubic");
			$("#c").toggleClass("hbuttondown");
			break;
		default:
			window.location.hash = '';
		}
	$("div.hbutton").click(function(e){
		//e.preventDefault();
		$("#underbottom div").css("display", "none");
		$("#underbottom div."+this.id).css("display", "block");
		if (this.id == "p") {p.ini()}else{p.out()}
		if (!$(this).hasClass("hbuttondown")){
			$("#cover").css({top: "-120px"});
			$("#cover").animate({top: "-14px"}, 700, "easeOutCubic");
		}
		$("div.hbutton").removeClass("hbuttondown");
		$(this).toggleClass("hbuttondown");
	});
	$("#project-tabs div span.handle").mouseenter(function(e){
		var maxZ = 0;

		$('#project-tabs div span.handle').each(function(){
			var thisZ = parseInt($(this).css('zIndex'));
			if(thisZ>maxZ) maxZ=thisZ;
		});

		if($(e.target).hasClass("handle")) {
			$(e.target).css({zIndex:maxZ+1});
			$(e.target).parent("div").css({zIndex:maxZ+1});
		} else {
			$(e.target).closest('span.handle').css({zIndex:maxZ+1});
			$(e.target).closest('div').css({zIndex:maxZ+1});
		}
	});
	$("#project-tabs div").hover(function(){
		$(this).closest('div').animate({top:"-310px"}, 150);
	}, function() {
		$(this).closest('div').animate({top:"-320px"}, 300);
	});
	$("#project-tabs div span.handle").click(function(e) {
		e.stopPropagation();
		if ($(this).closest('div').css("top") == "0px") {
			$(this).closest('div').animate({top:"-320px"}, 200, "swing");
		} else {
			$(this).closest('div').animate({top:"0px"}, 200, "swing");
		}
	});
	
});