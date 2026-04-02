<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['Nome Completo'];
    $email = $_POST['Email'];

    $to = "as3904844@gmail.com"; // <-- coloque seu email aqui
    $subject = "Nova Inscrição no Site";
    $body = "Nome: $nome\nEmail: $email";
    $headers = "From: no-reply@seudominio.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "✅ Inscrição enviada com sucesso!";
    } else {
        echo "❌ Erro ao enviar inscrição.";
    }
}
?>
