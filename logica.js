function toggleMenu() {
    var navList = document.getElementById("navList");
    navList.classList.toggle("show");
}

// Definição dos blocos da história
const blocosHistoria = textoHistoria;

// Função para exibir o bloco inicial
function iniciarHistoria() {
    exibirBloco('Caso1406');
}

// Função para exibir um bloco da história
function exibirBloco(numeroBloco) {
    const bloco = blocosHistoria[numeroBloco];

    document.getElementById('titulo').innerText = bloco.titulo;
    document.getElementById('texto').innerText = bloco.texto;

    const escolhasContainer = document.getElementById('escolhas-container');
    escolhasContainer.innerHTML = '';

    bloco.escolhas.forEach((escolha) => {
        const botaoEscolha = document.createElement('button');
        botaoEscolha.innerText = escolha.texto;
        botaoEscolha.addEventListener('click', () => escolher(escolha));
        escolhasContainer.appendChild(botaoEscolha);
    });
}

// Função para processar a escolha do jogador
function escolher(escolha) {
    pontos += escolha.valor;

    if (escolha.destino) {
        exibirBloco(escolha.destino);
    } else {
        exibirFinal();
    }
}

// Função para exibir o bloco final com base nos pontos
function exibirFinal() {
    let finalMensagem = '';

    if (pontos >= 10) {
        finalMensagem = 'Você obteve um final incrível!';
    } else if (pontos >= 5) {
        finalMensagem = 'Você obteve um final intermediário.';
    } else {
        finalMensagem = 'Você obteve um final básico.';
    }

    document.getElementById('titulo').innerText = 'Fim da História';
    document.getElementById('texto').innerText = finalMensagem;

    const escolhasContainer = document.getElementById('escolhas-container');
    escolhasContainer.innerHTML = '<button onclick="iniciarHistoria()">Recomeçar</button>';
}

// Função para alternar a visibilidade do menu de navegação em telas menores
function toggleMenu() {
    var navList = document.getElementById("navList");
    navList.classList.toggle("show");
}

// Inicie a história quando a página carregar
document.addEventListener('DOMContentLoaded', iniciarHistoria);

