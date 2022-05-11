type TSize = "SM" | "ME" | "LA" | "2XL";

type Producto = {

      title: string,
      createAt: Date,
      stock: number,
      size: TSize,
      
}

function createProducto(producto: Producto):Producto{
    let dia = producto.createAt.getDate();
    let mes = producto.createAt.getMonth() + 1;
    let annio = producto.createAt.getFullYear();
    console.log("Fecha--> " + dia+ "/"+mes+ "/"+annio);
    return producto;
}

let product: Producto = {

  title: 'Camisa',
  createAt: new Date ('2022/11/06'),
  stock: 1000,
  size: "2XL"

}

console.log(createProducto(product));
