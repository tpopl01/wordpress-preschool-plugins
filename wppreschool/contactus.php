<?php /* Template Name: Contact Us */ ?>

<?php
 
  //response generation function
  $response = "";
 
  //function to generate response
  function my_contact_form_generate_response($type, $message){
 
    global $response;
 
    if($type == "success") $response = "<div class='success'>{$message}</div>";
    else $response = "<div class='error'>{$message}</div>";
 
  }
  //response messages
    $missing_content = "Please supply all information.";
    $email_invalid   = "Email Address Invalid.";
    $message_unsent  = "Message was not sent. Try Again.";
    $message_sent    = "Thanks! Your message has been sent.";
    
    //user posted variables
    $name = $_POST['message_name'];
    $email = $_POST['message_email'];
    $message = $_POST['message_text'];
    
    //php mailer variables
    $to = get_option('admin_email');
    $subject = "Someone sent a message from ".get_bloginfo('name');
    $headers = 'From: '. $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n";

    
    if (isset($_POST['submitted'])) {
        //validate email
        if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            my_contact_form_generate_response("error", $email_invalid);
        else //email is valid
        {
            //validate presence of name and message
            if(empty($name) || empty($message)){
                my_contact_form_generate_response("error", $missing_content);
            }
            else //ready to go!
            {
                $sent = wp_mail($to, $subject, strip_tags($message) . " From: " . $email);
                if($sent)
                { 
                    my_contact_form_generate_response("success", $message_sent);
                } //message sent!
                else my_contact_form_generate_response("error", $message_unsent); //message wasn't sent
            }
        }
    }
?>

<?php get_header(); ?>
<div class="container">
      <div class="row">
        <div class="col-sm-12 blog-main">
          <?php if(have_posts()) : ?>
            <?php while(have_posts()) : the_post(); ?>

            <?php the_content(); ?>

            <!-- Contact Form -->
                <div class="row">
                    <div class="col mb-3">
                        <div class="card h-100">
                            <div class="card-header bg-primary text-white"><i class="fa fa-envelope"></i> Contact us.
                            </div>
                            <div class="card-body">
                                <div id="respond">
                                <?php echo $response; ?>
                                    <form action="<?php the_permalink(); ?>" method="post">
                                        <div class="form-group">
                                            <label for="name">Name: <span>*</span></label>
                                            <input type="text" name="message_name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required
                                            value="<?php echo esc_attr($_POST['message_name']); ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="message_email">Email address: <span>*</span></label>
                                            <input type="email" name="message_email" value="<?php echo esc_attr($_POST['message_email']); ?>" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="message_text">Message: <span>*</span></label>
                                            <textarea type="text" name="message_text" class="form-control" id="message" rows="6" required><?php echo esc_textarea($_POST['message_text']); ?></textarea>
                                        </div>
                                        <div class="mx-auto">
                                        <button name="submitted" type="submit" class="btn btn-primary text-right">Submit</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4">
                        <div class="card bg-light mb-3">
                            <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-home"></i> Address</div>
                            <div class="card-body">
                                <?php echo get_theme_mod('address_text', 'Salway Evangelical Church. Forest Approach. Woodford Green. Essex. IG8 9BW.'); ?>
                            </div>
                        </div>
                        <div class="card bg-light mb-3">
                            <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-envelope"></i> Email</div>
                            <div class="card-body">
                                <?php echo get_theme_mod('email_text', 'salwaychristian.preschool@gmail.com for general enquiries. salwaypreschool@gmail.com to go on the waiting list.'); ?>
                            </div>
                        </div>
                        <div class="card bg-light mb-3">
                            <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-phone"></i> Telephone</div>
                            <div class="card-body">
                                <?php echo get_theme_mod('phone_text', '020-8505-9619 (a.m. only)'); ?>
                            </div>
                        </div>
                    </div>
                </div>



          </div><!-- /.blog-post -->

        <?php endwhile; ?>
        <?php else: ?>
          <p><?php __('No Page Found'); ?></p>
        <?php endif; ?>

        </div><!-- /.blog-main -->
</div>
</div>
<br>
<?php get_footer(); ?>
