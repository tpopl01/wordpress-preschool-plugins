<?php /* Template Name: Body in box */ ?>
<?php get_header(); ?>
      <div class="row">
        <div class="col-sm-12 blog-main">       
        <div class="box-auto mb-4 shadow-sm">
          <?php if(have_posts()) : ?>
            <?php while(have_posts()) : the_post(); ?>
                 <p><?php the_content(); ?></p>
            <?php endwhile; ?>
        <?php else: ?>
          <p><?php __('No Page Found'); ?></p>
        <?php endif; ?>

        </div>
        </div><!-- /.blog-main -->
</div>
<?php get_footer(); ?>
