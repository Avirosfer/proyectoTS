"use strict";
exports.__esModule = true;
exports.Programas = void 0;
var Programas = /** @class */ (function () {
    function Programas(id_programa, Nombre_programa) {
        this._id_programa = id_programa;
        this._Nombre_programa = Nombre_programa;
    }
    Object.defineProperty(Programas.prototype, "id_Programa", {
        get: function () {
            return this._id_programa;
        },
        set: function (idProg) {
            this._id_programa = idProg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Programas.prototype, "Nombre_programa", {
        get: function () {
            return this._Nombre_programa;
        },
        set: function (nomPro) {
            this._Nombre_programa = nomPro;
        },
        enumerable: false,
        configurable: true
    });
    return Programas;
}());
exports.Programas = Programas;
var arrayPrograma = [];
function addPrograma(id_programa, Nombre_programa) {
    var programa = {
        id_programa: id_programa,
        Nombre_programa: Nombre_programa
    };
    arrayPrograma.push(programa);
}
function printPrograma() {
    arrayPrograma.forEach(function (prgrm) {
        console.log(prgrm);
    });
}
addPrograma(50, 'ADSI');
addPrograma(60, 'Gestión humana');
addPrograma(70, 'Contabilidad');
addPrograma(80, 'Entrenamiento físico');
printPrograma();
