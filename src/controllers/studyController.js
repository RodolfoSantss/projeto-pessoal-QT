const rl = require("../views/menuView")

const {
    adicionarDisciplina,
    adicionarAvaliacao,
    registrarHoras,
    listarDisciplinas
} = require("../services/studyService")

const {
    calcularPrioridade
} = require("../services/recommendationService")

const {
    calcularXP,
    calcularNivel
} = require("../services/achievementService")

function menu() {

    console.log("\n===== STUDYFLOW =====")
    console.log("1 - Adicionar disciplina")
    console.log("2 - Adicionar avaliação")
    console.log("3 - Registrar horas")
    console.log("4 - Ver disciplinas")
    console.log("5 - Ver prioridades")
    console.log("6 - Ver XP")
    console.log("0 - Sair")

    rl.question(
        "\nEscolha: ",
        opcao => {

            switch(opcao){

                case "1":
                    cadastrarDisciplina()
                    break

                case "2":
                    cadastrarAvaliacao()
                    break

                case "3":
                    cadastrarHoras()
                    break

                case "4":
                    mostrarDisciplinas()
                    break

                case "5":
                    mostrarPrioridades()
                    break

                case "6":
                    mostrarXP()
                    break

                case "0":
                    rl.close()
                    break

                default:
                    menu()
            }
        }
    )
}

function cadastrarDisciplina() {

    rl.question(
        "Nome: ",
        nome => {

            rl.question(
                "Dificuldade (1-10): ",
                dificuldade => {

                    adicionarDisciplina(
                        nome,
                        Number(dificuldade)
                    )

                    console.log(
                        "Disciplina cadastrada!"
                    )

                    menu()
                }
            )
        }
    )
}

function cadastrarAvaliacao() {

    rl.question(
        "Disciplina: ",
        nome => {

            rl.question(
                "Tipo: ",
                tipo => {

                    rl.question(
                        "Peso: ",
                        peso => {

                            rl.question(
                                "Dias restantes: ",
                                dias => {

                                    adicionarAvaliacao(
                                        nome,
                                        tipo,
                                        Number(peso),
                                        Number(dias)
                                    )

                                    console.log(
                                        "Avaliação adicionada!"
                                    )

                                    menu()
                                }
                            )
                        }
                    )
                }
            )
        }
    )
}

function mostrarDisciplinas() {

    console.table(
        listarDisciplinas()
    )

    menu()
}

function mostrarPrioridades() {

    const disciplinas =
        listarDisciplinas()

    disciplinas.forEach(d => {

        d.avaliacoes.forEach(a => {

            const prioridade =
                calcularPrioridade(
                    a.peso,
                    d.dificuldade,
                    a.diasRestantes,
                    a.tipo
                )

            console.log(
                `${d.nome} -> ${prioridade.toFixed(2)}`
            )
        })
    })

    menu()
}

function mostrarXP() {

    const disciplinas =
        listarDisciplinas()

    let horas = 0

    disciplinas.forEach(d => {
        horas += d.horasEstudadas
    })

    const xp =
        calcularXP(horas)

    console.log(
        `XP: ${xp}`
    )

    console.log(
        `Nivel: ${calcularNivel(xp)}`
    )

    menu()
}

module.exports = {
    menu
};