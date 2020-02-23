
$(window).on("load",function(){





$(".mLi").on("click",function(){

var menuHide = $(this).attr("data-panel");
$(menuHide).slideToggle(300);
})

$(".about").hide().delay(2000).slideDown(1000);

$(".slide-cover").hover(function(e){
	$(".zoom")
})

function menuShrink (){
	$(".menu-up").slideUp(800);

	$(".shadow-left").css("opacity","0");
	$(".shadow-bottom").css("opacity","0");
	$("#empty").css({"transform":"translateY(0%)","transition-delay":"0.8s","opacity":"1"});
	$(".arrow-top").css({"transform":"translateY(0%)","transition-delay":"1.2s","opacity":"1"});
	$(".fragment").stop().animate({"opacity":"1"});


	$("header").css({"border-bottom":"4px solid #006DA5"});	
}

var prev = window.pageYOffset;

if(prev>0){

	menuShrink();
}


$(window).scroll(function(){

var currentScroll = $(window).scrollTop();

if (currentScroll>prev || currentScroll>0) {

	menuShrink();
}

 if (currentScroll === 0){
	$(".menu-up").delay(200).slideDown(800);
	$("#empty").css({"opacity":"0"}).css({"transform":"translateY(100%)"});;
	$(".shadow-left").css("opacity","0.59");
	$(".shadow-bottom").css({"opacity":"0.59"});
	$("header").css({"border-bottom":"none"})
	$(".fragment").queue(function(e){
		$(this).css({"opacity":"0"});
		e();
	})
}

})

$("#marq-remove").on("click",function(){
	$(this).parent().remove();
})


$('.carusel-right').on('click',function(){
    circleSlider.trigger('next.owl.carousel')
})

$(".carusel-left").on("click",function(){
	circleSlider.trigger('prev.owl.carousel')
})

$("#slide-right").on("click",function(){
	classicSlider.trigger('next.owl.carousel')
})

$("#slide-left").on("click",function(){
	classicSlider.trigger('prev.owl.carousel')
})



});







 