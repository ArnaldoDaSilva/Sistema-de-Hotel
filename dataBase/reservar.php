<?php
include 'conexao.php';

// Exemplo de inserção na tabela Reserva
$quarto   = $_POST['quarto'];
$check_in = $_POST['check_in'];
$check_out = $_POST['check_out'];
$hospedes = $_POST['hospedes'];

// Data/hora atual
$created_at = date("Y-m-d H:i:s");

// SQL para inserir dados
$sql = "INSERT INTO reservaonline (quarto, check_in, check_out, hospedes, created_at)
        VALUES ('$quarto', '$check_in', '$check_out', '$hospedes', '$created_at')";

if ($conn->query($sql) === TRUE) {
    echo "Reserva feita com sucesso!";
} else {
    echo "Erro ao registrar reserva: " . $conn->error;
}

$conn->close();
?>