"use strict";
exports.__esModule = true;
exports.sum = exports.f2 = exports.f1 = exports.number = exports.completo = exports.months = exports.mes = exports.magicNumber = void 0;
/* Fichero constants */
exports.magicNumber = 42;
exports.mes = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
exports.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
exports.completo = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
exports.number = 42;
var f1 = function () { return 99; };
exports.f1 = f1;
var f2 = function () { return "Manzana"; };
exports.f2 = f2;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
