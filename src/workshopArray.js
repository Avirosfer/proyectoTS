/*
1.Crear una función que agregue elementos a un array
que contiene tuplas de la forma "string, boolean, number

2. Agregar 4 elementos al array la función cuatro veces
3. Mostrar todo el array
4. Mostrar elemento por elemento del array
*/
var arreglo = [];
function insert(elem1, elem2, elem3) {
    arreglo.push([elem1, elem2, elem3]);
}
insert("Dark Souls", true, 2011);
insert("Dark Soul II", false, 2014);
insert("Dark Soul III", true, 2016);
insert("Elden Ring", true, 2022);
console.log(arreglo);
arreglo.forEach(function (elemento) {
    console.log(elemento[0]);
    console.log(elemento[1]);
    console.log(elemento[2]);
});
arreglo.forEach(function (elemento) {
    console.log("\n    Juego: ".concat(elemento[0], "\n    Activo: ").concat(elemento[1], "\n    A\u00F1o: ").concat(elemento[2], "\n"));
});
