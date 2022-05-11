/*sm, rojo -- me azul -- la - verde  --2xl - purpura*/
/*Crear un objeto que contenga todos los atributos*/


type TSizes = "SM" | "ME" | "LA" | "2XL";
/*type TColor = "Rojo" | "Azul" | "Verde" | "Purpura";*/
/*let color = "string"*/

function createProducto(title: string, createAt: Date, stock: number, size: TSizes, color:string)
{
  switch (size) {
     case "SM":
     color = "Rojo";
     break;

     case "ME":
     color = "Azul";
     break;

     case "LA":
     color = "Verde";
     break;

     case "2XL":
     color = "Purpura";
     break;
      
  }

  return{
    
    
    color
  }
}

let producto = createProducto('Pantalon', new Date, 26, "SM", "");
console.log(producto);

/*console.log(createProducto('Camisa', new Date(), 1000, "2XL", "color"))*/

