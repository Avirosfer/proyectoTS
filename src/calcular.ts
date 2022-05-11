var resultado:number = 0;

function calcularSumar(){
    let vlr1 = (<HTMLInputElement>document.getElementById('valor1')).value;
    let vlr2 = (<HTMLInputElement>document.getElementById('valor2')).value;

    let vlrOne = Number(vlr1);
    let vlrTwo = Number(vlr2);
    resultado = vlrOne + vlrTwo

    let result = (<HTMLInputElement>document.getElementById('resultado'))
    result.innerText = resultado.toString();

}
