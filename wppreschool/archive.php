<?php get_header(); ?>
<div id="setModal" class="container">

  <!--Title-->
  <div class="jumbotron p-4 p-md-5 text-white rounded bg-primary">
   <div class="col-md-6 px-0">
     <h1 class="display-4 text-white">Information</h1>
     <p class="lead my-3">Here you will find all the latest information about Salway Christian Pre-School</p>
   </div>
 </div>
 <!--Sidebar-->

   <?php if(is_active_sidebar('sidebar')): ?>
    <div class="row mb-2">
     <div class="col-sm-12 blog-main">
       <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative bg-light text-center">
         <div class="col-sm-12 p-2">
            <h4>Categories</h4>
          </div>
          <?php
            $categories = get_categories(array(
              'order'               => 'ASC',
              'orderby'             => 'name',
              'show_option_all' => __( 'All' ),
              'show_option_none'    => __( 'No categories' ),
              'hide_empty'      => false,
            ));
            foreach ($categories as $category){
              echo '<div class="col-sm-2 border-right border-left mb-2"><a class="p-2 text-muted" href="' . get_category_link($category->term_id) . '">' . $category->cat_name . '</a></div>';
            }
          ?>
      </div>
          </div>
   </div>
 <?php endif; ?>

<!--Posts-->
      <div class="row mb-2">

        <?php if(have_posts()) : ?>
            <?php while(have_posts()) : the_post(); ?>
              <?php get_template_part('content', get_post_format()); ?>
        <?php endwhile; ?>
        <?php else: ?>
          <p><?php __('No News Found'); ?></p>
        <?php endif; ?>

      </div>
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light text-center">
            <div class="col-sm-12 p-2">
              <h4>Archives</h4>
            </div>
            <div class="col-sm-12">
              <div class="archives col-sm-12">
                <?php
                  wp_get_archives('type=yearly');
                ?>
              </div>
            </div>
          </div>
      </div><!-- /.container -->


<?php get_footer(); ?>