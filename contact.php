<?php 
$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
 
$to = 'helpshagor@gmail.com';
$subject = 'the subject '.$subject;
$message = 'FROM: '.$name.'  Email: '.$email.'  Phone: '.$phone.'  Subject: '.$subject.'  Message: '.$message;
$headers = 'From:'. $email . "\r\n";
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
 // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Your email was sent!"; // success message
    ?>
 <script>
     setTimeout(function() {
         window.location.href = "http://shagor.info/html/discovery/contact.html";
     }, 1000);
 </script>
<?php
}else{
echo "Invalid Email!";
}

 ?>
