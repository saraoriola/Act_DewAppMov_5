function calcularFactorial() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = 1;

    if (numero < 0) {
        document.getElementById("resultado").innerHTML = "El factorial no está definido para números negativos.";
    } else if (numero === 0 || numero === 1) {
        document.getElementById("resultado").innerHTML = "1";
    } else {
        for (var i = 2; i <= numero; i++) {
            resultado *= i;
        }
        document.getElementById("resultado").innerHTML = resultado;
    }
}
