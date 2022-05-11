
type videoJuegos = {

  data1: string;
  data2: boolean;
  data3: number;
  
}

[]; 

[
  {data1: "Dark Souls", data2: true, data3:10 },
  {data1: "Hollow Knight", data2: true, data3:9.99 },
  {data1: "Celeste", data2: true, data3:9.989 },
];

function agregarElementos(elemento: videoJuegos):videoJuegos{
  let name = elemento.data1;
  let ranking = elemento.data2;
  let rating = elemento.data3;
  console.log("Video Juego--> " + name+ "/"+ranking+ "/"+rating);
  return elemento;
}

let videoGame: videoJuegos = {

  data1: 'Life is strange',
  data2: false,
  data3: 6.5

}

console.log(agregarElementos(videoGame));

function printValues(): void{

  videoGame.forEach(item =>{
      console.log('\n---------------------------------\n')
      console.log(item)
  });
}
 