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
isFive(5)