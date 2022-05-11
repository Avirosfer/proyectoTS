let myNumber2: number | null = null;
let myString2: string | undefined = undefined;

/*console.log(myNumber2);
console.log(myString2);

myNumber2 = 10
myString2 = "Rock";

console.log(myNumber2);
console.log(myString2);*/


/*function hi(name: string | null){
  let hello = 'hola ';

  if(name){
    hello += name.toUpperCase();
  }else{
    hello +='nobody'
  }
  console.log(hello);
}

hi ('Juan');
hi (null);*/

function hi(name: string | null){
    let hello = 'hola ';
    hello += name?.toUpperCase || 'nobody'
    console.log(hello);
}

hi ('Ana')
hi(null);



