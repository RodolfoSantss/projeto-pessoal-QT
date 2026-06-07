const {
    calcularPrioridade
} = require("../services/recommendationService")

test("calcula prioridade de prova", () => {

    expect(
        calcularPrioridade(
            10,
            8,
            5,
            "PROVA"
        )
    ).toBe(48)
})

test("prova tem prioridade maior que trabalho", () => {

    const prova =
        calcularPrioridade(
            10,
            8,
            5,
            "PROVA"
        )

    const trabalho =
        calcularPrioridade(
            10,
            8,
            5,
            "TRABALHO"
        )

    expect(
        prova
    ).toBeGreaterThan(
        trabalho
    )
})

test("dias menores aumentam prioridade", () => {

    const urgente =
        calcularPrioridade(
            10,
            8,
            2,
            "PROVA"
        )

    const normal =
        calcularPrioridade(
            10,
            8,
            10,
            "PROVA"
        )

    expect(
        urgente
    ).toBeGreaterThan(
        normal
    )
})