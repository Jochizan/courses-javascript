<?php

if (isset($_POST)) {
  error_reporting(0);

  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $comments = $_POST['comments'];
  $domain = $_POST['HTTP_POST'];
  $to = 'remnyachizot@gmail.com';
  $subject = "Contacto desde el formulario del sitio $domain: $subject";
  $message = "
    <p>
      Datos enviados desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
      <li>Nombre: <b>$name</b></li>
      <li>Email: <b>$email</b></li>
      <li>Asunto: <b>$subject</b></li>
      <li>Comentarios: <b>$comments</b></li>
    </ul>
  ";
  $headers = 'MIME-Version: 1.0\r\n' . 'content-type: text/html; charset=utf-8\r\n' . "From: Envío Automático No Responder <no-reply@$domain>";

  $send_mail = mail($to, $subject, $message, $headers);

  if ($send_mail) {
    $res = [
      'err' => false,
      'message' => 'Tus datos han sido enviados.'
    ];
  } else {
    $res = [
      'err' => true,
      'message' => 'Error al enviar tus datos. Intenta nuevamente.'
    ];
  }

  header('content-type: application/json');
  // header('access-control-allow-origin: *');
  // Con esta cabecera especificamos las urls que pueden mandarnos peticiones
  header('access-control-allow-origin: http://127.0.0.1:5500');
  echo json_encode($res);
  exit;
}
