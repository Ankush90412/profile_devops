<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect form data
    $rawData = file_get_contents("php://input");
    $data = json_decode($rawData, true);

    if (!$data) {
        echo json_encode(["success" => false, "message" => "Invalid JSON payload."]);
        exit;
    }

    // Process data
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);

    // Email addresses
    $owner_email = "ankush90412@gmail.com"; // Replace with owner's email
    $subject_to_owner = "New Contact Form Submission";
    $subject_to_user = "Thank you for contacting us!";

    // Email to owner
    $owner_message = "You received a new message:\n\n";
    $owner_message .= "Name: $name\n";
    $owner_message .= "Email: $email\n";
    $owner_message .= "Message: $message\n";

    // Email to user
    $user_message = "Hello $name,\n\n";
    $user_message .= "Thank you for reaching out. Here is a copy of your message:\n\n";
    $user_message .= "$message\n\n";
    $user_message .= "We will get back to you shortly!\n\n";
    $user_message .= "Best regards,\nYour Team";

    // Headers
    $headers = "From: no-reply@example.com\r\n"; // Replace with your domain email

    // Send emails
    if (mail($owner_email, $subject_to_owner, $owner_message, $headers) &&
        mail($email, $subject_to_user, $user_message, $headers)) {
            echo json_encode(["success" => true, "message" => "Emails sent successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Email not sent."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
 
}
?>
