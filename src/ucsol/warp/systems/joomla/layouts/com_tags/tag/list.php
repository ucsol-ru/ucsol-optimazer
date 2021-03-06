<?php
/**
* @package   Warp Theme Framework
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die;

JHtml::addIncludePath(JPATH_COMPONENT.'/helpers');
$n = count($this->items);

?>

<div id="system">

	<?php  if ($this->params->get('show_page_heading')) : ?>
	<h1 class="title"><?php echo $this->escape($this->params->get('page_heading')); ?></h1>
	<?php endif;  ?>

	<?php if($this->params->get('show_tag_title', 1)) : ?>
	<h2 class="subtitle">Articles Tagged ‘<?php echo JHtml::_('content.prepare', $this->document->title, '', 'com_tag.tag'); ?>’</h2>
	<?php endif; ?>

	<?php // We only show a tag description if there is a single tag. ?>
	<?php if (count($this->item) == 1 && (($this->params->get('tag_list_show_tag_image', 1) == 1 && !empty($images->image_fulltext)) || ($this->params->get('tag_list_show_tag_description') == 1 && $this->item[0]->description))) : ?>
	<div class="description">
		<?php $images = json_decode($this->item[0]->images); ?>
		<?php if ($this->params->get('tag_list_show_tag_image', 1) == 1 && !empty($images->image_fulltext)) : ?>
			<img src="<?php echo htmlspecialchars($images->image_fulltext);?>">
		<?php endif; ?>
		<?php if ($this->params->get('tag_list_show_tag_description') == 1 && $this->item[0]->description) : ?>
			<?php echo JHtml::_('content.prepare', $this->item[0]->description, '', 'com_tags.tag'); ?>
		<?php endif; ?>
	</div>
	<?php endif; ?>

	<?php // If there are multiple tags and a description or image has been supplied use that. ?>
	<?php if (($this->params->get('tag_list_description', '') > '') || ($this->params->get('show_description_image', 1) == 1 && $this->params->get('tag_list_image'))): ?>
	<div class="description">
		<?php if ($this->params->get('show_description_image', 1) == 1 && $this->params->get('tag_list_image')) :?>
			<img src="<?php echo $this->params->get('tag_list_image');?>">
		<?php endif; ?>
		<?php if ($this->params->get('tag_list_description', '') > '') :?>
			<?php echo JHtml::_('content.prepare', $this->params->get('tag_list_description'), '', 'com_tags.tag'); ?>
		<?php endif; ?>
	</div>
	<?php endif; ?>

	<?php echo $this->loadTemplate('items'); ?>

</div>