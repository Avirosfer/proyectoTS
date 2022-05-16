export class Persona {
  private nombre: string;
  private edad: number;


constructor (nombre:string, edad:number){
    this.nombre = nombre;
    this.edad = edad;
}

public get getNombre():string{
  return this.nombre;
}

public set setNombre(name:string){
  this.nombre = name;
}


imprimir(){
   console.log(`Nombre: ${this.nombre} y edad ${this.edad}`);
  }
  
  
}

