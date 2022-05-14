// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The answer was 10. The .length method counts all characters within the string. Some may think 9 but the space counts as a character.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: the console is logging index 4 of the greeting variable which would be the o of Hello


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: The string "Ruby"
// b) Verify and explain: The string "Ruby" is at the index of 1 in the array and thhe console is logging the variable languages with a index of the variable index which is set to 1


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: I was wrong since .toUpperCase() is a method for strings not arrays. You got me there!


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: Either a variable || a number
// b) Verify and explain: Both wrong and right? I was thinking it might find the typeof dataTypes which is a variable or since the .length is finding the length of the array it would equal 3, which is a number.
