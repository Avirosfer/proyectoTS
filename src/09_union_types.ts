let userId: string | number;
userId = 1212;
userId = "Rock";


function greeting (myText: string | number | boolean){
  if (typeof myText === 'string'){
    console.log(`string: ${myText.toLowerCase()}`);
  } else if (typeof myText === 'number'){
    console.log(`number: ${myText.toFixed(1)}`);
  }else{
    console.log(`boolean: ${myText}`);
  }
}


greeting('Nicolas');
greeting(12.12121212121212);
greeting (true);
