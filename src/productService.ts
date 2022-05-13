import {Producto} from './tallas';

export const productos: Producto[] = [];

export const addProducto = (producto:Producto): void =>{
    productos.push(producto);
}

export const calcularStock = ():number => {
  let total = 0; 
  productos.forEach((productos)=>{
    total +=producto.stock;
  });
  return total;
}

