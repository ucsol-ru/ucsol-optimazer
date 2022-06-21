/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

(function($){

	// Responsive
	$(document).ready(function() {
		// less then desktop
		if($(window).width() <= 959) {
			// sidebar tabs
			$('#sidebar-b .bordermenu a').on('click', function(e) {
				e.preventDefault();
				let href = $(this).attr('href');
				if($(this).hasClass('active')) {
					$(this).siblings('.bordermenu-left').slideUp();
					$(this).removeClass('active');
				} else {
					$('#sidebar-b .bordermenu-left').slideUp();
					$('#sidebar-b .bordermenuno').removeClass('active');
					$('#sidebar-b .bordermenu a').removeClass('active');
					$(this).parent().siblings('.bordermenu-left').slideDown();
					$(this).addClass('active');
				}
			});
			$('#sidebar-b .bordermenuno').on('click', function(e) {
				e.preventDefault();
				if($(this).hasClass('active')) {
					$(this).siblings('.bordermenu-left').slideUp();
					$(this).removeClass('active');
				} else {
					$('#sidebar-b .bordermenu-left').slideUp();
					$('#sidebar-b .bordermenuno').removeClass('active');
					$('#sidebar-b .bordermenu a').removeClass('active');
					$(this).siblings('.bordermenu-left').slideDown();
					$(this).addClass('active');
				}
			});
		}
		// less then tablets
		if($(window).width() <= 767) {
			// footer tabs
			$('#footer3 div div > strong').on('click', function() {
				if($(this).hasClass('active')) {
					$(this).siblings('.menuu').slideUp();
					$(this).removeClass('active');
				} else {
					$('#footer3 .menuu').slideUp();
					$('#footer3 div div > a').removeClass('active');
					$('#footer3 div div > strong').removeClass('active');
					$(this).siblings('.menuu').slideDown();
					$(this).addClass('active');
				}
			});
			$('#footer3 div div > a').on('click', function(e) {
				e.preventDefault();
				let href = $(this).attr('href');
				if($(this).hasClass('active')) {
					$(this).siblings('.menuu').slideUp();
					$(this).removeClass('active');
				} else {
					$('#footer3 .menuu').slideUp();
					$('#footer3 div div > a').removeClass('active');
					$('#footer3 div div > strong').removeClass('active');
					$(this).siblings('.menuu').slideDown();
					$(this).addClass('active');
				}
			});
			// mobile nav menu
			$('#header-responsive_activate').on('click', function(e) {
				e.preventDefault();

				if($('#header-responsive').hasClass('active')) {
					$('header #menu').slideUp();
					$('#header-responsive').removeClass('active');
				} else {
					$('header #menu').slideDown();
					$('#header-responsive').addClass('active');
				}
			});
		}
	});

	$(document).ready(function() {
    var tabs = $('.choose_how');
	var telo = $('.how_to');

$('.choose_how').on('click', function(){
	ind =  tabs.index(this);
    tabs.css({color:'',border:'1px solid #fff',borderBottom:'1px solid #ccc'});
    $(this).css({color:'#33CCFF',border:'1px solid #ccc',borderBottom:'1px solid #fff'});
	telo.css({display:'none'});
	telo.eq(ind).css({display:'block'});
})
var all_zay = $('.choose_zay');

	$('.choose_zay').click(function(){
		some_choos_ind = all_zay.index(this);    
		all_zay.each(function( index ) {    
			if (index != some_choos_ind)
			{        	
			  all_zay.eq(index).stop().animate({
				height: 40,
			  }, 300);
			}
		});
		if ($(this).height() < 50)
		{
			$(this).css({height:'auto'});
			var hei = $(this).height() - 41;
			$(this).css({height:'40px'});
			$(this).stop().animate({
				height: hei,
			}, 300);
		}
	})
	$(".choose_zay > p").click(function(){
		
		if ($(this).closest(".choose_zay").height() > 50)
		{
			$(this).closest(".choose_zay").stop().animate({
				height: 40,
			}, 300);
		}
	})
	$(".expand_form").click(function(){
		
		if ($(this).closest(".zayav_dost").height() < 100)
		{
			$(".expand_form").addClass('collapse');
			$(".expand_form span").html("Свернуть");
			$(this).closest(".zayav_dost").stop().animate({
				height: 930,
			}, {duration: 600, complete: function(){
				
			}});
		}
		else {
			$(".expand_form").removeClass('collapse');
			$(".expand_form span").html("Получить");
			$(this).closest(".zayav_dost").stop().animate({
				height: 91,
			}, {duration: 600, complete: function(){
				
			}});
		}
	})
	$('#gruz').focusout(function(){
		//if ($('#gruz').val() != '')
		//{
			$('#gruzperevoz').val($('#gruz').val());
			$('#gruzsert').val($('#gruz').val());
		//}
	}) 
	$('#gruzperevoz').focusout(function(){
		//if ($('#gruzperevoz').val() != '')
		//{
			$('#gruz').val($('#gruzperevoz').val());
			$('#gruzsert').val($('#gruzperevoz').val());
		//}
	}) 
	$('#gruzsert').focusout(function(){
		//if ($('#gruzsert').val() != '')
		//{
			$('#gruz').val($('#gruzsert').val());
			$('#gruzperevoz').val($('#gruzsert').val());
		//}
	}) 
	$("#stoimostgruzastrah").keyup(function(){
	  var Value = $('#stoimostgruzastrah').val();
	  $('#stoimostgruzastrahpred').val(Math.round((Value * 0.0035)*100)/100);
	});
	var is_ok = false;
	$('#email').keyup(function(){
		var str = $(this).val();
		$(this).val($.trim(str));
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		if(pattern.test($(this).val()))
		{
			is_ok = true;
			$(this).css('background', '#FFF', 'important');
		}
		else 
		{
			is_ok = false;
			$(this).css('background', '#FF7676', 'important');
		}
	})
	$('#email').focusout(function(){

		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		if(pattern.test($(this).val()))
		{
			is_ok = true;
			$(this).css('background', '#FFF', 'important');
		}
		else 
		{
			is_ok = false;
			$(this).css('background', '#FF7676', 'important');
		}
	})
    
    $('#formMail').submit(function(e) {
      if (is_ok == true) {
		  e.preventDefault()
      }
      else
      {
      	$('#email').focus();
		$('#email').css('background', '#FF7676', 'important');
      	return false;
      }
    })
	
 $("#menu2 > li > a").on('touchstart', function(e) {
       if ($(this).hasClass('touched')) {
         var el = $(this);
         var link = el.attr('ref');                 
         document.location.href=$(this).attr('href');
       }
       else {         
         e.preventDefault();
         $(this).closest('ul').find('div').css({left:'-999em'});
         $(this).closest('li').find('div').css({left:'0'});
         $("#menu2 > li > a").removeClass('touched'); 
         $(this).addClass('touched');
       }
     });
	$(document).on('touchstart', function(event) { 
        if ($(event.target).closest("#menu2").length) return;  
		if ($(event.target).closest("#menu2").length) return;          
        $('ul#menu2').find('div').css({left:'-999em'}); 
        $("#menu2 > li > a").removeClass('touched'); 
        event.stopPropagation();         
    });
		var config = $('body').data('config') || {};
		
		// Accordion menu
		$('.menu-sidebar').accordionMenu({ mode:'slide' });

		// Dropdown menu
		$('#menu').dropdownMenu({ mode: 'slide', dropdownSelector: 'div.dropdown', centerDropdown: true});

		// Smoothscroller
		$('a[href="#page"]').smoothScroller({ duration: 500 });

		// Social buttons
		$('article[data-permalink]').socialButtons(config);
		
		
		var hot_vis = $(".hot_form").css({height:'auto'}).height();
		$(".hot_form").css({height:'28'});
	$(".ne_hot_form span").on("click", function(){
		
		if ($(this).closest(".hot_form").height() < 30)
		{
			$(this).closest(".hot_form").stop().animate({
				height: hot_vis,
			}, {duration: 300, complete: function(){
				$(this).css({height:'auto'});
			}});
		}
		else 
		{
			$(this).closest(".hot_form").stop().animate({
				height: 28,
			}, 300);
		}
	})	
		
	$(".find_error, #content #k2Container .itemToolbar > ul > li:first-child > span:first-child, .Link2 > span").on("click", function(e){
		e.preventDefault();
		$(".url_adr_error_url").html("(" + location.href + ")");
		$(".url_adr_error_title").html($('title').html());
		$(".fade_error").css({display:'block'}).stop().animate({
			opacity: 1,
		}, 200);
	})
	$(document).on('click', function(event) { 
        if ($(event.target).closest(".fade_inside").length) return;  
		if ($(event.target).closest(".find_error").length) return; 	
		if ($(event.target).closest('#content #k2Container .itemToolbar > ul > li:first-child > span:first-child, .Link2 > span').length) return; 			
        $(".fade_error").stop().animate({
			opacity: 0,
		},{duration: 200, complete: function(){
			$(".fade_error").css({display:'none'});
		}});    
        event.stopPropagation();         
    });
	$(".close_fade").on("click", function(){
		$(".fade_error").stop().animate({
			opacity: 0,
		},{duration: 200, complete: function(){
			$(".fade_error").css({display:'none'});
		}});  
	})
	
	var all_li = $(".hot_form li");
	$(".hot_form li span").on("click", function(){
		if (all_li.index($(this).closest("li")) != 1)
		{
			if ($(this).closest("li").height() < 25)
			{	
				all_li.stop().animate({
					height: 24,
				}, 100);
				var li_h = $(this).closest("li").css({height:'auto'}).height() + 24;
				$(this).closest("li").css({height:'24'});
				$(this).closest("li").stop().animate({
					height: li_h,
				}, 100);
			}
			else 
			{
				all_li.stop().animate({
					height: 24,
				}, 100);
			}
		}
		
	})
	
	
	
	});

	$.onMediaQuery('(min-width: 960px)', {
		init: function() {
			if (!this.supported) this.matches = true;
		},
		valid: function() {
			$.matchWidth('grid-block', '.grid-block', '.grid-h').match();
			$.matchHeight('main', '#maininner, #sidebar-a, #sidebar-b').match();
			$.matchHeight('top-a', '#top-a .grid-h', '.deepest').match();
			$.matchHeight('top-b', '#top-b .grid-h', '.deepest').match();
			$.matchHeight('bottom-a', '#bottom-a .grid-h', '.deepest').match();
			$.matchHeight('bottom-b', '#bottom-b .grid-h', '.deepest').match();
			$.matchHeight('innertop', '#innertop .grid-h', '.deepest').match();
			$.matchHeight('innerbottom', '#innerbottom .grid-h', '.deepest').match();
		},
		invalid: function() {
			$.matchWidth('grid-block').remove();
			$.matchHeight('main').remove();
			$.matchHeight('top-a').remove();
			$.matchHeight('top-b').remove();
			$.matchHeight('bottom-a').remove();
			$.matchHeight('bottom-b').remove();
			$.matchHeight('innertop').remove();
			$.matchHeight('innerbottom').remove();
		}
	});

	var pairs = [];

	$.onMediaQuery('(min-width: 480px) and (max-width: 959px)', {
		valid: function() {
			$.matchHeight('sidebars', '.sidebars-2 #sidebar-a, .sidebars-2 #sidebar-b').match();
			pairs = [];
			$.each(['.sidebars-1 #sidebar-a > .grid-box', '.sidebars-1 #sidebar-b > .grid-box', '#top-a .grid-h', '#top-b .grid-h', '#bottom-a .grid-h', '#bottom-b .grid-h', '#innertop .grid-h', '#innerbottom .grid-h'], function(i, selector) {
				for (var i = 0, elms = $(selector), len = parseInt(elms.length / 2); i < len; i++) {
					var id = 'pair-' + pairs.length;
					$.matchHeight(id, [elms.get(i * 2), elms.get(i * 2 + 1)], '.deepest').match();
					pairs.push(id);
				}
			});
		},
		invalid: function() {
			$.matchHeight('sidebars').remove();
			$.each(pairs, function() { $.matchHeight(this).remove(); });
		}
	});

    $.onMediaQuery('(min-width: 768px)', {
        valid: function() {
            $('#menu').removeAttr("style");
        }
    })
	$.onMediaQuery('(max-width: 767px)', {
		valid: function() {
			var header = $('#header-responsive');
			var headerActive = $('#header-responsive_activate') // add new style Artix
			var label = $('<label>').attr({className:'header-responsive__menu-button-container', "for": "header-responsive__menu-toggle"})
			if (!header.length) {
				header = $('<div id="header-responsive"/>').prependTo('#header');
				headerActive = $('<div id="header-responsive_activate" />').prependTo(header);
				$('<input>').attr({type:'checkbox', id:'header-responsive__menu-toggle'}).appendTo(headerActive);
				label.appendTo(headerActive);
				$("<div class='header-responsive__menu-button' />").appendTo(label);
				//$('#logo').clone().removeAttr('id').addClass('logo').appendTo(headerActive);
				//$('.searchbox').first().clone().removeAttr('id').appendTo(headerActive);
				//$('#menu').responsiveMenu().next().addClass('menu-responsive').appendTo(headerActive);
			}
		}
	});


})(jQuery);