<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $phone   = $_POST['phone'];
    $date    = $_POST['date'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    $to = "ruthaliyah83@gmail.com"; // <-- Your email
    $subject = "New Appointment Booking From $name";

    $body = "
        New Appointment Booking:

        Name: $name
        Email: $email
        Phone: $phone
        Service: $service
        Date: $date
        Message: $message
    ";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>Appointment Sent Successfully!</h2>";
        echo "<p>Thank you, $name. Ruth will contact you shortly.</p>";
    } else {
        echo "<h2>Failed to send appointment.</h2>";
        echo "<p>Please try again later.</p>";
    }
}
?>
