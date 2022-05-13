export class Persona {
  private nombre: string;
  private edad: number;


constructor (nombre:string, edad:number){
    this.nombre = nombre;
    this.edad = edad;
}

public get getNombre(){
  return this.nombre;
}

public set setNombre(){
  return this.edad;
}




imprimir(){
   console.log(`Nombre: ${this.nombre} y edad ${this.edad}`);
  }
}
