(function($){
	$( document ).ready(function() {
		   $('.featured-site').hover(function(){
				   var $img = $(this).find('img'),
						   imgHtoAnimate = $img.height() - $(this).height();
				   $(this).find('img').stop().animate({marginTop: -(imgHtoAnimate)}, 3000);
		   }, function(){
				   $(this).find('img').stop().animate({marginTop: 0},800);
		   });
	});
})(jQuery);