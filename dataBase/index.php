<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Dados a serem inseridos
$nome = "Nome do Hotel";
$endereco = "Endereço do Hotel";
$telefone = "Telefone do Hotel";

// Query SQL para inserir os dados
$sql = "INSERT INTO hoteis (nome, endereco, telefone) VALUES ('$nome', '$endereco', '$telefone')";

if ($conn->query($sql) === TRUE) {
    echo "Novo registro criado com sucesso";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>