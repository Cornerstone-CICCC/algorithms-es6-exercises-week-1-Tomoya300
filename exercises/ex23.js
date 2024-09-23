
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a loop under each comment in the file.
// Under the first, write a while loop that prints out each item of ingredients.
let i = 0
while (i < ingredients.length) {
    console.log(ingredients[i])
    i++
}

// Under the second, write a for loop that does the same thing.
for (g = 0; g < ingredients.length; g++) {
    console.log(ingredients[g])
}

// And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
let k = ingredients.length - 1
while (k >= 0) {
    console.log(ingredients[k])
    k--
}


