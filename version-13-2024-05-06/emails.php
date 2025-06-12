<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if email and message fields are not empty
    if (!empty($_POST['email']) && !empty($_POST['message'])) {
        // Assign the form data to variables
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Process the data, like sending an email or saving it to a database
        // For demonstration, let's just echo the data
        echo "Email: " . $email . "<br>";
        echo "Message: " . $message;

        // Here, you could use the PHP mail() function to send the email.
        // mail(to, subject, message);
    } else {
        // Form data is missing
        echo "Please fill in all required fields.";
    }
} else {
    // Form not submitted
    echo "Form not submitted";
}
?>
