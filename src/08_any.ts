"use strict"
let myDynamicVar;


myDynamicVar = 100;
myDynamicVar = null;
myDynamicVar = {};
myDynamicVar = '';

myDynamicVar = 'Hola';
const rta = (myDynamicVar as string).toLowerCase();
console.log(rta);

myDynamicVar = 1212;
const rta2 = (<number>myDynamicVar).toString;
console.log(rta2);
