import {Persona} from './18_classPersona';
import {Empleado} from './19_empleado';

let persona1: Persona;
persona1 = new Persona ("Juan", 45);
persona1.imprimir();

//persona1.edad=20;

/*console.log(persona1.getNombre());
console.log(persona1.getEdad());*/

let empleado1 = new Empleado('Ana María', 22, 'Asistente', 5000);

console.log{empleado1.getNombre()};
console.log{empleado1.getEdad()};
console.log{empleado1.getCargo()};
console.log{empleado1.getSalario()};
