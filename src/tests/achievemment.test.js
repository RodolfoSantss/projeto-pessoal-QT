const {
    calcularXP,
    calcularNivel
} = require("../services/achievementService")

test("1 hora gera 10 xp", () => {

    expect(
        calcularXP(1)
    ).toBe(10)
})

test("5 horas gera 50 xp", () => {

    expect(
        calcularXP(5)
    ).toBe(50)
})

test("xp 50 é nível 1", () => {

    expect(
        calcularNivel(50)
    ).toBe(1)
})

test("xp 100 é nível 2", () => {

    expect(
        calcularNivel(100)
    ).toBe(2)
})

test("xp 300 é nível 3", () => {

    expect(
        calcularNivel(300)
    ).toBe(3)
})

test("xp 400 é nível 4", () => {

    expect(
        calcularNivel(400)
    ).toBe(4)
})

test("xp 500 é nível 5", () => {

    expect(
        calcularNivel(500)
    ).toBe(5)
})