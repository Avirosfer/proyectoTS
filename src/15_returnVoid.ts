const calcTotal = (prices:number[]): string =>{
  let total = 0;
  prices.forEach(
    (item)=>{
      total += item;
    });
    return total.toString();
}

const respuesta = calcTotal([2, 4, 6, 8]);

console.log(respuesta);

const imprimeTotal = (prices: number[]):void=>{
  const rta = calcTotal(prices);
  console.log(`El total es: ${rta}`);
}

imprimeTotal([1, 3, 5]);
