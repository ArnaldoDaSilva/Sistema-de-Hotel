<?php
header("Content-Type: application/json");
include "conexao.php";

$acao = $_GET['acao'] ?? '';

if($acao == "listar"){
    $sql = $pdo->query("SELECT * FROM hospede");
    echo json_encode($sql->fetchAll(PDO::FETCH_ASSOC));
}

if($acao == "adicionar"){
    $data = json_decode(file_get_contents("php://input"), true);
    $stmt = $pdo->prepare("INSERT INTO hospede (nome,email,telefone,documento) VALUES (?,?,?,?)");
    $stmt->execute([$data['nome'],$data['email'],$data['telefone'],$data['documento']]);
    echo json_encode(["status"=>"ok","msg"=>"Hóspede cadastrado"]);
}

if($acao == "excluir"){
    $id = $_GET['id'];
    $pdo->prepare("DELETE FROM hospede WHERE id=?")->execute([$id]);
    echo json_encode(["status"=>"ok","msg"=>"Hóspede excluído"]);
}
?>
