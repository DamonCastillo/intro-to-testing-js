// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function plusOne(num) {
    if (typeof num === "number") {
        return num + 1;
    }
    return 0;
}

function sayHello(x) {
    if (x === true) {
        return "Hello, World!"
    } else if (x === false) {
        return "Hello, World!"
    }
    return "Hello, " + x + "!";
}

function isFive(num) {
    return parseFloat(num) === 5;
}
