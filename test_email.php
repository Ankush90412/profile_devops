<?php
// Replace with your email address
$to = "ankush90412@gmail.com"; 
$subject = "Test Mail";
$message = "This is a test email sent from the PHP mail() function.";
$headers = "From: no-reply@example.com"; // Replace with a valid domain email if possible

if (mail($to, $subject, $message, $headers)) {
    echo "Mail sent successfully to $to";
} else {
    echo "Failed to send mail. Check your server's mail configuration.";
}
?>
