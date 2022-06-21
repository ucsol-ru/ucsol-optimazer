$(document).ready(function(){

	// hide messages 
	$("#error").hide();
	$("#success2").hide();
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

	
	$('#email').keyup(function(){

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
	// on submit...
	$("#send").click(function() {
		if (is_ok == true) {
			$("#error").hide();
			
			//required:
			
		
			
			// nameface Контактное лицо:
			var nameface = $("input#nameface").val();
			if(nameface == ""){
				$("input#nameface").focus();
			}
			
			// tel Телефон:
			var tel = $("input#tel").val();
			if(tel == ""){
				$("input#tel").focus();
			}
			
			// email E-mail:
			var email = $("input#email").val();
			if(email == ""){
				$("#error").fadeIn().text("Пустое поле: Email");
				$("input#email").focus();
				return false;
			}

				
			
			// data string
			var dataString = 'name='+ name
			+ '&nameface=' + nameface
			+ '&tel=' + tel
			+ '&email=' + email;
									 
			// ajax
			$.ajax({
				type:"POST",
				url: "/templates/ucsol/vak_deklarant/deklarant.php",
				data: dataString,
				success: success2()
			});
		}
		else {
			$('#email').focus();
			$('#email').css('background', '#FF7676', 'important');
		}
	});  
		
		
	// on success...
	 function success2(){
	 	$("#success2").fadeIn();
	 	$("#formMail").fadeOut();
	 }
	
    return false;
});