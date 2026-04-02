<?php
$host='localhost';
$user='root';
$pass='';
$db='sistemahotel';
$port=3306;
$conn=mysqli_connect($host, $user, $pass, $db, $port);
if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
}
mysqli_set_charset($conn, "utf8mb4");
// Your database operations go here
$nome=isset($_POST['nome']) ? trim( $_POST['nome'] ) : '';
$email=isset($_POST['email']) ? trim( $_POST['email'] ) : '';
$mengem=isset($_POST['mensagem']) ? trim( $_POST['mensagem'] ) : '';

if(empty($nome) || empty($email)){
    die ("Por favor, preencha todos os campos.");
    exit;
}
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    die("Por favor, insira um email válido.");
    exit;
}
$sql="INSERT INTO contacto (nome, email, mensagem) VALUES (?, ?, ?)";
$stmt=mysqli_prepare($conn, $sql);
if(!$stmt){
    die("Erro na preparação da consulta: " . mysqli_error($conn));
}
mysqli_stmt_bind_param($stmt, "sss", $nome, $email, $mengem);
if(mysqli_stmt_execute($stmt)){
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro ao enviar mensagem: " . mysqli_stmt_error($stmt);
}
mysqli_stmt_close($stmt);
mysqli_close($conn);

?>