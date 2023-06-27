// CHALLENGE 1: Given an array of strings, print only the strings that have exactly 4 characters.

// Goal: I must create an array containing strings of various lengths and find a way to print every element in the string 
// that has exactly 4 characters


// First I create a variable with an array of strings, ensuring that some elements are 4 characters long
// Next I write a for statement that will loop through the array
// The for statement should contain an if statement that only accepts strings of exactly 4 characters, i.e "if (variableName[i].length === 4)"" 
// the final console.log statement will then have something like "variableName[i]"

var names = ["Josh", "Jason", "Jack", "Thomas", "Jim", "John", "Paul", "Paulie"];
for (var i = 0; i < names.length; i ++) {
    if (names[i].length === 4) {
        console.log(names[i]); 
    }
}