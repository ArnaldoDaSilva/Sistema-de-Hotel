<?php
header("Content-Type: application/json");
include "conexao.php";

$acao = $_GET['acao'] ?? '';

if($acao == "listar") {
    $stmt = $pdo->query("SELECT * FROM quartos ORDER BY numero");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}

if($acao == "adicionar") {
    $data = json_decode(file_get_contents("php://input"), true);
    $stmt = $pdo->prepare("INSERT INTO quartos (numero, tipo, preco, status, imagem) VALUES (?,?,?,?,?)");
    $stmt->execute([
        $data['numero'],
        $data['tipo'],
        $data['preco'],
        $data['status'],
        $data['imagem']
    ]);
    echo json_encode(["status"=>"ok","msg"=>"Quarto adicionado"]);
    exit;
}
?>
