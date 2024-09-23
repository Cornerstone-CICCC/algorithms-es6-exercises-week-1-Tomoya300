/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function laugh(number) {
    let sound = ""
    for (let i = 1; i <= number; i++) {
        sound += "ha"
    }
    return sound + "!"
}


function emotion(feeling, laFunc) {
    return "I am " + feeling + "," + laFunc
}

console.log(emotion("happy", laugh(3)))
