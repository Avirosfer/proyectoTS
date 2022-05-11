[];
[
    { data1: "Dark Souls", data2: true, data3: 10 },
    { data1: "Hollow Knight", data2: true, data3: 9.99 },
    { data1: "Celeste", data2: true, data3: 9.989 },
];
function agregarElementos(elemento) {
    var name = elemento.data1;
    var ranking = elemento.data2;
    var rating = elemento.data3;
    console.log("Video Juego--> " + name + "/" + ranking + "/" + rating);
    return elemento;
}
var videoGame = {
    data1: 'Life is strange',
    data2: false,
    data3: 6.5
};
console.log(agregarElementos(videoGame));
function printValues() {
    videoGame.forEach(function (item) {
        console.log('\n---------------------------------\n');
        console.log(item);
    });
}
