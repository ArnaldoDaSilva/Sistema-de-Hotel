<?php
// Recebe dados JSON
$dados = json_decode(file_get_contents("php://input"), true);

if ($dados) {
    $email = $dados["email"];
    $quarto = $dados["quarto"];
    $checkin = $dados["checkin"];
    $checkout = $dados["checkout"];
    $pessoa = $dados["pessoa"];

    // Nome do arquivo Excel/CSV
    $arquivo = "dados_de_conta.csv";

    // Se o arquivo não existir, cria com cabeçalho
    if (!file_exists($arquivo)) {
        $cabecalho = "Email,Quarto,Checkin,Checkout,Pessoa\n";
        file_put_contents($arquivo, $cabecalho);
    }

    // Salva os dados
    $linha = "$email,$quarto,$checkin,$checkout,$pessoa\n";
    file_put_contents($arquivo, $linha, FILE_APPEND);

    echo json_encode(["status" => "sucesso", "msg" => "Dados armazenados com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "msg" => "Nenhum dado recebido!"]);
}
?>
