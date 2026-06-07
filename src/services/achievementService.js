function calcularXP(horas) {
    return horas * 10
}

function calcularNivel(xp) {

    if (xp >= 500) return 5
    if (xp >= 400) return 4
    if (xp >= 300) return 3
    if (xp >= 100) return 2

    return 1
}

module.exports = {
    calcularXP,
    calcularNivel
}