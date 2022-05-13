"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var _18_classPersona_1 = require("./18_classPersona");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, cargo, salario) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.cargo = cargo;
        _this.salario = salario;
        return _this;
    }
    Empleado.prototype.getCargo = function () { return this.cargo; };
    Empleado.prototype.setCargo = function (cargo) { this.cargo = cargo; };
    Empleado.prototype.getSalario = function () { return this.salario; };
    Empleado.prototype.setSalario = function (salario) { this.salario = salario; };
    return Empleado;
}(_18_classPersona_1.Persona));
