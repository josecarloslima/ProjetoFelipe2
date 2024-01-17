const blocosDeHistoria = {
    "BlocoInicial": {
        titulo: "O Início",
        texto: "Você está diante de uma bifurcação na estrada. Qual caminho você escolhe?",
        escolhas: {
            "Você decide seguir pela densa floresta.": { proximoBloco: "BlocoFloresta", lealdade: "neutra" },
            "Você opta pela trilha que leva à montanha.": { proximoBloco: "BlocoMontanha", lealdade: "aliada" },
            "Você escolhe a rota árida através do deserto.": { proximoBloco: "BlocoDeserto", lealdade: "inimiga" }
        }
    },
    "BlocoFloresta": {
        titulo: "Dentro da Floresta",
        texto: "Você encontra uma clareira iluminada pelo sol. O que você faz?",
        escolhas: {
            "Descansar": { texto: "Você decide descansar na clareira.", proximoBloco: "BlocoDescanso", lealdade: "neutra" },
            "Explorar": { texto: "Você opta por explorar mais a fundo a floresta.", proximoBloco: "BlocoExploracao", lealdade: "aliada" }
        }
    },
    // Adicione mais blocos conforme necessário
};


// Aqui você pode adicionar textos, diálogos, descrições, etc., conforme necessário.
const textosAdicionais = {
    "Padrao": {
        descricao: "Você avança na história...",
        conteudo: "Você continua sua jornada."
    },
    "aliada": {
        descricao: "Escolha Aliada",
        conteudo: "Esta escolha é específica para quem possui lealdade aliada."
    },
    "inimiga": {
        descricao: "Escolha Inimiga",
        conteudo: "Esta escolha é específica para quem possui lealdade inimiga."
    },
    "neutra": {
        descricao: "Escolha Neutra",
        conteudo: "Esta escolha é específica para quem possui lealdade neutra."
    }
};

