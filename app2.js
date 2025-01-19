let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo");
    if (amigo.value == "") {
        alert("Por favor, insira um nome.");
        amigo.focus();
        return;
    }
    if (amigos.includes(amigo.value)) {//amigo ja ta incluso?
        alert('Nome já existe!');
        return; 
    }
    

    amigos.push(amigo.value); // Adiciona o amigo ao array
    atualizarListaAmigos(); // Atualiza a lista de amigos exibida

    amigo.value = ""; // limpa o campo do amigo
    amigo.focus(); // Adiciona o foco de volta ao campo de entrada
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpar a lista existente
    listaAmigos.innerHTML = "";

    // Percorrer o array amigos e adicionar cada nome como um elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
function sortearAmigo(){
    let resultado = document.getElementById("resultado"); 
    
    // Validar que há amigos disponíveis
    if (amigos.length === 0) { 
        resultado.innerHTML = "Nenhum amigo disponível para sortear.";
        return; 
    }
    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    // Obter o nome sorteado 
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostrar o resultado 
    resultado.innerHTML = "Amigo sorteado: " + amigoSorteado;
}

function reiniciar() {
    amigos = [];
    document.getElementById('resultado').innerHTML = '';
    atualizarListaAmigos();
}
//cursor na cx de texto ao carregar a página
function focusInput() { 
    document.getElementById("amigo").focus(); 
}



 
