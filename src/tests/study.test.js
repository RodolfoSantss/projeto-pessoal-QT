const {
    adicionarDisciplina,
    registrarHoras,
    listarDisciplinas
} = require("../services/studyService")

beforeEach(() => {
    listarDisciplinas().length = 0
})

test("adiciona disciplina", () => {

    adicionarDisciplina("FUP", 8)

    expect(
        listarDisciplinas().length
    ).toBe(1)
})

test("salva nome da disciplina", () => {

    adicionarDisciplina("Matematica", 10)

    expect(
        listarDisciplinas()[0].nome
    ).toBe("Matematica")
})

test("salva dificuldade", () => {

    adicionarDisciplina("FUP", 7)

    expect(
        listarDisciplinas()[0].dificuldade
    ).toBe(7)
})

test("registra horas estudadas", () => {

    adicionarDisciplina("FUP", 8)

    registrarHoras("FUP", 5)

    expect(
        listarDisciplinas()[0].horasEstudadas
    ).toBe(5)
})

test("erro ao registrar horas em disciplina inexistente", () => {

    expect(() => {
        registrarHoras("Java", 5)
    }).toThrow()
})