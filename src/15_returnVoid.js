var calcTotal = function (prices) {
    var total = 0;
    prices.forEach(function (item) {
        total += item;
    });
    return total.toString();
};
var respuesta = calcTotal([2, 4, 6, 8]);
console.log(respuesta);
var imprimeTotal = function (prices) {
    var rta = calcTotal(prices);
    console.log("El total es: ".concat(rta));
};
imprimeTotal([1, 3, 5]);
