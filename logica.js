document.addEventListener('DOMContentLoaded', function () {
    const inicioBtn = document.getElementById("inicio-btn");

    inicioBtn.addEventListener("click", function () {
        resetarPlacar(); // Reinicia o placar ao começar a história
        exibirBlocoDeHistoria("BlocoInicial");
    });
});

// Função para alternar a visibilidade do menu de navegação em telas menores
function toggleMenu() {
    var navList = document.getElementById("navList");
    navList.classList.toggle("show");
}

// Restaura o placar para o estado inicial
function resetarPlacar() {
    lealdadeAtual = "neutra";
    contagemEscolhas = { leal: 0, neutra: 0, antagonista: 0 };
}

let contagemEscolhas = { leal: 0, neutra: 0, antagonista: 0 }; // Contagem das escolhas

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
        if (escolha.categoria !== "moral" || escolha.lealdade === determinarEscolhaMoral()) {
            adicionarEscolha(tituloEscolha, escolha);
        }
    }
}

function adicionarEscolha(titulo, escolha) {
    const escolhaButton = document.createElement("button");
    escolhaButton.textContent = titulo;
    escolhaButton.addEventListener("click", function () {
        lealdadeAtual = escolha.lealdade; // Atualiza a lealdade com base na escolha
        contagemEscolhas[lealdadeAtual]++; // Incrementa a contagem da escolha

        // Atualiza o placar
        const placar = determinarEscolhaMoral();
        console.log("Placar Atual: " + placar);

        const proximoBloco = escolha.lealdade === lealdadeAtual ? escolha.proximoBloco : "Padrao";
        exibirBlocoDeHistoria(proximoBloco);
    });

    document.getElementById("escolhas-container").appendChild(escolhaButton);
}

// Determina a escolha moral com base na contagem das escolhas
function determinarEscolhaMoral() {
    const { leal, neutra, antagonista } = contagemEscolhas;

    if (leal >= neutra && leal >= antagonista) {
        return "leal";
    } else if (neutra >= leal && neutra >= antagonista) {
        return "neutra";
    } else {
        return "antagonista";
    }
}




