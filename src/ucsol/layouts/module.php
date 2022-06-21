<?php
$id				= $module->id;
$position		= $module->position;
$title			= $module->title;
$showtitle		= $module->showtitle;
$content		= $module->content;
$split_color	= '';
$subtitle		= '';
$title_template	= '';
foreach (array('suffix', 'style', 'color', 'badge', 'icon', 'dropdownwidth') as $var) {
	$$var = isset($params[$var]) ? $params[$var] : null;
}
if ($style == '') {
	if ($module->position == 'top-a') $style = 'box';
	if ($module->position == 'top-b') $style = 'box';
	if ($module->position == 'bottom-a') $style = 'box';
	if ($module->position == 'bottom-b') $style = 'box';
	if ($module->position == 'innertop') $style = 'box';
	if ($module->position == 'innerbottom') $style = 'box';
	if ($module->position == 'sidebar-a') $style = 'box';
	if ($module->position == 'sidebar-b') $style = 'box';
}
if (in_array($module->position, array('absolute', 'breadcrumbs', 'logo', 'banner', 'search', 'debug'))) {
	$style = 'raw';
	$showtitle = 0;
}
if (in_array($module->position, array('toolbar-r' ,'toolbar-l', 'footer'))) {
	$style = '';
	$showtitle = 0;
}
if ($module->position == 'menu') {
	$style = $module->menu ? 'raw' : 'dropdown';
}
switch ($style) {
	case 'box':
		$template		= 'default-1';
		$style			= 'mod-'.$style;
		$split_color	= 1;
		$subtitle		= 1;
		$title_template = '<h3 class="module-title">%s</h3>';
		break;
	case 'frame':
		$template		= 'default-2';
		$style			= 'mod-'.$style;
		$split_color	= 1;
		$subtitle		= 1;
		$title_template = '<h3 class="module-title2">%s</h3>';
		break;
	case 'inset':
		$template		= 'default-1';
		$style			= 'mod-'.$style;
		$split_color	= 1;
		$subtitle		= 1;
		$title_template = '<h3 class="module-title">%s</h3>';
		break;
	case 'black':
		$template		= 'default-1';
		$style			= 'mod-'.$style;
		$split_color	= 1;
		$subtitle		= 1;
		$title_template = '<h3 class="module-title">%s</h3>';
		break;
	case 'header':
		$template		= 'default-1';
		$style			= 'mod-'.$style;
		$style			.= ($color) ? ' mod-header-'.$color : '';
		$split_color	= 0;
		$subtitle		= 0;
		$title_template = '<h3 class="module-title">%s</h3>';
		break;
	case 'dotted':
		$template		= 'default-1';
		$style			= 'mod-'.$style;
		$split_color	= 1;
		$subtitle		= 1;
		$title_template = '<h3 class="module-title">%s</h3>';
		break;
	case 'line':
		$template		= 'default-1';
		$style			= 'mod-'.$style;
		$split_color	= 1;
		$subtitle		= 1;
		$title_template = '<h3 class="module-title">%s</h3>';
		break;
	case 'dropdown':
		$template		= 'dropdown';
		$subtitle		= 1;
		break;
	case 'raw':
		$template		= 'raw';
		break;
	default:
		$template		= 'default-1';
		$style			= $suffix;
		$suffix         = '';
		$title_template = '<h3 class="module-title">%s</h3>';
}
$style.=" ".$suffix;
if ($badge) {
	$badge = '<div class="badge badge-'.$badge.'"></div>';
}
if ($split_color) {
	$pos = mb_strpos($title, ' ');
	if ($pos !== false) {
		$title = mb_substr($title, 0, $pos).'<span class="color">'.mb_substr($title, $pos).'</span>';
	}
}
if ($subtitle) {
	$pos = mb_strpos($title, '||');
	if ($pos !== false) {
		$title = '<span class="title">'.mb_substr($title, 0, $pos).'</span><span class="subtitle">'.mb_substr($title, $pos + 2).'</span>';
	}
} 
if ($icon) {
	$title = '<span class="icon icon-'.$icon.'"></span>'.$title.'';
}
if ($title_template) {
	$title = sprintf($title_template, $title);
}
if ($dropdownwidth) {
	$dropdownwidth = 'style="width: '.$dropdownwidth.'px;"';
}
if ($module->menu) {
	if (isset($params['menu'])) {
		$renderer = $params['menu'];
	} else if (in_array($module->position, array('menu'))) {
		$renderer = 'dropdown';
	} else if (in_array($module->position, array('toolbar-l', 'toolbar-r', 'footer'))) {
		$renderer = 'default';
	} else {
		$renderer = 'accordion';
	}
	if ($renderer == 'dropdown') {
		$module->menu_style = 'menu-dropdown';
	} else if ($renderer == 'accordion') {
		$module->menu_style = 'menu-sidebar';
	} else if ($renderer == 'default') {
		$module->menu_style = 'menu-line';
	} else {
		$module->menu_style = null;
	}

	$content = $this['menu']->process($module, array_unique(array('pre', 'default', $renderer, 'post')));
}
echo $this->render("modules/templates/{$template}", compact('style', 'badge', 'showtitle', 'title', 'content', 'dropdownwidth'));