<meta charset="<?php echo $this['system']->document->getCharset(); ?>" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<?php if($this['config']->get('responsive', false)): ?>
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php endif; ?>
<jdoc:include type="head" />
<link rel="apple-touch-icon-precomposed" href="<?php echo $this['path']->url('template:apple_touch_icon.png'); ?>" />
<?php
$head = $this['system']->document->getHeadData();
unset($head['metaTags']['http-equiv']);
unset($head['metaTags']['standard']['title']);
unset($head['metaTags']['standard']['rights']);
unset($head['metaTags']['standard']['language']);
$this['system']->document->setHeadData($head);
JHtml::_('jquery.framework');
if ($bootstrap = $this['path']->url('css:bootstrap.css')) {
$this['system']->document->addStyleSheet($bootstrap);
}
$styles  = $this['asset']->get('css');
$scripts = $this['asset']->get('js');
if ($compression = $this['config']->get('compression')) {
$options = array();
$filters = array('CSSImportResolver', 'CSSRewriteURL', 'CSSCompressor');
if ($compression == 3) {
$options['Gzip'] = true;
}
if ($compression >= 2 && ($this['useragent']->browser() != 'msie' || version_compare($this['useragent']->version(), '8.0', '>='))) {
$filters[] = 'CSSImageBase64';
}
if ($styles) {
$styles = array($this['asset']->cache('template.css', $styles, $filters, $options));
foreach ($styles[0] as $style) {
if ($style->getType() == 'File' && !$style->getPath()) {
$styles[] = $style;
}
}
}
if ($scripts) {
$scripts = array($this['asset']->cache('template.js', $scripts, array('JSCompressor'), $options));
foreach ($scripts[0] as $script) {
if ($script->getType() == 'File' && !$script->getPath()) {
$scripts[] = $script;
}
}
}
$head = $this['system']->document->getHeadData();
$data = array('styleSheets' => array(), 'scripts' => array());
foreach ($head['styleSheets'] as $style => $meta) {
if (preg_match('/\.css$/i', $style)) {
$asset = $this['asset']->createFile($style);
if ($asset->getPath()) {
$style = $this['asset']->cache(basename($style), $asset, array('CSSImportResolver', 'CSSRewriteURL', 'CSSCompressor'), $options)->getUrl();
}
}
$data['styleSheets'][$style] = $meta;
}
foreach ($head['scripts'] as $script => $meta) {
if (preg_match('/\.js$/i', $script)) {
$asset = $this['asset']->createFile($script);
if ($asset->getPath()) {
$script = $this['asset']->cache(basename($script), $asset, array('JSCompressor'), $options)->getUrl();
}
}
$data['scripts'][$script] = $meta;
}	
$this['system']->document->setHeadData(array_merge($head, $data));
}
if ($styles) {
foreach ($styles as $style) {
if ($url = $style->getUrl()) {
printf("<link rel=\"stylesheet\" href=\"%s\" />\n", $url);
} else {
printf("<style>%s</style>\n", $style->getContent());
}
}
}
if ($scripts) {
foreach ($scripts as $script) {
if ($url = $script->getUrl()) {
printf("<script src=\"%s\"></script>\n", $url);
} else {
printf("<script>%s</script>\n", $script->getContent());
}
}
}
$this->output('head');