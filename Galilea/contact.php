<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Galilea</title>
	<link rel="stylesheet" href="css/contact.css">
	<link rel="shortcut icon" href="img/2.png" type="image">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<style>
		@media (min-width: 571px) {
			li a {
				//font-size: 10px;
			}
		}
	</style>
</head>
<body id="home">
	<!--Navigation-->
		<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" id="main-header" >
				<a class="navbar-brand ml-5" href="#home"><span class="brand btn btn-outline-light">Galilea</span></a>
				<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
					aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span></button>
				<div class="collapse navbar-collapse" id="collapsibleNavId">
					<ul class="navbar-nav ml-auto mt-2 mt-lg-0 mr-5">
						<li class="nav-item">
							<a class="nav-link" href="index.html">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="about.html">About</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="security.html">Security</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="fire_safety.html">Fire Safety</a>
                        </li>
                        <li class="nav-item">
								<a class="nav-link" href="home_auto.html">Home automation</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="maintenance.html">Maintenance</a>
						</li>
						<li class="nav-item active">
								<a class="nav-link" href="#home">Contact</a>
						</li>
					</ul>
					
				</div>
			</nav>

  <!--Contact Us-->
  <section id="contact">
      <div class="dark-overlay">
            <div class="container">
                    <div class="row py-5">
                        <div class="col-lg-8 col-md-12 mt-4 p-5">
							<h3 class="text-center text-light">Please fill out the form to contact us</h3>
							<hr class="bg-danger" >
                            <div class="text-center">
                            <?php
