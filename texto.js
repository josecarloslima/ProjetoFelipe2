// Definição dos blocos da história
const blocosHistoria = {
    Caso1406: {
        titulo: 'Caso 1406',
        texto: 'Um estudo do caso apresentado à Associação dos Aventureiros pelo Sr. Júlio Verne, documentado pelo pesquisador das artes gráficas e comunicacionais Felipe Cortatesi, com auxílio do técnico em comunicação diferencial José Carlos Lima.',
        escolhas: [
            { texto: 'Aceitar a missão', valor: 2, destino: 'InicioJornada' },
            { texto: 'Recusar a missão', valor: 1, destino: 'RecusaMissao' }
        ]
    },
    InicioJornada: {
        titulo: 'Início da Jornada',
        texto: 'Você aceitou a missão. Sua jornada começa agora!',
        escolhas: [
            { texto: 'Explorar a cidade', valor: 2, destino: 'DescobertaCidade' },
            { texto: 'Partir imediatamente', valor: 1, destino: 'PartidaImediata' }
        ]
    },
    RecusaMissao: {
        titulo: 'Recusa da Missão',
        texto: 'Você recusou a missão. O caso permanece sem solução.',
        escolhas: []
    },
    DescobertaCidade: {
        titulo: 'Descobertas na Cidade',
        texto: 'Enquanto explora a cidade, você faz descobertas interessantes.',
        escolhas: [
            { texto: 'Investigar mais', valor: 3, destino: 'DescobertasAdicionais' },
            { texto: 'Voltar para a base', valor: 1, destino: 'DescobertasCruciais' }
        ]
    },
    PartidaImediata: {
        titulo: 'Partida Imediata',
        texto: 'Você decide partir imediatamente em direção ao desconhecido.',
        escolhas: [
            { texto: 'Explorar as redondezas', valor: 2, destino: 'descobertasAdicionais' },
            { texto: 'Rumo ao oceano profundo', valor: 3, destino: 'OceanoProfundo' }
        ]
    },
    DescobertasAdicionais: {
        titulo: 'Descobertas Adicionais',
        texto: 'Suas investigações adicionais revelam informações cruciais.',
        escolhas: [
            { texto: 'Continuar investigando', valor: 3, destino: 'DescobertasCruciais' },
            { texto: 'Voltar para relatar', valor: 2, destino: 'RelatorioFinal' }
        ]
    },
    RelatorioFinal: {
        titulo: 'Relatório Final',
        texto: 'Você retorna à base e apresenta seu relatório final à Associação dos Aventureiros.',
        escolhas: []
    },
    OceanoProfundo: {
        titulo: 'Oceano Profundo',
        texto: 'Você mergulha nas profundezas do oceano em busca de respostas.',
        escolhas: [
            { texto: 'Explorar as criaturas marinhas', valor: 2, destino: 'SegredosMantidos' },
            { texto: 'Investigar o fundo do oceano', valor: 3, destino: 'SegredosMantidos' }
        ]
    },
    DescobertasCruciais: {
        titulo: 'Descobertas Cruciais',
        texto: 'Suas investigações adicionais revelam informações cruciais para o desfecho do caso.',
        escolhas: [
            { texto: 'Enfrentar o antagonista', valor: 3, destino: 'SegredosMantidos' },
            { texto: 'Relatar descobertas', valor: 2, destino: 'SegredosMantidos' }
        ]
    },
    SegredosMantidos: {
        titulo: 'Segredos Mantidos',
        texto: 'Você mantém os segredos descobertos durante suas pesquisas.',
        escolhas: []
    }
};