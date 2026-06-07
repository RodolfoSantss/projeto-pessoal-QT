const disciplinas = require("../database/studyDatabase")

function adicionarDisciplina(nome, dificuldade) {

    disciplinas.push({
        nome,
        dificuldade,
        horasEstudadas: 0,
        avaliacoes: []
    })

}

function adicionarAvaliacao(
    nomeDisciplina,
    tipo,
    peso,
    diasRestantes
) {

    const disciplina =
        disciplinas.find(
            d => d.nome === nomeDisciplina
        )

    if (!disciplina) {
        throw new Error(
            "Disciplina não encontrada"
        )
    }

    disciplina.avaliacoes.push({
        tipo,
        peso,
        diasRestantes
    })

}

function registrarHoras(nome, horas) {

    const disciplina =
        disciplinas.find(
            d => d.nome === nome
        )

    if (!disciplina) {
        throw new Error(
            "Disciplina não encontrada"
        )
    }

    disciplina.horasEstudadas += horas
}

function listarDisciplinas() {
    return disciplinas
}

module.exports = {
    adicionarDisciplina,
    adicionarAvaliacao,
    registrarHoras,
    listarDisciplinas
}