/* Feedback form handler*/
// define variables and set to empty values
$formMessage = "";
$phone = "";
$message = "";
$useremail = "";
$username = "";
// set to the email address of the recipient
//$mailto = "galilea@galilea.co.tz" 
$mailto = "galilea@galilea.co.tz";
$subject = "Message from my website";
$uself = 0;
// Set the information received from the form as short variables 
$headersep = (!isset( $uself ) || ($uself == 0)) ? "\r\n" : "\n";
$username = $_POST['username'];
$useremail = $_POST['useremail'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$http_referrer = getenv( "HTTP_REFERER" );
#remove any spaces from beginning and end of email address 
$useremail = trim($useremail);
#Check for permitted email address patterns
$_name = "/^[-!#$%&\'*+\\.\/0-9=?A-Z^_`{|}~]+";
$_host = "([-0-9A-Z]+\.)+";
$_tlds = "([0-9A-Z]){2,4}$/i";

// Has a phone number been entered?
if (!empty($_POST['phone'])) {
//Remove spaces, hyphens, letters and brackets.
$phone = preg_replace('/\D+/', '', ($_POST['phone']));
}

/*
This block of code constructs the e-mail using the variables provided in the feedback form by the user. Note the
full stops after each item; these are very important. The code \n inserts a line break (or Enter) between each item.
The last two lines send the e-mail using the PHP function mail().
*/

if ($username == TRUE || $useremail == TRUE || $phone == TRUE || $message == TRUE) {
//Check whether URLs have been inserted in the comment text area
if (strpos ($message, '://') || strpos($message, 'www') !== false){
    $formMessage = "No url allowed on the message field";
    echo '<p class="alert alert-danger text-danger">'. $formMessage . '</p>';
}

else if (!preg_match($_name."@".$_host.$_tlds,$useremail)) {
    $formMessage = "Invalid email format";
    echo '<p class="alert alert-danger text-danger">'. $formMessage . '</p>';
}

//check that no URLs have been inserted in the username text field
/*
The PHP function strpos() checks whether the URL symbols // and www are present within the string input by
the user. The function actually finds the position of the first occurrence of a string within a string. If URL symbols are
present, an error message is displayed. The function is used to check most of the fields in the form.
*/ 
else if (strpos ($username, '://') || strpos($username, 'www') !== false){
    $formMessage = "No url allowed on the username field";
    echo '<p class="alert alert-danger text-danger">'. $formMessage. '</p>';
}

else if (preg_match( "[\r\n]", $username ) || preg_match( "[\r\n]", $useremail )) {
    $formMessage = "Input incorrect";
    echo '<p class="alert alert-danger text-danger">'. $formMessage . '</p>';
}

//Check that all four essential fields are filled out
else if (empty($username) || empty($useremail) || empty($phone) || empty($message)) {
	$formMessage = "The form is incomplete, please fill in all fields";
	echo '<p id="alert" class="alert alert-danger text-danger">'. $formMessage . '</p>';
}

else {
$messageproper = 
"This message was sent from:\n" .
"$http_referrer\n" .
"------------------------------------------------------------\n" .
"Name of sender: $username\n" .
"Email of sender: $useremail\n" .
"Telephone: $phone\n" .
"------------------------- MESSAGE -------------------------\n\n" .
$message .
"\n\n------------------------------------------------------------\n" ;
mail($mailto, $subject, $messageproper, "From: \"$username\" <$useremail>" );
$formMessage = "Thanks, your message has been successful sent";
echo '<p class="alert alert-success text-success">'. $formMessage . '</p>';
}

}
?>
                            </div>
                            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
                                <div class="form-group">
								<input type="text" name="username" id="username" placeholder="Username" class="form-control" value="<?php if (isset($_POST['username'])) echo $_POST['username']; ?>" required>
                                </div>
                                <div class="form-group">
                                    <input type="email" name="useremail" id="useremail" placeholder="Email address" class="form-control" value="<?php if (isset($_POST['useremail'])) echo $_POST['useremail']; ?>" required>
                                </div>
                                <div class="form-group">
                                    <input type="phone" name="phone" id="phone" placeholder="Phone number" class="form-control" value="<?php if (isset($_POST['phone'])) echo $_POST['phone']; ?>" required>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" name="message" placeholder="Message" id="message" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-outline-success btn-block" value="Send message">
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="card mt-4 px-5 py-4 ml-auto bg-light">
                                <div class="card-body">
                                    <h4>Get reach to us</h4>
                                    <p>Get closer to us as you keep contacting us through the: </p>
          
                                    <h4>Address</h4>
                                    <address>
                                          Galilea EA Limited,
                                          <br>
                                          Block 45A, Ally Hassan Mwinyi Road,
                                          <br>
                                          P. O. Box 2444,
                                          <br>
                                          Dar es Salaam,
                                          <br>
                                          Tanzania.
                                    </address>
          
                                    <h4>Email</h4>
                                    <p>galilea@galilea.co.tz</p>
          
                                    <h4>Phone</h4>
                                    <p>
                                        Tel: +255 788 404 840
                                        <br>
                                        Fax: +255 736 601 525
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
  </section>


  <!--Electronic surveillances-->
  <section class="py-5 bg-light">
	  <h1 class="display-4 text-dark text-center py-5">Electronic surveillance</h1>
	  <div class="container">
		  <div class="row">
			  <div class="col-md-6 col-lg-6 align-self-center order-2">
					<h3>All about Security</h3>
					<p style="line-height: 1.7rem">
                        Design and installation of simple to complex electronic surveillance, access control and management systems.
					</p>    
                    <button class="btn btn-outline-info" data-target="#more" data-toggle="collapse">Read More</button>
                    <p id="more" class="collapse" style="line-height: 1.7rem">
                        <br>
                        Stay well protected and secured from all insecurities by the best electronic security products provided by our company.
                    </p>
			  </div>
			  <div class="col-md-6 col-lg-6 py-3 order-1">
				  <img src="img/dome-camera-2.png" alt="" class="img-fluid">
			  </div>
		  </div>
	  </div>
  </section>
  <!-- Footer -->
  <footer>
		<!-- Footer Links -->
		<div class="container">
			<!-- Grid row-->
			<div class="row text-center d-flex justify-content-center pt-5 mb-3">
				<!-- Grid column -->
				<div class="col-md-2 mb-3">
					<h6 class="text-uppercase font-weight-bold">
						<a id="link"  href="about.html" class="text-muted" style="text-decoration: none;">About us</a>
					</h6>
				</div>
				<!-- Grid column -->
		
				<!-- Grid column -->
				<div class="col-md-2 mb-3">
					<h6 class="text-uppercase font-weight-bold">
						<a id="link"  href="clients.html" class="text-muted" style="text-decoration: none;">Clients</a>
					</h6>
				</div>  
				<!-- Grid column -->
		
				<!-- Grid column -->
				<div class="col-md-2 mb-3">
					<h6 class="text-uppercase font-weight-bold">
						<a id="link"  href="services.html" class="text-muted" style="text-decoration: none;">Services</a>
					</h6>
				</div>
				<!-- Grid column -->
		  
				<!-- Grid column -->
				<div class="col-md-2 mb-3">
					<h6 class="text-uppercase font-weight-bold" id="main-header">
						<a id="link" href="#home" class="text-muted" style="text-decoration: none;">Contacts</a>
					</h6>
				</div>
				<!-- Grid column -->
			  </div>
  
			  <!-- Grid row-->
			  <hr class="rgba-white-light" style="margin: 0 15%;">
		  
			  <!-- Grid row-->
			  <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
				  <!-- Grid column -->
				  <div class="col-md-8 col-12 mt-5">
					  <p style="line-height: 1.7rem">
						  We are dynamic company within fire protection and security industry.
						  We provide internationally compliant solutions and hardware to provide 24/7 protection of life safety and high value resources.
						  We possess expertise within the fire and security sectors including a pool of experienced high skilled technicians and engineers, qualified to carry out design, installation, project management and auditing of fire safety and integrated security systems.
					  </p>
				  </div>
				  <!-- Grid column -->
			 </div>
  
			 <!-- Grid row-->
			 <hr class="clearfix d-md-none rgba-white-light" style="margin: 10% 15% 5%;">
		  
			 <!-- Grid row-->
			 <div class="row pb-3">
				 <!-- Grid column -->
				 <div class="col-md-12">
					 <div class="pt-3 text-center">
						  <!-- Facebook -->
						  <a class="fb-ic" href="http://www.facebook.com" style="text-decoration: none;">
							  <i class="fab fa-facebook-f fa-lg white-text mr-4" data-toggle="tooltip" data-placement="left" title="Follow us on facebook"> </i>
						  </a>
						  <!-- Twitter -->
						  <a class="tw-ic" href="http://www.twitter.com" style="text-decoration: none;">
							  <i class="fab fa-twitter fa-lg white-text mr-4" data-toggle="tooltip" data-placement="top" title="Follow us on twitter"> </i>
						  </a>
						  <!-- Google +-->
						  <a class="gplus-ic" href="http://www.google.com" style="text-decoration: none;">
							  <i class="fab fa-google-plus-g fa-lg white-text mr-4" data-toggle="tooltip" data-placement="left" title="Follow us on google"> </i>
						  </a>
						  <!--Linkedin -->
						  <a class="li-ic" href="http://www.linkedin.com" style="text-decoration: none;">
							  <i class="fab fa-linkedin-in fa-lg white-text mr-4" data-toggle="tooltip" data-placement="right" title="Follow us on linkedin"> </i>
						  </a>
						  <!--Instagram-->
						  <a class="ins-ic" href="http://www.instagram.com" style="text-decoration: none;">
							  <i class="fab fa-instagram fa-lg white-text mr-4" data-toggle="tooltip" data-placement="top" title="Follow us on instagram"> </i>
						  </a>
						  <!--Pinterest-->
						  <a class="pin-ic" href="http://www.pinterest.com" style="text-decoration: none;">
							  <i class="fab fa-pinterest fa-lg white-text" data-toggle="tooltip" data-placement="right" title="Follow us on pinterest"> </i>
						  </a>
					  </div>
				 </div>
				 <!-- Grid column -->
			  </div>
			  <!-- Grid row-->
		  </div>
		  <!-- Footer Links -->
		  
		  <!-- Copyright -->
		  <div class="text-center py-3">
			  Copyright &copy <span id="year"></span> Galilea EA Limited</p>
		  </div>
		  <!-- Copyright -->
  
		  <!--Go top-->
		  <div class="bg-light text-right py-3">
			  <a href="#home" id="Top">
				  <i class="fas fa-angle-up fa-lg p-3 mr-4" data-toggle="tooltip" data-placement="top" title="Go to Top" id="go-top">	
				  </i>
			  </a>
		  </div>
		  <!--Go top-->
	</footer>
	<!-- Footer -->


    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	<script>
	 // Get the current year for the copyright
	 $('#year').text(new Date().getFullYear());

	// Init tooltip
    $('[data-toggle="tooltip"]').tooltip();

	// Add smooth scrolling
	$('#main-header a, #Top').on('click', function(e) {
      // check for hash value
      if (this.hash !== '') {
        // Prevent default behaviour of an a tag
        e.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top 
          }, 900, function() {
          // Add hash to URL after scroll
          window.location.hash = hash;
          });
        }
     });
    // Set a textarea value
	document.getElementById('message').value = "<?php if (isset($_POST['message'])) echo $_POST['message']; ?>";
	
	// onload function to display none the div with id of alert
	function noDisplay() {
		document.getElementById('alert').style.display = "none";
	}

	$(document),ready(function(){
		$(window).load(function() {
		//$('#ale').fadeIn();
		document.getElementById('alert').style.display = "none";
	});
	});

	
	</script>
</body>
</html>