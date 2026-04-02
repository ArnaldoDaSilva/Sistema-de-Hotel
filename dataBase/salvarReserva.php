<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type");

// RECEBER O JSON
$dados = json_decode(file_get_contents("php://input"), true);

if (!$dados) {
    echo json_encode(["erro" => "Nenhum dado recebido"]);
    exit;
}

// CONECTAR AO BANCO
$conn = new mysqli("localhost", "root", "", "hotel");

if ($conn->connect_error) {
    die(json_encode(["erro" => "Falha na conexão: " . $conn->connect_error]));
}

// PREPARAR INSERT
$stmt = $conn->prepare("
    INSERT INTO reservas (id, email, Bi, quarto, preco, checkin, checkout, status, pessoa, cliente)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
");

$stmt->bind_param(
    "isssdsssis",
    $dados["id"],
    $dados["email"],
    $dados["Bi"],
    $dados["quarto"],
    $dados["preco"],
    $dados["checkin"],
    $dados["checkout"],
    $dados["status"],
    $dados["pessoa"],
    $dados["cliente"]
);

if ($stmt->execute()) {
    echo json_encode(["sucesso" => "Reserva salva com sucesso"]);
} else {
    echo json_encode(["erro" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
