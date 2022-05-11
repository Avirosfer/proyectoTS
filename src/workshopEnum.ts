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

enum Days {
  Lunes = "lun",
  Martes = "mar",
  Miercoles = "mie",
  Jueves = "jue",
  Viernes = "vie",
  Sabado = "sab",
  Domingo = "dom"
}

enum Months {
  Enero = "ene",
  Febrero = "feb",
  Marzo = "mar",
  Abril = "abr",
  Mayo = "may",
  Junio = "jun",
  Julio = "jul",
  Agosto = "ago",
  Septiembre = "sep",
  Octubre = "oct",
  Noviembre = "nov",
  Diciembre = "dic"
}

function verificar(day: string, month: string) {
  if((day === "lun" || day === "mie" || day === "vie" || day === "dom") && (month === "ene" || month === "mar" || month === "may" || month === "jul" || month === "sep" || month === "nov")) {
      console.log("El usuario tiene pico y placa");
  } else if((day === "mar" || day === "jue" || day === "sab") && (month === "feb" || month === "abr" || month === "jun" || month === "ago" || month === "oct" || month === "dic")) {
      console.log("El usuario TIENE Pico & Placa");
  } else {
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

