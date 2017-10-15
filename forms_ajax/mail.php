<?php

$recepient = "helenalonskaya@gmail.com";
$sitename = "Название сайта";   //заголовок письма который будет приходить нам на почту

$name = trim($_POST["name"]);   //берем содержимые поля name
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
