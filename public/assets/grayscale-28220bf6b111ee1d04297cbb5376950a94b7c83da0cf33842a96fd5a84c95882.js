$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(function(){$("a.page-scroll").bind("click",function(a){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top},1500,"easeInOutExpo"),a.preventDefault()})}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$(".navbar-collapse").on("shown.bs.collapse",function(){$(window).scroll(function(){$(".navbar-collapse").collapse("hide")})});