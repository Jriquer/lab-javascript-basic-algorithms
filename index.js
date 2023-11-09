// iteration 1

let hacker1 = " Jazz"
let hacker2 = " Daniel"

console.log(`The drivers name is ${hacker1}`)
console.log(`The navigators name is ${hacker2}`)


/*
console.log("The drivers name is" + hacker1)

let variable1 = 99

console.log("The driver's name is" + variable1)
console.log(variable1)
*/


// iteration 2

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {

  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) 
}

//console.log(hacker1.length > hacker2.length)


// iteration 3
/*
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
*/


let newString = ''
 for (let i = 0; i < hacker1.length; i++) {


  newString += `${hacker1[i].toUpperCase()} `
}

let reversed = ''

for (let i = hacker2.length - 1; i >= 0; i--) {

}

if (hacker1 === hacker2) {
    console.log("What?! you both have the same name?")

} else if ((hacker1.localeCompare(hacker2)) > 0) {
    console.log("the drivers name goes first")

} else {

  console.log("yo, the navigators name goes first, definitely.")
}


console.log(newString)
console.log(reversed)