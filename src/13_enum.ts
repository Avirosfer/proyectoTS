enum PhotoOrientation{
    Landscape = 0,
    Portrait = 1,
    Square = 2,
    Panorama = 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[landscape]);

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  USA = 'usa',
  España = 'esp',

}

const country: Country = Country.Colombia;
console.log('country', country);
