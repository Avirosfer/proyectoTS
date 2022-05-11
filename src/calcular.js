var resultado = 0;
function calcularSumar() {
    var vlr1 = document.getElementById('valor1').value;
    var vlr2 = document.getElementById('valor2').value;
    var vlrOne = Number(vlr1);
    var vlrTwo = Number(vlr2);
    resultado = vlrOne + vlrTwo;
    var result = document.getElementById('resultado');
    result.innerText = resultado.toString();
}
