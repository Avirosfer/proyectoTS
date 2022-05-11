function createProducto(producto) {
    var dia = producto.createAt.getDate();
    var mes = producto.createAt.getMonth() + 1;
    var annio = producto.createAt.getFullYear();
    console.log("Fecha--> " + dia + "/" + mes + "/" + annio);
    return producto;
}
var product = {
    title: 'Camisa',
    createAt: new Date('2022/11/06'),
    stock: 1000,
    size: "2XL"
};
console.log(createProducto(product));
