<?php
class WarpMenuDropdown extends WarpMenu {	
public function process($module, $element) {
foreach ($element->find('ul.level2') as $ul) {
$li = $ul->parent();
$columns = (int) $li->attr('data-menu-columns');
if ($columns > 1) {
$i = 0;
$column = -1;
$children = $ul->children('li');
if ($children->length > $columns) {
$remainder = $children->length % $columns;
$colrows = ($children->length - $remainder) / $columns;
} else {
$remainder = 0;
$colrows = 1;
}
foreach ($children as $child) {
if ($i-- == 0) {
$i = $remainder-- > 0 ? $colrows : $colrows - 1;
$column++;
}		        
if ($li->children('ul')->length == $column) {
$li->append('<ul class="level2"></ul>');
}
if ($column > 0) {
$li->children('ul')->item($column)->append($child);
}
}
$columns = $column + 1;
} else {
$columns = 1; 
}
$width = (int) $li->attr('data-menu-columnwidth');
$style = $width > 0 ? sprintf(' style="width:%spx;"', $columns * $width) : null;
$li->append(sprintf('<div class="dropdown columns%d"%s><div class="dropdown-bg"><div></div></div></div>', $columns, $style));
$div = $li->first('div.dropdown div.dropdown-bg div:first');
foreach ($li->children('ul') as $i => $u) {
$div->append(sprintf('<div class="width%d column"></div>', floor(100 / $columns)))->children('div')->item($i)->append($u);
}
}
return $element;
}
}