var myNumber2 = null;
var myString2 = undefined;
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
function hi(name) {
    var hello = 'hola ';
    hello += (name === null || name === void 0 ? void 0 : name.toUpperCase) || 'nobody';
    console.log(hello);
}
hi('Ana');
hi(null);
