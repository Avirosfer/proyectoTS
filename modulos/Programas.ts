import {Programas} from './App';

export const id_Programa= ():number  => 0;

export const nombre_Programa = ():string => "";

export const prgrms: Programas[] = [];

export const addPrograma = (programa:Programas): void =>{
    prgrms.push(programa);
}
