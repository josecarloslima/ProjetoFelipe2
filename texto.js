const blocosDeHistoria = {
    "BlocoInicial": {
        titulo: "O Início",
        texto: "Você é um explorador submarino em busca de aventuras nas profundezas do oceano.",
        escolhas: {
            "EscolhaLeal": { lealdade: "leal", proximoBloco: "BlocoLeal" },
            "EscolhaNeutra": { lealdade: "neutra", proximoBloco: "BlocoNeutro" },
            "EscolhaAntagonista": { lealdade: "antagonista", proximoBloco: "BlocoAntagonista" }
        }
    },
    "BlocoLeal": {
        titulo: "Caminho Leal",
        texto: "Você escolheu um caminho leal, buscando sempre agir com justiça e honra.",
        escolhas: {
            "EscolhaLeal": { lealdade: "leal", proximoBloco: "BlocoLeal2" },
            "EscolhaNeutra": { lealdade: "neutra", proximoBloco: "BlocoNeutro2" },
            "EscolhaAntagonista": { lealdade: "antagonista", proximoBloco: "BlocoAntagonista2" }
        }
    },
    "BlocoNeutro": {
        titulo: "Caminho Neutro",
        texto: "Você segue um caminho neutro, sem se deixar levar por extremos.",
        escolhas: {
            "EscolhaLeal": { lealdade: "leal", proximoBloco: "BlocoLeal2" },
            "EscolhaNeutra": { lealdade: "neutra", proximoBloco: "BlocoNeutro2" },
            "EscolhaAntagonista": { lealdade: "antagonista", proximoBloco: "BlocoAntagonista2" }
        }
    },
    "BlocoAntagonista": {
        titulo: "Caminho Antagonista",
        texto: "Você escolheu um caminho antagonista, buscando poder e domínio sobre os outros.",
        escolhas: {
            "EscolhaLeal": { lealdade: "leal", proximoBloco: "BlocoLeal2" },
            "EscolhaNeutra": { lealdade: "neutra", proximoBloco: "BlocoNeutro2" },
            "EscolhaAntagonista": { lealdade: "antagonista", proximoBloco: "BlocoAntagonista2" }
        }
    },
    "BlocoLeal2": {
        titulo: "Caminho Leal",
        texto: "Você enfrenta um desafio leal para provar sua devoção à justiça.",
        escolhas: {
            "EscolhaLeal": { lealdade: "leal", proximoBloco: "BlocoLeal3" },
            "EscolhaNeutra": { lealdade: "neutra", proximoBloco: "BlocoNeutro3" },
            "EscolhaAntagonista": { lealdade: "antagonista", proximoBloco: "BlocoAntagonista3" },
            "EscolhaMoralLeal": { lealdade: "leal", categoria: "moral", proximoBloco: "BlocoMoralLeal" },
            "EscolhaMoralNeutra": { lealdade: "neutra", categoria: "moral", proximoBloco: "BlocoMoralNeutra" },
            "EscolhaMoralAntagonista": { lealdade: "antagonista", categoria: "moral", proximoBloco: "BlocoMoralAntagonista" }
        }
    },
    "BlocoNeutro2": {
        titulo: "Caminho Neutro",
        texto: "Você segue um caminho neutro, sem se deixar levar por extremos.",
        escolhas: {
            "EscolhaLeal": { lealdade: "leal", proximoBloco: "BlocoLeal3" },
            "EscolhaNeutra": { lealdade: "neutra", proximoBloco: "BlocoNeutro3" },
            "EscolhaAntagonista": { lealdade: "antagonista", proximoBloco: "BlocoAntagonista3" },
            "EscolhaMoralLeal": { lealdade: "leal", categoria: "moral", proximoBloco: "BlocoMoralLeal" },
            "EscolhaMoralNeutra": { lealdade: "neutra", categoria: "moral", proximoBloco: "BlocoMoralNeutra" },
            "EscolhaMoralAntagonista": { lealdade: "antagonista", categoria: "moral", proximoBloco: "BlocoMoralAntagonista" }
        }
    },
    "BlocoAntagonista2": {
        titulo: "Caminho Antagonista",
        texto: "Você escolheu um caminho antagonista, buscando poder e domínio sobre os outros.",
        escolhas: {
            "EscolhaLeal": { lealdade: "leal", proximoBloco: "BlocoLeal3" },
            "EscolhaNeutra": { lealdade: "neutra", proximoBloco: "BlocoNeutro3" },
            "EscolhaAntagonista": { lealdade: "antagonista", proximoBloco: "BlocoAntagonista3" },
            "EscolhaMoralLeal": { lealdade: "leal", categoria: "moral", proximoBloco: "BlocoMoralLeal" },
            "EscolhaMoralNeutra": { lealdade: "neutra", categoria: "moral", proximoBloco: "BlocoMoralNeutra" },
            "EscolhaMoralAntagonista": { lealdade: "antagonista", categoria: "moral", proximoBloco: "BlocoMoralAntagonista" }
        }
    },
    "BlocoLeal3": {
        titulo: "Caminho Leal",
        texto: "Sua ultima chance de provar sua devoção à justiça.",
        escolhas: {
            "EscolhaMoralLeal": { lealdade: "leal", categoria: "moral", proximoBloco: "BlocoMoralLeal" },
            "EscolhaMoralNeutra": { lealdade: "neutra", categoria: "moral", proximoBloco: "BlocoMoralNeutra" },
            "EscolhaMoralAntagonista": { lealdade: "antagonista", categoria: "moral", proximoBloco: "BlocoMoralAntagonista" }
        }
    },
    "BlocoNeutro3": {
        titulo: "Caminho Neutro",
        texto: "Você segue um caminho neutro, sem se deixar levar por extremos.",
        escolhas: {
            "EscolhaMoralLeal": { lealdade: "leal", categoria: "moral", proximoBloco: "BlocoMoralLeal" },
            "EscolhaMoralNeutra": { lealdade: "neutra", categoria: "moral", proximoBloco: "BlocoMoralNeutra" },
            "EscolhaMoralAntagonista": { lealdade: "antagonista", categoria: "moral", proximoBloco: "BlocoMoralAntagonista" }
        }
    },
    "BlocoAntagonista3": {
        titulo: "Caminho Antagonista",
        texto: "Você escolheu um caminho antagonista, buscando poder e domínio sobre os outros.",
        escolhas: {
            "EscolhaMoralLeal": { lealdade: "leal", categoria: "moral", proximoBloco: "BlocoMoralLeal" },
            "EscolhaMoralNeutra": { lealdade: "neutra", categoria: "moral", proximoBloco: "BlocoMoralNeutra" },
            "EscolhaMoralAntagonista": { lealdade: "antagonista", categoria: "moral", proximoBloco: "BlocoMoralAntagonista" }
        }
    },
    "BlocoMoralLeal": {
        titulo: "Escolha Moral Leal",
        texto: "Você fez uma escolha moral leal...",
        escolhas: {
            "FimLeal": { lealdade: "leal", proximoBloco: "BlocoFinalLeal" }
        }
    },
    "BlocoMoralNeutra": {
        titulo: "Escolha Moral Neutra",
        texto: "Você fez uma escolha moral neutra...",
        escolhas: {
            "FimNeutro": { lealdade: "leal", proximoBloco: "BlocoFinalNeutro" }
        }
    },
    "BlocoMoralAntagonista": {
        titulo: "Escolha Moral Antagonista",
        texto: "Você fez uma escolha moral antagonista...",
        escolhas: {
            "FimAntagonista": { lealdade: "leal", proximoBloco: "BlocoFinalAntagonista" }
        }
    },
    "BlocoFinalLeal": {
        titulo: "Fim Leal",
        texto: "Você alcançou o final com lealdade leal. Parabéns!",
        escolhas: {
            "RetornarInicio": { proximoBloco: "BlocoInicial" }
        }
    },
    "BlocoFinalNeutro": {
        titulo: "Fim Neutro",
        texto: "Você alcançou o final com lealdade neutra. Parabéns!",
        escolhas: {
            "RetornarInicio": { proximoBloco: "BlocoInicial" }
        }
    },
    "BlocoFinalAntagonista": {
        titulo: "Fim Antagonista",
        texto: "Você alcançou o final com lealdade antagônica. Parabéns!",
        escolhas: {
            "RetornarInicio": { proximoBloco: "BlocoInicial" }
        }
    }
};
