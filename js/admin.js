// Pega dados do LocalStorage ou inicializa array vazio
let quartos = JSON.parse(localStorage.getItem("quartos")) || [];

const btnAdicionar = document.getElementById("btnAdicionar");
const modal = document.getElementById("modal");
const spanFechar = document.querySelector(".fechar");

// Abrir e fechar modal
btnAdicionar.onclick = () => modal.style.display = "block";
spanFechar.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target==modal) modal.style.display = "none"; }


// Formulário
document.getElementById("formQuarto").addEventListener("submit", e=>{
  e.preventDefault();
  const form = e.target;
  const novoQuarto = {
    numero: form.numero.value,
    tipo: form.tipo.value,
    preco: form.preco.value,
    status: form.status.value,
    imagem: form.imagem.value
  };
  quartos.push(novoQuarto);
  localStorage.setItem("quartos", JSON.stringify(quartos)); // salva no navegador
  form.reset();
  modal.style.display = "none";
  alert("Quarto adicionado com sucesso!");
});
