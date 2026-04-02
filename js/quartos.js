const container = document.getElementById("quartos-container");
const quarto=document.getElementById("quarto");
// Armazena 16 quartos no LocalStorage, divididos igualmente entre 3 categorias
const quartosData = [
  { numero: 101, tipo: "Suite", preco: 5000, status: "Disponível", imagem: "imagens/quartos/1.jpg" },
  { numero: 102, tipo: "Suite", preco: 5000, status: "Disponível", imagem: "imagens/quartos/2.jpg" },
  { numero: 103, tipo: "Suite", preco: 5000, status: "Disponível", imagem: "imagens/quartos/1.jpg" },
  { numero: 104, tipo: "Suite", preco: 5000, status: "Ocupado", imagem: "imagens/quartos/2.jpg" },
  { numero: 105, tipo: "Suite", preco: 5000, status: "Manutenção", imagem: "imagens/quartos/1.jpg" },
  { numero: 106, tipo: "Luxo", preco: 7500, status: "Disponível", imagem: "imagens/quartos/3.jpg" },
  { numero: 107, tipo: "Luxo", preco: 7500, status: "Disponível", imagem: "imagens/quartos/3.jpg" },
  { numero: 108, tipo: "Luxo", preco: 7500, status: "Disponível", imagem: "imagens/quartos/3.jpg" },
  { numero: 109, tipo: "Luxo", preco: 7500, status: "Ocupado", imagem: "imagens/quartos/3.jpg" },
  { numero: 110, tipo: "Luxo", preco: 7500, status: "Disponível", imagem: "imagens/quartos/3.jpg" },
  { numero: 111, tipo: "Standard", preco: 3000, status: "Disponível", imagem: "imagens/quartos/4.jpg" },
  { numero: 112, tipo: "Standard", preco: 3000, status: "Disponível", imagem: "imagens/quartos/5.jpg" },
  { numero: 113, tipo: "Standard", preco: 3000, status: "Disponível", imagem: "imagens/quartos/4.jpg" },
  { numero: 114, tipo: "Standard", preco: 3000, status: "Ocupado", imagem: "imagens/quartos/5.jpg" },
  { numero: 115, tipo: "Standard", preco: 3000, status: "Disponível", imagem: "imagens/quartos/4.jpg" },
  { numero: 116, tipo: "Standard", preco: 3000, status: "Disponível", imagem:"imagens/quartos/5.jpg" }
];
localStorage.setItem("quarto", JSON.stringify(quartosData));
// Pega dados do LocalStorage
const quartos = JSON.parse(localStorage.getItem("quarto")) || [];
const hospedes =document.getElementById("hospedes");
// Exibe quartos
quartos.forEach(q => {
  container.innerHTML += `
    <div class="quartos-grid">
    <div class="card">
      <img src="${q.imagem}" alt="Quarto ${q.tipo}">
      <h3>Quarto ${q.numero} - ${q.tipo}</h3>
      <p>${q.preco},00 Mzn / noite</p>
      <p>Status: ${q.status}</p>
    </div>
  `;
  quarto.innerHTML += `<option value="${q.numero}">Quarto ${q.numero} - ${q.tipo}: Preco-${q.preco}Mzn</option>`;
});


// Cria o filtro de categorias
const filterContainer = document.createElement("div");
filterContainer.innerHTML = `
  <label for="categoria-filter">Filtrar por categoria:</label>
  <select id="categoria-filter">
    <option value="todos">Todos</option>
    <option value="suite">Suite</option>
    <option value="luxo">Luxo</option>
    <option value="standard">Standard</option>
 </select>
`;
container.parentNode.insertBefore(filterContainer, container);

// Função para renderizar quartos filtrados
function renderQuartos(categoria) {
  container.innerHTML = "";
  quartos
    .filter(q => categoria === "todos" || q.tipo.toLowerCase() === categoria)
    .forEach(q => {
      container.innerHTML += `
        <div class="card">
          <img src="${q.imagem}" alt="Quarto ${q.tipo}">
          <h3>Quarto ${q.numero} - ${q.tipo}</h3>
          <p>${q.preco},00 Mzn / noite</p>
          <p>Status: ${q.status}</p>
        </div>
      `;
    });
}

// Evento de filtro
document.getElementById("categoria-filter").addEventListener("change", function() {
  renderQuartos(this.value);
  });
  quartos.sort((a, b) => a.tipo.localeCompare(b.tipo));
  renderQuartos("todos"); 


  