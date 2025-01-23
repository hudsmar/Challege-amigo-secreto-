//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// lista de amigos
let amigos = [];

function adicionarAmigo() {
    let imput = document.getElementById("amigo");
    let nome = imput.value.trim();

    if (nome == "") {
        alert ("Por favor, insira um nome");
        return;
    }

    amigos.push(nome);
    liparNome();
    atualizarLista();
    
}


function liparNome() {
    nome = document.getElementById("amigo");
    nome.value = "";
    
}

function atualizarLista() {
    // Acessando a lista

    let lista = document.getElementById("listaAmigos"); 

    // Limpa a lista antes de atualizá-la
    lista.innerHTML = "";

    // Usando um loop `for` para percorrer o array de amigos
    for (let i = 0; i < amigos.length; i++) {

        // Cria um novo elemento <li>
        let item = document.createElement("li");

        // Adiciona o texto com o índice (i + 1) e o nome do amigo
        item.textContent = `${i + 1}. ${amigos[i]}`;

        // Adiciona o elemento <li> à lista <ul>
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    // Seleciona o elemento onde o resultado será exibido

    let resultado = document.getElementById("resultado"); 

    // Valida se há amigos na lista
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    // Limpa o resultado anterior
    resultado.innerHTML = "";

    // Gera um índice aleatório
    let sorteadoIndex = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let sorteado = amigos[sorteadoIndex];

    // Exibe o resultado
    let item = document.createElement("li");
    item.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    // Adiciona uma classe para destacar o nome sorteado
    item.classList.add("highlight"); 
    // Adiciona o item na lista de resultados
    resultado.appendChild(item); 
}