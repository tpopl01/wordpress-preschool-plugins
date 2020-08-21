<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <title>
      <?php bloginfo('name'); ?> |
      <?php is_front_page() ? bloginfo('description') : wp_title(); ?>
    </title>
    <!-- Bootstrap core CSS -->
    <link href="<?php bloginfo('template_url'); ?>/css/bootstrap.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
    <?php wp_head(); ?>
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="<?php echo home_url(); ?>"><img width="40px" height="40px" src="<?php echo get_bloginfo('template_url').'/img/preschool-logo-circle.png'; ?>"></a>

      <div id="navb" class="navbar-collapse collapse">
          <?php
            wp_nav_menu( array(
              'menu'            => 'primary',
              'theme_location'  => 'primary',
              'depth'           => 2, // 1 = no dropdowns, 2 = with dropdowns.
              'container'       => 'li',
              'container_class' => 'collapse navbar-collapse',
              'container_id'    => 'bs-example-navbar-collapse-1',
              'menu_class'      => 'navbar-nav mr-auto',
              'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
              'walker'          => new WP_Bootstrap_Navwalker(),
            ) );
            ?>
      </div>
      <?php if(get_theme_mod('facebook_link', '')):  ?>
        <a class="text-muted" href="<?php echo get_theme_mod('facebook_link', ''); ?>"><div class="nav-icon"><i class="fa fa-facebook-official"></i></div></a>
      <?php endif; ?>
      <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
      <span class="navbar-toggler-icon"></span>
    </button>
    </nav>

    
