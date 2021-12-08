$(function(){

$(".white-cover").remove();

$('.l1').addClass('open')
$('.l2').addClass('open')
$('.l3').addClass('open')
$('.l4').addClass('open')

$('.lang1').addClass('open')
$('.lang2').addClass('open')
$('.lang3').addClass('open')
$('.lang4').addClass('open')


$('.menu-below').addClass('start')
$('.call-a').addClass('start')
$('#telephone').addClass('start')


$('.marq').addClass('active')


var languages = document.querySelector(".languages");

languages.addEventListener("click",e=>{
	if(e.target.tagName=="P"){
		if(e.target.textContent!=="EN"){
			alert("Sorry, Only English Version is Available.");
		}
	}
})

$(".mLi").on("click",function(){

var menuHide = $(this).attr("data-panel");
$(menuHide).slideToggle(300);

if($(this).find("img").hasClass("active")){
	$(this).find("img").removeClass("active").css({"margin-bottom":"2px"}).attr("src","plus.png");
	$(this).css("color","#fff")
}
else{
	$(this).find("img").addClass("active").css({"margin-bottom":"4px"}).attr("src","minus.png");
	$(this).find("img").parent().css("color","#5DC4EB")
}

})

var windowWidth = window.innerWidth;

$(".about").hide().delay(3000).slideDown(1000);

if(window.innerWidth<1024){
	setTimeout(()=>{
		let tempoHeight = $(document).height();
		$('.about').css('height',tempoHeight - 39 +'px' )
	},500)
	$('.call-properties').addClass('loaded')
	$('#nav-icon4').addClass('activation')
}

else{
	$('.about').css('height','unset')
}

$(".slide-cover").hover(function(e){
	$(".zoom")
})

var menuDiv = $(".menu-show");

$(menuDiv).on("click",function(){
	$("html ,body").animate({"scrollTop":0},500);
})

var scrollTime= "gio";

function menuShrink (){
	clearInterval(scrollTime);
	scrollTime = setTimeout(function(){
		$(".menu-up").slideUp(800);
		menuDiv.css("opacity","1");
		$(".shadow-left").css("opacity","0");
		$(".shadow-bottom").css("opacity","0");
		menuDiv.find("#empty").css({"transform":"translateY(0%)","transition-delay":"0.8s","opacity":"1"});
		menuDiv.find(".arrow-top").css({"transform":"translateY(0%)","transition-delay":"1.2s","opacity":"1"});
		$(".fragment").stop().animate({"opacity":"1"});
		
		$("header").css({"border-bottom":"4px solid #006DA5","transition":"0s"});
		$(".white-stick").css("top","53px");	
	},10)
	windowWidth = window.innerWidth;
	$(".logo-title").children().removeClass("active");
	$(".logo-title-below").children().removeClass("active");
	$(".menu-show").on("click",function(){
		
	})
}

var prev = window.pageYOffset;
if(windowWidth>=1024){ 
if(prev>0){
	menuShrink();
	// $(".logo-title").find("p").removeClass("active");
	// $(".logo-title-below").find("p").removeClass("active");
}
else{
	$(".logo-title").find("p").addClass("active");
	$(".logo-title-below").find("p").addClass("active");
}

}



$(window).scroll(function(){

	if(window.innerWidth>=1024){ 

var currentScroll = $(window).scrollTop();

if (currentScroll>prev || currentScroll>0) {

	menuShrink();
	$(".logo-title").children().css("transition-delay","1s");
	$(".logo-title-below").children().css("transition-delay","1s");
}

 if (currentScroll === 0){
	 clearInterval(scrollTime);
	 scrollTime = setTimeout(function(){
		menuDiv.find("#empty").css("transition-delay","1.2s");
		menuDiv.animate({"opacity":"0"},300);
		menuDiv.find("#empty").css({"transform":"translateY(100%)"})
		menuDiv.find(".arrow-top").css({"transform":"translateY(100%)","transition-delay":"1.2s","opacity":"0"});
		$(".menu-up").delay(400).slideDown(800);
	
	
		$(".shadow-left").css({"opacity":"0.59"});
		$(".shadow-bottom").css({"opacity":"0.59","transition":"1s","transition-delay":"0.3s"});
		$("header").css({"border-bottom":"rgba(255,255,255,0) solid","transition":"1s"});
		$(".fragment").queue(function(e){
			$(this).css({"opacity":"0"});
			e();
		})
		$(".logo-title").children().addClass("active").css("transition-delay","1s");
		$(".logo-title-below").children().addClass("active").css("transition-delay","1s");
		$(".white-stick").css("top","57px");
	 },300)

}
	}

})


var changeLife = document.querySelector(".change-life");
var txt = "Begin New Life";
var wordWrap=0;
function word(){
	if(wordWrap<txt.length){
		changeLife.innerHTML+=txt.charAt(wordWrap);
		wordWrap++;
		setTimeout(word,150);
	}
}
setTimeout(word,1000);


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

$("#nav-icon4").on("click",function(){
	$(this).toggleClass("open");
	$("header").toggleClass("open");
	$(".menu-below").toggleClass("open");
	$(".main-2").toggleClass("open");
	$("body").toggleClass("open");
	if($(".menu-below").hasClass("open")){
		$(".menu-below").css({"opacity":"0.6"});
	}
	else{
		$(".menu-below").css({"opacity":"1"});
	}
})



$(window).scroll(function(){
	if(window.innerWidth<1024){

		var currentScroll = $(window).scrollTop();

		if (currentScroll === 0){
			$("header").css({"border-bottom":"rgba(255,255,255,0) solid","transition":"1s"});
			$(".logo-title").children().addClass("active").css("transition-delay","1s");
			$(".logo-title-below").children().addClass("active").css("transition-delay","1s");
		}
		if(currentScroll>0){
			$("header").css({"border-bottom":"rgba(0, 109, 165,1) solid","transition":"1s"});
			$(".logo-title").children().removeClass("active").css("transition-delay","1s");
			$(".logo-title-below").children().removeClass("active").css("transition-delay","1s");
		}
	 }
})
var adresses = $(".address-container").clone().css("display","block");
if ($(window).width()<1024){
	$(".white-stick").css("top","31.5px");
	adresses.appendTo(".footer-information");
	if(window.pageYOffset>0){
		$("header").css({"border-bottom":"rgba(0, 109, 165,1) solid"})
		$(".logo-title").find("p").removeClass("active");
		$(".logo-title-below").find("p").removeClass("active");
	}
	else{
		$(".logo-title").find("p").addClass("active");
		$(".logo-title-below").find("p").addClass("active");
	}
}

window.addEventListener('resize',function(){

	if(window.innerWidth<1024){
		$('#nav-icon4').removeClass('activation')
		let tempoHeight = $(document).height();
		$('.about').css('height',tempoHeight - 39 +'px' )

		$("header").css({"transition":"1s"});
		$(".white-stick").css("top","31.5px");
		   adresses.appendTo(".footer-information");
		   menuDiv.find("#empty").css("transition-delay","1.2s");
		   menuDiv.css({"opacity":"0"});
		   menuDiv.find("#empty").css({"transform":"translateY(100%)"})
		   menuDiv.find(".arrow-top").css({"transform":"translateY(100%)","opacity":"0"});
		   $(".menu-up").slideDown();
	   
	   
		   $(".shadow-left").css({"opacity":"0.59"});
		   $(".shadow-bottom").css({"opacity":"0.59","transition":"1s","transition-delay":"0.3s"});
		   $(".fragment").queue(function(e){
			   $(this).css({"opacity":"1"});
			   e();
		   })

		   if(window.innerWidth>767){
			var currentScroll = $(window).scrollTop();

			if(currentScroll==0){	
				$(".logo-title").children().addClass("active");
				$(".logo-title-below").children().addClass("active");
			}

			else{
				$(".logo-title").children().removeClass("active");
				$(".logo-title-below").children().removeClass("active");
			}

			$(window).scroll(function(){
				var currentScroll = $(window).scrollTop();

				if(currentScroll==0){	
					$(".logo-title").children().addClass("active").css("transition-delay","1s");
					$(".logo-title-below").children().addClass("active").css("transition-delay","1s");
				}
	
				else{
					$(".logo-title").children().removeClass("active").css("transition-delay","1s");
					$(".logo-title-below").children().removeClass("active").css("transition-delay","1s");
				}				
			})

		   }

		}

		
		
		else{
			$('.about').css('height','unset')
			$(".menu-below").css({"opacity":"1"});
			adresses.remove();
			var currentScroll = $(window).scrollTop();
			var prev = window.pageYOffset;
			$("#nav-icon4").removeClass("open");
			$("header").removeClass("open");
			$(".menu-below").removeClass("open");
			$(".main-2").removeClass("open");
			$(".white-stick").css("top","57px");
				if(currentScroll>0){
					
					$(".menu-show").css("opacity","1 !important");
					menuShrink();
				}
			
	$(window).scroll(function(){
		if(window.innerWidth>1023){ 
	var currentScroll = $(window).scrollTop();

	if (currentScroll>prev || currentScroll>0) {

	menuShrink();
}

 	else if (currentScroll === 0){
	 clearInterval(scrollTime);
	 scrollTime = setTimeout(function(){
		menuDiv.find("#empty").css("transition-delay","1.2s");
		menuDiv.animate({"opacity":"0"},300);
		menuDiv.find("#empty").css({"transform":"translateY(100%)"})
		menuDiv.find(".arrow-top").css({"transform":"translateY(100%)","transition-delay":"1.2s","opacity":"0"});
		$(".menu-up").delay(400).slideDown(800);
	
	
		$(".shadow-left").css({"opacity":"0.59"});
		$(".shadow-bottom").css({"opacity":"0.59","transition":"1s","transition-delay":"0.3s"});
		$("header").css({"border-bottom":"rgba(255,255,255,0) solid","transition":"1s"});
		$(".fragment").queue(function(e){
			$(this).css({"opacity":"0"});
			e();
		})
		$(".logo-title").children().addClass("active");
		$(".logo-title-below").children().addClass("active");
		$(".white-stick").css("top","57px");
	 },300)

}

		}

})

		}

		})

		var isEdge = window.navigator.userAgent.indexOf("Edge/") != -1;

		if(isEdge){
			$(".static-door").css({"transform":"perspective(500px) translateZ(0px) translateX(-2px) translateY(0px) rotateY(50deg)"});	
			$(".shadow-left").css({"display":"none"});
			$(".shadow-bottom").css("display","none");
			$(".door-shadow").remove();
			$(".static-shadow").remove();
			$(".real-door").css({"transform":"perspective(500px) translateZ(0px) translateX(0px) translateY(0px) rotateY(0deg)"});
			$(".door-container").css("width","88px");
						$(".door-box").on({mouseenter:function(){
				$(".real-door").css({"transform":"perspective(500px) translateZ(0px) translateX(0px) translateY(0px) rotateY(67deg)"});				
			},
			mouseleave:function(){
				$(".real-door").css({"transform":"perspective(500px) translateZ(0px) translateX(0px) translateY(0px) rotateY(0deg)"});				
			}
		 });

		}
});
 