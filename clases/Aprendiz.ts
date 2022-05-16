import {Fichas} from './Fichas';

class Aprendiz extends Fichas {
    private _id_aprendiz: number;
    private _nombre_Aprendiz: string;

    constructor(id_programa:number, Nombre_programa: string, id_Ficha:number, fecha_inicio: Date, id_aprendiz:number, nombre_Aprendiz: string){
        super(id_programa, Nombre_programa, id_Ficha, fecha_inicio);
        this._id_aprendiz = id_aprendiz;
        this._nombre_Aprendiz = nombre_Aprendiz;
    }

    public get id_aprendiz():number{
        return this._id_aprendiz;
      }
      
    public set id_aprendiz(idApr:number){
            this._id_aprendiz = idApr;
      }

    public get nombre_aprendiz():string{
        return this._nombre_Aprendiz;
      }
      
    public setnombre_Aprendiz(nomApr:string){
            this._nombre_Aprendiz = nomApr;
      
    }

}