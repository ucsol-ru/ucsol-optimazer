<?php
if (isset ($_POST['to'])) {
  $to = "testucsol@gmail.com"; 
  $from = "testucsol@gmail.com";
 $subject = "Резюме: Любые другие возможно требуемые вакансии";
  $message = "
  <b>Контактное лицо:</b> ".$_POST['nameface']."\n <br />
  <b>Телефон:</b> ".$_POST['tel']."\n <br />
  <b>Email:</b> ".$_POST['email'];
  
 
	
	  
	
  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"

--$boundary
Content-Type: text/html; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";
  for($i=0;$i<count($_FILES['fileFF']['name']);$i++) {
      if(is_uploaded_file($_FILES['fileFF']['tmp_name'][$i])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['fileFF']['tmp_name'][$i])));
         $filename = $_FILES['fileFF']['name'][$i];
         $filetype = $_FILES['fileFF']['type'][$i];
         $filesize += $_FILES['fileFF']['size'][$i];
         $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
     }
   }
   $message.="
--$boundary--";

  if ($filesize < 10000000) {
    $messageig = '<script>alert("Мы получили Ваш запрос и начали его обрабатывать! Ответ на почту Вы получите в самое ближайшее время!");</script>';
  } else {
    $output = '<script>alert("Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.");</script>';
  }

}
  $send = mail($to, $subject, $message, $headers);
if ($send == 'true')
{
}
else
{
echo "<p><b>Ошибка. Сообщение не отправлено!";
}
?>