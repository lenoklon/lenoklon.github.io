<?php

$recepient = "mail@el.de";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$UrName = trim($_GET["UrName"]);
$mail = trim($_GET["mail"]);
$phone = trim($_GET["phone"]);
$text = trim($_GET["text"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");