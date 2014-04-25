<?php
// $Id$
/**
 * @file page.header.inc
 * Header template.
 * @ingroup page
 */
?>
<div id="page-wrapper" class="clearfix">
 
  <div id="header"> 
    <div id="user-menu-wrap" >
      <?php print $user_menu; ?>
    </div>
    <div id="header-inner" class="clearfix center-on-page">
      <div class = 'title'>
      <div style="float:left;margin-top:15px;">
      	<a href="/"><img src="/sites/all/themes/openpublic_eu/img/moveIT-logo.png" /></a>
        </div>
        <?php if ($site_slogan = variable_get('site_slogan')) : ?>
          <div class = 'site-slogan'><?php print $site_slogan; ?></div>
        <?php endif; ?>
      </div>
        
      <div id="header-right-content" class="clearfix">
        <?php if($page['header']){ ?>
        <div id="header-search" class="clearfix">
          <?php print render($page['header']); ?>
        </div><!--/header search-->
        <?php } ?>
               
      </div><!--/header right content-->

    </div><!--/#header-inner-->
  </div> <!-- /.section, /#header -->
    
   <div id="wrap" class="center-on-page clearfix">
   <div id="wrap-inner" class="center-on-page clearfix">

    <?php if ($main_menu || $secondary_menu): ?>
    <div id="navigation"><div class="section">
        <?php print theme('links__system_main_menu', array(
          'links' => $main_menu,
          'attributes' => array(
            'id' => 'main-menu-links',
            'class' => array('links', 'clearfix'),
          ),
          'heading' => array(
            'text' => t('Main menu'),
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      <?php //print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'navlist', 'class' => array('links')))); ?>
          </div></div> <!-- /.section, /#navigation -->
  <?php endif; ?>
