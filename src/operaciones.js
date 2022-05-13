"use strict";
exports.__esModule = true;
exports.dvr = exports.mul = exports.res = exports.sum = void 0;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
function res(a, b) {
    return a - b;
}
exports.res = res;
function mul(a, b) {
    return a * b;
}
exports.mul = mul;
function dvr(a, b) {
    if (b === 0) {
        return ("No se puede dividir por cero");
    }
    else {
        return a / b;
    }
}
exports.dvr = dvr;
