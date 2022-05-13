"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Object.defineProperty(Persona.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setNombre", {
        set: function () {
            return this.edad;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.imprimir = function () {
        console.log("Nombre: ".concat(this.nombre, " y edad ").concat(this.edad));
    };
    return Persona;
}());
exports.Persona = Persona;
