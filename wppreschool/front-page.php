<?php get_header(); ?>

    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="1000000">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner carousel-inner-front-page">
        <div class="carousel-item text-center active carousel-item-front-page">
          <img class="bd-placeholder-img" src="<?php echo get_theme_mod('showcase_image', get_bloginfo('template_url').'/img/showcase.jpg'); ?>">

        </div>
        <div class="carousel-item text-center carousel-item-front-page">
            <img class="bd-placeholder-img" src="<?php echo get_theme_mod('showcase_image_1', get_bloginfo('template_url').'/img/showcase-1.jpg'); ?>">
          </div>
        <div class="carousel-item text-center carousel-item-front-page">
          <img class="bd-placeholder-img" src="<?php echo get_theme_mod('showcase_image_2', get_bloginfo('template_url').'/img/showcase-2.jpg'); ?>">
        </div>
        <div class="carousel-caption cap-1 d-flex justify-content-center">
          <div class="cap-2">
            <h1 class="mt-2 mb-2 ml-5 mr-5 main-header">Welcome to <?php echo get_theme_mod('showcase_heading', 'Salway Christian Pre-school'); ?></h1>
            <p class="mt-2 mb-2 ml-5 mr-5 main-desc"><?php bloginfo('description'); ?></p>
          </div> 
          </div> 
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
</div>
    <div class="container head">
    <div class="p-4 p-md-5 text-white rounded main-block">
   <div class="col-md-12 px-0"> 
     <h1 class="display-4 text-white">Welcome to <?php echo get_theme_mod('showcase_heading', 'Salway Christian Pre-school'); ?></h1>
     <p class="lead my-3"><?php bloginfo('description'); ?></p>
   </div>
 </div>
 <hr>
 </div>
 <br>

    <div class="container marketing">
    <?php if(have_posts()) : ?>
            <?php while(have_posts()) : the_post(); ?>
                <?php the_content(); ?>
                <?php endwhile; ?>
        <?php else: ?>
          <p><?php __('No Page Found'); ?></p>
        <?php endif; ?>
        </div>

<!-- Footer -->
<?php get_footer(); ?>
