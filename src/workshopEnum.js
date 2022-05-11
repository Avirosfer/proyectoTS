/*
Crear dos listas enum:
1. Lista con los días de la semana.
2. Lista con los meses del año. Lista con los

Crear una función que reciba dos strings(día, mes)(miércoles, marzo)

Si el día y el mes son iguales: pares o impares, desplegar un mensaje
que diga "el usuario tiene pico y placa"

La semana inicia el lunes, con el valor 1.
El año inicia en enero, con el valor 1.
*/
var Days;
(function (Days) {
    Days["Lunes"] = "lun";
    Days["Martes"] = "mar";
    Days["Miercoles"] = "mie";
    Days["Jueves"] = "jue";
    Days["Viernes"] = "vie";
    Days["Sabado"] = "sab";
    Days["Domingo"] = "dom";
})(Days || (Days = {}));
var Months;
(function (Months) {
    Months["Enero"] = "ene";
    Months["Febrero"] = "feb";
    Months["Marzo"] = "mar";
    Months["Abril"] = "abr";
    Months["Mayo"] = "may";
    Months["Junio"] = "jun";
    Months["Julio"] = "jul";
    Months["Agosto"] = "ago";
    Months["Septiembre"] = "sep";
    Months["Octubre"] = "oct";
    Months["Noviembre"] = "nov";
    Months["Diciembre"] = "dic";
})(Months || (Months = {}));
function verificar(day, month) {
    if ((day === "lun" || day === "mie" || day === "vie" || day === "dom") && (month === "ene" || month === "mar" || month === "may" || month === "jul" || month === "sep" || month === "nov")) {
        console.log("El usuario tiene pico y placa");
    }
    else if ((day === "mar" || day === "jue" || day === "sab") && (month === "feb" || month === "abr" || month === "jun" || month === "ago" || month === "oct" || month === "dic")) {
        console.log("El usuario TIENE Pico & Placa");
    }
    else {
        console.log("El usuario NO tiene Pico & Placa");
    }
}
verificar("lun", "ene");
verificar("mar", "feb");
verificar("mie", "nov");
verificar("jue", "sep");
verificar("vie", "jun");
verificar("sab", "jun");
verificar("dom", "dic");
verificar("d", "dic");
verificar("dom", "dic");
verificar("dom", "dic");
verificar("dom", "dic");
