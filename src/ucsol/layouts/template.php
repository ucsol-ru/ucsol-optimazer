<?php  
include($this['path']->path('layouts:template.config.php'));
?>
<!DOCTYPE HTML>
<html lang="<?php echo $this['config']->get('language'); ?>" dir="<?php echo $this['config']->get('direction'); ?>">
<?php
$LastModified_unix=filemtime(substr($_SERVER['PHP_SELF'],1));
$LastModified = gmdate("D, d M Y H:i:s \G\M\T", $LastModified_unix);
$IfModifiedSince = false;
if (isset($_ENV['HTTP_IF_MODIFIED_SINCE']))
$IfModifiedSince = strtotime(substr($_ENV['HTTP_IF_MODIFIED_SINCE'], 5));  
if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']))
$IfModifiedSince = strtotime(substr($_SERVER['HTTP_IF_MODIFIED_SINCE'], 5));
if ($IfModifiedSince && $IfModifiedSince >= $LastModified_unix) {
header($_SERVER['SERVER_PROTOCOL'] . ' 304 Not Modified');
exit;
}
header('Last-Modified: '. $LastModified);
?>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="yandex-verification" content="5f79ffdc31cfd1e5" />
<?php echo $this['template']->render('head'); ?>
<link rel="stylesheet" href="https://ucsol.ru/templates/ucsol/css/maxpixel.css?ver=1006022" type="text/css" />
</head>
<body id="page" class="page <?php echo $this['config']->get('body_classes'); ?>" data-config='<?php echo $this['config']->get('body_config','{}'); ?>'>
<?php if ($this['modules']->count('absolute')) : ?>
<div id="absolute"><?php echo $this['modules']->render('absolute'); ?></div>
<?php endif; ?>
<div id="block-page">
<div id="page-bg">
<?php if ($this['modules']->count('toolbar-l + toolbar-r + search') || $this['config']->get('date')) : ?>
<div id="block-toolbar">
<div class="wrapper">
<div id="toolbar" class="clearfix">
<?php if ($this['modules']->count('toolbar-l') || $this['config']->get('date')) : ?>
<div class="float-left">
<?php if ($this['config']->get('date')) : ?>
<time datetime="<?php echo $this['config']->get('datetime'); ?>"><?php echo $this['config']->get('actual_date'); ?></time>
<?php endif; ?>
<?php echo $this['modules']->render('toolbar-l'); ?></div>
<?php endif; ?>
<?php if ($this['modules']->count('search')) : ?>
<div id="search"><?php echo $this['modules']->render('search'); ?></div>
<?php endif; ?>
<?php if ($this['modules']->count('toolbar-r')) : ?>
<div class="float-right">
<?php echo $this['modules']->render('toolbar-r'); ?>
</div>
<?php endif; ?>
</div></div></div>
<?php endif; ?>
<div id="block-main">
<div class="wrapper clearfix">
<?php if ($this['modules']->count('logo + menu')) : ?>
<header id="header" class="grid-block">
<?php if ($this['modules']->count('logo')) : ?>
<a id="logo" href="<?php echo $this['config']->get('site_url'); ?>">
<?php echo $this['modules']->render('logo'); ?></a>
<?php endif; ?>
<?php if ($this['modules']->count('menu')) : ?>
<nav id="menu"><?php echo $this['modules']->render('menu'); ?></nav>
<?php endif; ?>
</header>
<?php endif; ?>
<?php if ($this['modules']->count('top-a')) : ?>
<section id="top-a" class="grid-block">
<?php echo $this['modules']->render('top-a', array('layout'=>$this['config']->get('top-a'))); ?>
</section>
<?php endif; ?>
<?php if ($this['modules']->count('top-b')) : ?>
<section id="top-b" class="grid-block">
<?php echo $this['modules']->render('top-b', array('layout'=>$this['config']->get('top-b'))); ?>
</section>
<?php endif; ?>
<?php if ($this['modules']->count('innertop + sidebar-a + sidebar-b') || $this['config']->get('system_output')) : ?>
<div id="main" class="grid-block">
<div id="maininner" class="grid-box">
<?php if ($this['modules']->count('innertop')) : ?>
<section id="innertop" class="grid-block">
<?php echo $this['modules']->render('innertop', array('layout'=>$this['config']->get('innertop'))); ?>
</section>
<?php endif; ?>
<?php if ($this['config']->get('system_output')) : ?>
<div class="Link2"><span>Если вы нашли ошибку на сайте - напишите нам, и мы её исправим!</span></div>
<section id="content" class="grid-block">
<?php if ($this['modules']->count('breadcrumbs')) : ?>
<?php echo $this['modules']->render('breadcrumbs'); ?>
<?php endif; ?>
<?php echo $this['template']->render('content'); ?>
</section>
<?php endif; ?>
<?php if ($this['modules']->count('recnews')) : ?>
<section id="recnews" class="grid-block">
<?php echo $this['modules']->render('recnews', array('layout'=>$this['config']->get('recnews'))); ?>
</section>
<?php endif; ?>
</div>
<?php if ($this['modules']->count('sidebar-a')) : ?>
<aside id="sidebar-a" class="grid-box">
<?php echo $this['modules']->render('sidebar-a', array('layout'=>'stack')); ?>
</aside>
<?php endif; ?>
<?php if ($this['modules']->count('sidebar-b')) : ?>
<aside id="sidebar-b" class="grid-box" >
<?php echo $this['modules']->render('sidebar-b', array('layout'=>'stack')); ?>
</aside>
<?php endif; ?>
</div>
<?php endif; ?>
<div class="Link2"><noindex>
<a rel="nofollow" href="http://ucsol.ru/vozmozhno-my-chto-to-upustili-soobshchite-nam">Возможно мы что-то упустили - сообщите нам!</a></noindex>
</div>
<?php if ($this['modules']->count('innerbottom')) : ?>
<section id="innerbottom" class="grid-block">
<?php echo $this['modules']->render('innerbottom', array('layout'=>$this['config']->get('innerbottom'))); ?></section>
<?php endif; ?>
<?php if ($this['modules']->count('bottom-a')) : ?>
<section id="bottom-a" class="grid-block"><?php echo $this['modules']->render('bottom-a', array('layout'=>$this['config']->get('bottom-a'))); ?>
</section>
<?php endif; ?>
</div></div>
<?php if ($this['modules']->count('bottom-b')) : ?>
<div id="block-bottom"><div class="wrapper">
<section id="bottom-b" class="grid-block">
<?php echo $this['modules']->render('bottom-b', array('layout'=>$this['config']->get('bottom-b'))); ?>
</section>
</div></div>
<?php endif; ?>
</div></div>
<?php if ($this['modules']->count('footer + debug') || $this['config']->get('warp_branding') || $this['config']->get('totop_scroller')) : ?>
<div id="block-footer"><div class="wrapper">
<footer id="footer">
<?php if ($this['config']->get('totop_scroller')) : ?><a id="totop-scroller" href="#page"></a><?php endif; ?>
<?php echo $this['modules']->render('footer');
$this->output('warp_branding');
echo $this['modules']->render('debug');
?></footer>
<p id="back-top"><a href="#top"><span></span>НАВЕРХ</a></p></div></div>
<?php endif; ?>
<?php echo $this->render('footer'); ?>
<script type="text/javascript">
$(document).ready(function() { $("#airports_table").tablesorter(); });
</script>
<script>
$(document).ready(function(){
$("#back-top").hide();
$(function () {
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
$('#back-top').fadeIn();
} else {
$('#back-top').fadeOut();
}
});
$('#back-top a').click(function () {
$('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});
});
</script>
<div style="position:absolute;top:0;left:-9999px;"> 
<!--LiveInternet counter--><script type="text/javascript"><!--
new Image().src = "//counter.yadro.ru/hit?r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";"+Math.random();//--></script><!--/LiveInternet-->
<!-- Rating@Mail.ru counter -->
<script type="text/javascript">
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "2818523", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "topmailru-code");
</script>
<noscript><div style="position:absolute;left:-10000px;">
<img src="//top-fwz1.mail.ru/counter?id=2818523;js=na" style="border:0;" height="1" width="1" alt="Рейтинг@Mail.ru" />
</div></noscript>
<!-- //Rating@Mail.ru counter -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-84509457-1', 'auto');
  ga('send', 'pageview');
</script>
<style data-css="other">
    .footer_adres_link {
        display: inline;
    }
    @media(max-width: 767px) {
        .footer_cont1, .footer_cont2 {
            text-align: left !important;
        }
    }
    @media(max-width: 576px) {
        .footer_adres_link {
            display: flex;
            flex-direction: column-reverse;
        }
        .footer_adres_link .hide-sm {
            display: none;
        }
        #header .headerste2,
        #header .headerstel,
        #header .headerstxt {
            font-size: 16x;
            width: 70%;
            padding-right: 10px;
        }
        #header .headerstel {
            top: 0;
        }
        #header .headerste2 {
            top: 22px;
        }
        #header .headerstxt {
            top: 45px;
        }
        #top-a .deepest .text-center > a img {
            object-position: 30px;
        }
    }
</style>
</div>
</body>
</html>