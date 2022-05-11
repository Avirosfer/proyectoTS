/*
1.Crear una función que agregue elementos a un array 
que contiene tuplas de la forma "string, boolean, number

2. Agregar 4 elementos al array la función cuatro veces
3. Mostrar todo el array
4. Mostrar elemento por elemento del array
*/

let arreglo:[string, boolean, number] [] = [];

function insert (elem1: string, elem2: boolean, elem3: number){
  arreglo.push([elem1, elem2, elem3]);
}

insert("Dark Souls", true, 2011);
insert("Dark Soul II", false, 2014);
insert("Dark Soul III", true, 2016);
insert("Elden Ring", true, 2022);

console.log(arreglo);

arreglo.forEach(function(elemento) {
  console.log(elemento[0]);
  console.log(elemento[1]);
  console.log(elemento[2]);
});

arreglo.forEach((elemento)=>{
  console.log(`
    Juego: ${elemento[0]}
    Activo: ${elemento[1]}
    Año: ${elemento[2]}
`);
})





