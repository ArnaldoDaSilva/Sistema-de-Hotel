const API_URL = "../backend/hospedes.php";

// carregar hóspedes
async function carregarHospedes(){
    let resp = await fetch(API_URL+"?acao=listar");
    let dados = await resp.json();
    let tbody = document.querySelector("#tabelaHospedes tbody");
    tbody.innerHTML = "";
    dados.forEach(h => {
        tbody.innerHTML += `
        <tr>
            <td>${h.id}</td>
            <td>${h.nome}</td>
            <td>${h.email}</td>
            <td>${h.telefone}</td>
            <td>${h.documento}</td>
            <td><button onclick="excluirHospede(${h.id})">🗑️</button></td>
        </tr>`;
    });
}

// salvar hóspede
document.querySelector("#formHospede").addEventListener("submit", async e=>{
    e.preventDefault();
    let form = e.target;
    let dados = {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        documento: form.documento.value
    };
    let resp = await fetch(API_URL+"?acao=adicionar",{
        method:"POST",
        body: JSON.stringify(dados)
    });
    let result = await resp.json();
    alert(result.msg);
    carregarHospedes();
    form.reset();
});

// excluir hóspede
async function excluirHospede(id){
    if(confirm("Deseja excluir?")){
        let resp = await fetch(API_URL+"?acao=excluir&id="+id);
        let result = await resp.json();
        alert(result.msg);
        carregarHospedes();
    }
}

carregarHospedes();
