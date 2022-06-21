<?php
defined('_JEXEC') or die('Restricted access');
$head = $this->getHeadData();
unset($head['metaTags']['http-equiv']);
unset($head['metaTags']['standard']['title']);
unset($head['metaTags']['standard']['rights']);
unset($head['metaTags']['standard']['language']);
$this->setHeadData($head);
?>
<!DOCTYPE HTML>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>" >
<head>
<?php
unset(
$this->_scripts[$this->baseurl.'/media/system/js/mootools-more.js']
);
?>
<meta charset="<?php echo $this->getCharset(); ?>" />
<jdoc:include type="head" />
</head>
<body class="contentpane">
<jdoc:include type="message" />
<jdoc:include type="component" />
</body>
</html>
