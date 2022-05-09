let tallaCamisa: string;

let tallaCamisa2: 'S'|'M'|'L'|'XL';
tallaCamisa2: 'XL';

type tallaCamisa3 = 'S'|'M'|'L'|'XL';
type userId = string | number;

function greet(parametro1:userId, parametro2: tallaCamisa3){
  console.log(parametro1);
  console.log(parametro2)
}

greet(841026, "XL")

