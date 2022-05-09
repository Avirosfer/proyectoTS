var userId;
userId = 1212;
userId = "Rock";
function greeting(myText) {
    if (typeof myText === 'string') {
        console.log("string: ".concat(myText.toLowerCase()));
    }
    else if (typeof myText === 'number') {
        console.log("number: ".concat(myText.toFixed(1)));
    }
    else {
        console.log("boolean: ".concat(myText));
    }
}
greeting('Nicolas');
greeting(12.12121212121212);
greeting(true);
