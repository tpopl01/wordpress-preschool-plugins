<?php if(is_single()) : ?>
  <div class="container">
  <!--Title-->
  <div class="jumbotron p-4 p-md-5 text-white rounded bg-primary">
   <div class="col-md-8 px-0">
     <h1 class="display-4 text-white"><?php the_title(); ?></h1>
     <p class="lead my-3">
       <?php the_date(); ?> by <a class="text-white" href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>"><?php the_author(); ?></a>
     </p>
   </div>
 </div>
<div class="blog-post">
    <section class="boxes">
        <div class="row">
          <div class="col-lg-12">
              <?php if(has_post_thumbnail()): ?>
                <div class="post-thumb">
                <?php the_post_thumbnail(); ?>
              </div>
                <?php endif; ?>
              <?php the_content(); ?>
          </div>
      </div>
    </section>
    <?php comments_template(); ?>
</div><!-- /.blog-post -->
</div>
<?php endif; ?>

<?php if(!is_single()) : ?>
  <div class="col-sm-6 blog-main">
    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative pb-0 mr-0 feed-box">
      <div class="col pl-3 pr-3 pt-3 pb-0 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">
          <?php
          $categories = get_the_category();
          foreach ($categories as $category){
            echo '<a class="text-muted" href="' . get_category_link($category->term_id) . '">' . $category->cat_name . ' </a>';
          }
          ?>
        </strong>
        <h4 class="mb-0">
          <a class="text-muted" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
      </h4>
        <div class="mb-1 text-muted">
          <?php the_date(); ?>
          by <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>">
            <?php the_author(); ?>
          </a>
        </div>
        <?php if(!has_post_thumbnail()): ?>
        <p class="m-0 p-0"><?php the_excerpt(); ?></p>
    <?php endif; ?>
    <?php if(has_post_thumbnail()): ?>
    <p class="m-0 p-0"><?php the_excerpt(); ?></p>
    <?php endif; ?>
      </div>
      <?php if(has_post_thumbnail()): ?>
      <div class="col-auto d-none d-lg-block m-0 p-0">
        <div class="thumb">
          <div class="overflow-hidden mb-0 h-100 thumb-parent"><?php the_post_thumbnail('post-thumbnail'); ?></div>
        </div>
        </div>
    <?php endif; ?>
  </div>
</div>
<?php endif; ?>
