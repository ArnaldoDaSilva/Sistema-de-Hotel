<?php
// Dados da conexão com o banco MySQL
$host = "localhost";        // Servidor do banco
$dbname = "hotel_db";       // Nome da base de dados
$user = "root";             // Usuário do banco
$password = "";             // Senha (deixe vazio se não tiver)

// Cria a conexão usando PDO
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ Conectado ao banco com sucesso!";
} catch (PDOException $e) {
    echo "❌ Erro de conexão: " . $e->getMessage();
    exit;
}
?>
