document.addEventListener('DOMContentLoaded', function () {
    const inicioBtn = document.getElementById("inicio-btn");

    inicioBtn.addEventListener("click", function () {
        exibirBlocoDeHistoria("BlocoInicial");
    });
});

// Função para alternar a visibilidade do menu de navegação em telas menores
function toggleMenu() {
    var navList = document.getElementById("navList");
    navList.classList.toggle("show");
}

let lealdadeAtual = "neutra"; // Inicializa a lealdade do jogador

function exibirBlocoDeHistoria(titulo) {
    const tituloElemento = document.getElementById("titulo");
    const textoElemento = document.getElementById("texto");

    tituloElemento.textContent = blocosDeHistoria[titulo].titulo;
    textoElemento.textContent = blocosDeHistoria[titulo].texto;

    exibirEscolhasDoBloco(titulo);
}

function exibirEscolhasDoBloco(titulo) {
    const escolhasDoBloco = blocosDeHistoria[titulo].escolhas;
    const escolhasContainer = document.getElementById("escolhas-container");

    escolhasContainer.innerHTML = "";

    for (const [tituloEscolha, escolha] of Object.entries(escolhasDoBloco)) {
        adicionarEscolha(tituloEscolha, escolha);
    }
}

function adicionarEscolha(titulo, escolha) {
    const escolhaButton = document.createElement("button");
    escolhaButton.textContent = titulo;
    escolhaButton.addEventListener("click", function () {
        lealdadeAtual = escolha.lealdade; // Atualiza a lealdade com base na escolha
        const proximoBloco = escolha.lealdade === lealdadeAtual ? titulo : "Padrao";
        exibirBlocoDeHistoria(proximoBloco);
    });

    document.getElementById("escolhas-container").appendChild(escolhaButton);
}
