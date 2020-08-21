
<!-- The Modal -->
<div id="myModal" class="modal modal-dialog-centered">

 <!-- The Close Button -->
 <span class="close">&times;</span>

 <!-- Modal Content (The Image) -->
 <img class="modal-content" id="img01">
 <!-- Next/previous controls -->
 <a class="prev" onclick="prev()">&#10094;</a>
 <a class="next" onclick="next()">&#10095;</a>
 <!-- Modal Caption (Image Text) -->
 <div id="caption"></div>
</div>

<?php if(!is_single()) : ?>
  <div class="col-sm-12 blog-main">
    <div class="row no-gutters border rounded overflow-hidden flex-md-row shadow-sm position-relative mb-4">
      <div class="col pl-3 pr-3 pt-3 pb-0 d-flex flex-column position-static post-gallery">
        <h4 class="mb-0">
          <a class="text-muted" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
      </h4>
          <div class="post-gallery">
        <?php the_content(); ?></div>
      </div>
    </div>
  </div>
<?php endif; ?>

<?php if(is_single()) : ?>
  <div class="container">
  <div class="jumbotron p-4 p-md-5 text-white rounded bg-primary">
   <div class="col-md-8 px-0">
     <h1 class="display-4 text-white"><?php the_title(); ?></h1>
     <p class="lead my-3">
       <?php the_date(); ?> by <a class="text-white" href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>"><?php the_author(); ?></a>
     </p>
   </div>
 </div>

 <!-- Modal -->
 <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="caption">Modal title</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
        <img class="modal-content" id="modal-img">
       </div>
     </div>
   </div>
 </div>

 <div class="blog-post">
   <section class="boxes">
     <div class="row">
       <div class="col-lg-12">
         <div class="box-auto gallery">
            <?php the_content(); ?>
        </div>
      </div>
      </div>
  </section>
</div>
</div>
<?php endif; ?>
