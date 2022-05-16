export class Programas{

    private _id_programa: number;
    private _Nombre_programa: string;

    constructor(id_programa:number, Nombre_programa: string){
        this._id_programa = id_programa;
        this._Nombre_programa = Nombre_programa;
    }

    public get id_Programa():number{
        return this._id_programa;
      }
      
    public set id_Programa(idProg:number){
            this._id_programa = idProg;
      }

    public get Nombre_programa():string{
        return this._Nombre_programa;
      }
      
    public set Nombre_programa(nomPro:string){
            this._Nombre_programa = nomPro;
      }

    /*printPrograma(id_programa: number, Nombre_programa: string):void{
        console.log(`ID Programa: ${this._id_programa} 
                     Nombre del Programa: ${this._Nombre_programa}`);
    }*/

}

type Programa = {
    id_programa: number,
    Nombre_programa: string
}

let arrayPrograma: Programa[] = [];

function addPrograma(id_programa:number, Nombre_programa: string):void{
    let programa: Programa = {
        id_programa: id_programa,
        Nombre_programa: Nombre_programa
    }

    arrayPrograma.push(programa)
}


function printPrograma():void{
    arrayPrograma.forEach(prgrm=>{
        console.log(prgrm)
    });
}


addPrograma(50, 'ADSI');
addPrograma(60, 'Gestión humana');
addPrograma(70, 'Contabilidad');
addPrograma(80, 'Entrenamiento físico');

printPrograma()











