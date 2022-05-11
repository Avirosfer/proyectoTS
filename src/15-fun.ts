
const createProducto2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: TSizes
)=>{
  return{
    title,
    createAt,
    stock,
    size}
}

let producto2 = createProducto2('Pantalon', new Date, 26, "SM");

