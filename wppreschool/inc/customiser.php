<?php
  function wpb_customize_register($wp_customize){
    // Showcase Section
    $wp_customize->add_section('showcase', array(
      'title'   => __('Showcase', 'wppreschool'),
      'description' => sprintf(__('Options for showcase','wppreschool')),
      'priority'    => 130
    ));

    $wp_customize->add_setting('showcase_image', array(
      'default'   => get_bloginfo('template_directory').'/img/showcase.jpg',
      'type'      => 'theme_mod'
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'showcase_image', array(
      'label'   => __('Showcase Image', 'wppreschool'),
      'section' => 'showcase',
      'settings' => 'showcase_image',
      'priority'  => 1
    )));

    $wp_customize->add_setting('showcase_image_1', array(
      'default'   => get_bloginfo('template_directory').'/img/showcase-1.jpg',
      'type'      => 'theme_mod'
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'showcase_image_1', array(
      'label'   => __('Showcase Image 1', 'wppreschool'),
      'section' => 'showcase',
      'settings' => 'showcase_image_1',
      'priority'  => 2
    )));

    $wp_customize->add_setting('showcase_image_2', array(
      'default'   => get_bloginfo('template_directory').'/img/showcase-2.jpg',
      'type'      => 'theme_mod'
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'showcase_image_2', array(
      'label'   => __('Showcase Image 2', 'wppreschool'),
      'section' => 'showcase',
      'settings' => 'showcase_image_2',
      'priority'  => 3
    )));

    
    $wp_customize->add_setting('showcase_heading', array(
      'default'   => _x('Custom Bootstrap Wordpress Theme', 'wppreschool'),
      'type'      => 'theme_mod'
    ));

    $wp_customize->add_control('showcase_heading', array(
      'label'   => __('Heading', 'wppreschool'),
      'section' => 'showcase',
      'priority'  => 4
    ));

    $wp_customize->add_setting('showcase_text', array(
      'default'   => _x('Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam', 'wppreschool'),
      'type'      => 'theme_mod'
    ));

    $wp_customize->add_control('showcase_text', array(
      'label'   => __('Text', 'wppreschool'),
      'section' => 'showcase',
      'priority'  => 5
    ));

    $wp_customize->add_setting('btn_url', array(
      'default'   => _x('http://test.com', 'wppreschool'),
      'type'      => 'theme_mod'
    ));

    $wp_customize->add_control('btn_url', array(
      'label'   => __('Button URL', 'wppreschool'),
      'section' => 'showcase',
      'priority'  => 6
    ));

    $wp_customize->add_setting('btn_text', array(
      'default'   => _x('Read More', 'wppreschool'),
      'type'      => 'theme_mod'
    ));

    $wp_customize->add_control('btn_text', array(
      'label'   => __('Button Text', 'wppreschool'),
      'section' => 'showcase',
      'priority'  => 7
    ));

    
    $wp_customize->add_setting('email_text', array(
      'default'   => _x('example@gmail.com', 'wppreschool'),
      'type'      => 'theme_mod'
    ));
    $wp_customize->add_control('email_text', array(
      'label'   => __('Email', 'wppreschool'),
      'section' => 'showcase',
      'priority'  => 8
    ));   

    $wp_customize->add_setting('address_text', array(
      'default'   => _x('Coming soon', 'wppreschool'),
      'type'      => 'theme_mod'
    ));
    $wp_customize->add_control('address_text', array(
      'label'   => __('Address', 'wppreschool'),
      'section' => 'showcase',
      'priority'  => 9
    ));

    $wp_customize->add_setting('phone_text', array(
      'default'   => _x('Coming soon', 'wppreschool'),
      'type'      => 'theme_mod'
    ));
    $wp_customize->add_control('phone_text', array(
      'label'   => __('Phone', 'wppreschool'),
      'section' => 'showcase',
      'priority'  => 10
    ));

    $wp_customize->add_setting('facebook_link', array(
      'default'   => _x('', 'wppreschool'),
      'type'      => 'theme_mod'
    ));
    $wp_customize->add_control('facebook_link', array(
      'label'   => __('Facebook Link', 'wppreschool'),
      'section' => 'showcase',
      'priority'  => 11
    ));
  }

  add_action('customize_register', 'wpb_customize_register');
