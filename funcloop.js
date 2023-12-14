// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.

function numArray(num) {
    for (let i = 0; i < num.length; i++) {
        console.log(num[i])
    }
}
numArray([234, 'zainab', true])