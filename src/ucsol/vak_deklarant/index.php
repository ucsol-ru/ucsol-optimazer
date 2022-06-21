<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Документ без названия</title>
<link rel="stylesheet" href="/templates/ucsol/vak_deklarant/css/modal.css"> 
<script type="text/javascript" src="/templates/ucsol/vak_deklarant/js/jquery.min.js"></script>
<script type="text/javascript" src="/templates/ucsol/vak_deklarant/js/deklarant.js"></script>

<style type="text/css">
<!--
.стиль1 {
	font-family: "PT Sans";
	font-size: 13pt;
	color: #000;
}
-->
</style></head>

<body style="background-color: #f8f6f6;">
 <form enctype="multipart/form-data" action="/templates/ucsol/vak_deklarant/deklarant.php" method="post" name="formMail" id="formMail" style="background-color: #f8f6f6;"><fieldset style="border: 0px solid #d9ebf0;">
 

 
 
<div class="formRow">
<p style="text-align: center;"><span class="стиль1">Отправка резюме</span></p>
<div id="newsletter-form-field">
<div class="label" style="border-left: 1px solid #000;">Контактное лицо</div>
<input name="nameface" id="nameface" size="77" placeholder="" style="border-right: 1px solid #000;" type="text" /></div>
<div id="newsletter-form-field">
<div class="label" style="border-left: 1px solid #000;">Контактный телефон</div>
<input name="tel" id="tel" size="77" placeholder="" style="border-right: 1px solid #000;" type="text" /></div>


<div id="newsletter-form-field">
<div class="label" style="border-left: 1px solid #000;">Контактная почта, e-mail: <span style="font-size: 18pt; color: #ff0000;">*</span></div>
<input required name="email" id="email" size="77" placeholder="Обязательно для заполнения" style="border-right: 1px solid #000;" type="text" /></div>


<!-- files -->  
<div class="dow">
<p class="dowp">Загрузка вашего резюме</p>
<input type="file" name="fileFF[]" multiple id="fileFF" class="w100">
</div>
<!-- /files -->


</div>
<div>
<div id="newsletter-form-button" style="margin-top: 30px;"><input class="btnSmall btn submit right" value="ОТПРАВИТЬ"  name="to" id="stoim_perevoz" style="display: block; width: 148px; height: 38px; margin: 0 auto; border-radius: 3px; border: 1px solid #1482A1; background: #298DA9 url('/images/gradient4.png') 0 0; box-shadow: 0 1px 2px rgba(0,0,0,0.7); text-transform: uppercase; color: #fff; outline: none;pointer-events: auto;" type="submit" /></div>
</div>
</fieldset>
<p class="stoim_perevoz_error" style="display:none;">Мы получили Ваш запрос и начали его обрабатывать!<br />Ответ на почту Вы получите в самое ближайшее время!</p>
</form></div>
</body>
</html>