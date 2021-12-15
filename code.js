// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// function expression version:
// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(input) {
    return ("Hello, " + input + "!");
}

sayHello("Jane")
sayHello("Alex")
sayHello("Pat")

function isFive(number) {
    if (number === 5) {
        return true;
    } else {
        return false;
    }
}


function isEven(number) {
    if (typeof number == "boolean") {
        return false;
    } else if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function isVowel(letter) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    return vowels.includes(letter);
}



function add(a, b) {
    if (typeof (a + b) !== "number") {
        return isNaN(NaN);
    } else {
        return (a + b);
    }
}

console.log(add())
