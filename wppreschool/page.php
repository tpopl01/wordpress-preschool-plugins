<?php get_header(); ?>
<div id="setModal" class="container">
      <div class="row">

        <div class="col-sm-12 blog-main">
          <?php if(have_posts()) : ?>
            <?php while(have_posts()) : the_post(); ?>
             <div class="blog-post">
            <?php the_content(); ?>
          </div><!-- /.blog-post -->

        <?php endwhile; ?>
        <?php else: ?>
          <p><?php __('No Page Found'); ?></p>
        <?php endif; ?>

        </div><!-- /.blog-main -->
</div>

   <!-- The Modal -->
<div id="myModal" class="modal">
  <div class="modal-dialog-centered" onclick="closeModal()">
   <!-- The Close Button -->
   <span class="close">&times;</span>

   <!-- Modal Content (The Image) -->
   <div class="w-100 justify-content-center align-items-center">
   <img class="modal-content" id="img01">
   <!-- Modal Caption (Image Text) -->
   <div id="caption" onclick="closeModal()"></div>
  </div>
  </div>
 <!-- Next/previous controls -->
 <a class="prev" onclick="prev()">&#10094;</a>
 <a class="next" onclick="next()">&#10095;</a>
</div>
</div><!-- /.container -->


<?php get_footer(); ?>
