// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Create a function isBoilingPoint that takes in a parameter of temperature
// if temperature is at boiling point then we want it to return a string telling us temperature is equal to boilingPoint 
// if temperature is above boiling point we want to return a string telling us temperature is above boilingPoint
// if temperature is any other number lower than boilingPoint return a string telling us temperature is below boilingPoint
// call the function in the console with temperature as your parameter

const isBoilingPoint = (temperature) => {
    if(temperature === temp3) {
        return `${temperature} is at boiling point`
    } else if(temperature >= temp3) {
        return `${temperature} is above boiling point`
    } else {
        return `${temperature} is below boiling point`
    }
}

// console.log(isBoilingPoint(temp1))
// Output: variable dependant

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// Create a function names combinedNumbers that takes in the parameter array1 and array2
// create a new local scope variable numConcat that concatenates array1 and array2
// return numConcat with a length method
// run the function in the console with variables myNumbers1 and myNumbers2 as parameters
// ??? 
// Profit

const combinedNumbers = (array1, array2) => {
    let numConcat = array1.concat(array2)
    return numConcat.length
}

// console.log(combinedNumbers(myNumbers1, myNumbers2))
// Output: 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"

// Create a function stringReverse that takes in the parameter cohort
// create a local scope variable called cohortArray that takes in cohort and splits it into an array by characters
// create a local scope variable reversedArray that stores cohortArray reversed
// create a local scope variable cohortString that stores the reversedArray and joins it together by characters to produce a string
// return cohortString
// run the fuction in the console with currentCohort as the parameter

const stringReverse = (cohort) => {
    let cohortArray = cohort.split('')
    let reversedArray = cohortArray.reverse()
    let cohortString = reversedArray.join('')
    return cohortString
}

// console.log(stringReverse(currentCohort))
// Output: "2202 eilrahC"

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Create a function evenOrOdd that takes in array as a parameter
// have a loop iterate through the array and stop once it reaches the length of array 
// have a conditional statement ask if the current index of the array is even and console log the string even
// if the array is odd conole log the string odd 
// run the function with the parameter of myArray

const evenOrOdd = (array) => {
    for(i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            console.log("even")
        } else if (array[i] % 2 === 1) {
            console.log("odd")
        }
    }
}

// evenOrOdd(myArray)

// Output: 
// odd
// even
// odd
// even
// odd
// even

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// Create a function subtractSet that takes in set1 and set2 
// make a conditional statement that determines if set1 is greater than set2 if it is then subtract set1 from set2 and store the output in a variable newNumber then return it 
// if set1 is less than set2 then subtract set2 from set1 and store the output in a variable newNumber2 and return it
// run the function in the console with the test set variables as parameters

const subtractSet = (set1, set2) => {
    if(set1 > set2) {
        let newNumber = set1 - set2
        return newNumber
    } else if(set1 < set2) {
        let newNumber2 = set2 - set1
        return newNumber2
    }
}

// console.log(subtractSet(number1, number2))
// console.log(subtractSet(number3, number4))
