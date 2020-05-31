function calcular() {
    var n = Number(window.prompt("Valor: "))
    var d = Number(window.prompt("Desconto (%): "))
    var a = n * d/100
    var b = n - a
    window.alert(`O valor do desconto é ${a}, logo o valor final é ${b}`)
}