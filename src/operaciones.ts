export function sum(a:number, b:number):number{
  return a + b;
}

export function res(a:number, b:number):number{
  return a - b;
}

export function mul(a:number, b:number):number{
  return a * b;
}

  export function dvr(a:number, b:number):number | string {
    if(b === 0) {
        return("No se puede dividir por cero");
    } else {
        return a / b;
    }
}
