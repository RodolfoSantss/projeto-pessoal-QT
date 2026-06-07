function fatorTipo(tipo) {

    switch(tipo) {

        case "PROVA":
            return 3

        case "PROJETO":
            return 2.5

        case "TRABALHO":
            return 2

        case "SEMINARIO":
            return 1.5

        default:
            return 1
    }
}

function calcularPrioridade(
    peso,
    dificuldade,
    dias,
    tipo
) {

    return (
        peso *
        dificuldade *
        fatorTipo(tipo)
    ) / dias
}

module.exports = {
    calcularPrioridade
}