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
			
			//name Название организации:
			var name = $("input#name").val();
			if(name == ""){
				$("input#name").focus();
			}
			
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

					// gruz Наименование груза:
			var gruz = $("input#gruz").val();
			if(gruz == ""){
				$("input#gruz").focus();
			}
			
			// kg Общий вес, кг:
			var kg = $("input#kg").val();
			if(kg == ""){
				$("input#kg").focus();
			}
			
			// metr Объем груза, кол-во мест и их размеры, м:
			var metr = $("input#metr").val();
			if(metr == ""){
				$("input#metr").focus();
			}
			
			// city Пункт отправки (город, страна):
			var city = $("input#city").val();
			if(city == ""){
				$("input#city").focus();
			}
			
			// city2 Пункт доставки (город, страна):
			var city2 = $("input#city2").val();
			if(city2 == ""){
				$("input#city2").focus();
			}
			
			// transport Вид транспорта: Авто, авиа, море, ржд... :
			var transport = $("input#transport").val();
			if(transport == ""){
				$("input#transport").focus();
			}

					// gruzperevoz Наименование груза, товара:
			var gruzperevoz = $("input#gruzperevoz").val();
			if(gruzperevoz == ""){
				$("input#gruzperevoz").focus();
			}
			
			// mesto Место таможенного оформления:
			var mesto = $("input#mesto").val();
			if(mesto == ""){
				$("input#mesto").focus();
			}
			
			// gruzsert Наименование груза, товара:
			var gruzsert = $("input#gruzsert").val();
			if(gruzsert == ""){
				$("input#gruzsert").focus();
			}
			
			// vid Вид необходимого документа:
			var vid = $("input#vid").val();
			if(vid == ""){
				$("input#vid").focus();
			}
			
			// sert Срок действия сертификата:
			var sert = $("input#sert").val();
			if(sert == ""){
				$("input#sert").focus();
			}
			
			// stoimostgruzastrah Стоимость груза: (Получить стоимость страхования груза)
			var stoimostgruzastrah = $("input#stoimostgruzastrah").val();
			if(stoimostgruzastrah == ""){
				$("input#stoimostgruzastrah").focus();
			}
			
			// stoimostgruzastrahpred Стоимость страховки предворительный:
			var stoimostgruzastrahpred = $("input#stoimostgruzastrahpred").val();
			if(stoimostgruzastrahpred == ""){
				$("input#stoimostgruzastrahpred").focus();
			}
			
			// messZamechaniy
			var messZamechaniy = $("#messZamechaniy").val();
			if(messZamechaniy == ""){
				$("input#messZamechaniy").focus();
			}
			   
			// mess
			var mess = $("#mess").val();
			if(mess == ""){
				$("input#mess").focus();
			}
			
			// messmessZamechaniy
			var messmessZamechaniy = $("#messmessZamechaniy").val();
			if(messmessZamechaniy == ""){
				$("input#messmessZamechaniy").focus();
			}
			
			// data string
			var dataString = 'name='+ name
			+ '&nameface=' + nameface
			+ '&tel=' + tel
			+ '&email=' + email
			+ '&gruz=' + gruz
			+ '&kg=' + kg
			+ '&metr=' + metr
			+ '&city=' + city
			+ '&city2=' + city2
			+ '&transport=' + transport
			+ '&gruzperevoz=' + gruzperevoz
			+ '&mesto=' + mesto
			+ '&gruzsert=' + gruzsert
			+ '&vid=' + vid
			+ '&sert=' + sert
			+ '&stoimostgruzastrah=' + stoimostgruzastrah
			+ '&stoimostgruzastrahpred=' + stoimostgruzastrahpred
			+ '&messmessZamechaniy=' + messmessZamechaniy
			+ '&mess=' + mess;
									 
			// ajax
			$.ajax({
				type:"POST",
				url: "send-mail_a.php",
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