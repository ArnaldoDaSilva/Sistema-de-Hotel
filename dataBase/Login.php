<?php
// Conexão com o banco
$host = "localhost";
$user = "root"; // padrão no XAMPP/WAMP
$pass = "";     // geralmente vazio no XAMPP
$db = "sistema_login";

$conn = new mysqli($host, $user, $pass, $db);

// Verifica conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Pega dados do formulário
$email = $_POST['email'];
$senha = md5($_POST['senha']); // mesma criptografia usada no INSERT

// Consulta no banco
$sql = "SELECT * FROM usuarios WHERE email='$email' AND senha='$senha'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();
    
    if ($usuario['role'] == 'funcionario') {
        header("Location: admin.html");
    } else if ($usuario['role'] == 'cliente') {
        header("Location: cliente.html");
    }
} else {
    echo "<p style='color:red;'>Email ou senha incorretos!</p>";
}

$conn->close();
?>
