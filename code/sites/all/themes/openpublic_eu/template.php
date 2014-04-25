<?php

function openpublic_eu_preprocess_html(&$variables) {
  // Add conditional stylesheets for IE
  //drupal_add_css(path_to_theme() . '/css/ie8.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'lte IE 8', '!IE' => FALSE), 'preprocess' => FALSE));
  //drupal_add_css(path_to_theme() . '/css/ie7.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'lte IE 7', '!IE' => FALSE), 'preprocess' => FALSE));
  //drupal_add_css(path_to_theme() . '/css/ie6.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'lte IE 6', '!IE' => FALSE), 'preprocess' => FALSE));  
}

/*
 * implement hook_preprocess_node
 *
 * we are turning off number of reads
 */
function openpublic_eu_preprocess_node(&$variables) {
  unset($variables['content']['links']['statistics']);
}

function openpublic_eu_preprocess_page(&$variables) {

  // we have two cache for the utility menu one if logged in one if logged out.
  // also we change the name of the login if we are already logged in.
  global $user;
  
  $menu_utility = menu_navigation_links('user-menu', 0);
  $variables['user_menu'] = theme(
         'links',
         array(
           'links' => $menu_utility,
           'attributes' => array(
             'id' => 'user-menu',
             'class' => array('links', 'clearfix'),
           ),
           'heading' => array(
            'text' => t('User menu'),
            'level' => 'h2',
             'class' => array('element-invisible'),
           ),
        )
      );
  
  if(function_exists('defaultcontent_get_node') &&
     ($node = defaultcontent_get_node("email_update")) ) {
    $node = node_view($node);
    $variables['subscribe_form'] = $node['webform'];
  }
}


