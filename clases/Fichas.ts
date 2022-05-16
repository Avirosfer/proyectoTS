import {Programas} from './App';


export class Fichas extends Programas{
    private _id_Ficha: number;
    private _fecha_inicio: Date;

    constructor(id_programa:number, Nombre_programa: string, id_Ficha:number, fecha_inicio: Date){
        super(id_programa, Nombre_programa);
        this._id_Ficha = id_Ficha;
        this._fecha_inicio = fecha_inicio;
    }

    public get id_Ficha():number{
        return this._id_Ficha;
      }
      
    public set id_Ficha(idFic:number){
            this._id_Ficha = idFic;
      }

    public get fecha_inicio():Date{
        return this._fecha_inicio;
      }
      
    public set fecha_inicio(fecIni:Date){
            this._fecha_inicio = fecIni;
      }
}