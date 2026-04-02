 const userData = localStorage.getItem("usuarioLogado");
   const qrt=JSON.parse(localStorage.getItem("quartos")) || [];
    if (userData) {
      const user = JSON.parse(userData);

      // Só permite cliente acessar
      if (user.role !== "cliente") {
        window.location.href = "login.html";
      }else if (user.role === "funcionario"){
        window.location.href = "admin.html";
      }

      document.getElementById("userArea").innerHTML =
        `<a href="http://127.0.0.1:5501/view/navbar/perfil.html"><strong  style="color:gray; margin-left:50px"> ${user.nome}</strong> <i class="fa fa-user-check" style="color:green"></i> </a>`;
       document.getElementById("sair").innerHTML='<a href="#" onclick="logout()" style="display:flex; justify-content:center;color:gray;">Sair<i class="fa fa-sign-out-alt" style="color:red"></i></a>'; 

    }
//para sair do sistema 
    function logout() {
      localStorage.removeItem("usuarioLogado");
      window.location.reload();
    }
    // aqui lida com acoes de Reserva 
function gerarCodigoReserva() {
  const ano = new Date().getFullYear();
  const random = Math.floor(Math.random() * 10000);
  return `RES-${ano}-${random}`;
}

function enviarModulos() {

  const userData = localStorage.getItem("usuarioLogado");

  if (!userData) {
    alert("Precisa estar logado!");
    window.location.href = "login.html";
    return;
  }

  const user = JSON.parse(userData);

  const quarto = document.getElementById("quarto").value;
  const checkin = document.getElementById("check-in").value;
  const checkout = document.getElementById("check-out").value;
  const pessoa = document.getElementById("hospedes").value;

  if (!quarto || !checkin || !checkout || !pessoa) {
    alert("Preencha todos os campos!");
    return;
  }
  // else if( new Date(checkin) <new Date()){
  //      alert("o checkin nao pode ser passado");   
  // }

  else if (new Date(checkin) >= new Date(checkout)) {
    alert("Check-out deve ser após check-in.");
    return;
  }

  let reservas = JSON.parse(localStorage.getItem("reserva")) || [];

  const novaReserva = {
    id: Date.now(),
    codigo: gerarCodigoReserva(),
    cliente: user.nome,
    email: user.email,
    Bi: user.Bi,
    quarto: quarto,
    checkin: checkin,
    checkout: checkout,
    pessoa: pessoa,
    status: "Pendente",
    dataCriacao: new Date().toLocaleDateString()
  };

  reservas.push(novaReserva);

  localStorage.setItem("reserva", JSON.stringify(reservas));

  alert("✅ Reserva criada com sucesso!");
  window.location.href = "http://127.0.0.1:5501/view/navbar/perfil.html";
}

