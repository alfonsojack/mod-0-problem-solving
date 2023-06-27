// CHALLENGE 3: Write a method or function that removes all instances of the letter <strong>s</strong> in a string. 
//              The method or function should accept a string as an argument and return the same string 
//              with every instance of the letter <strong>s</strong> removed.

// GOAL: Create a function that eliminates the letter "s" from any string then input strings as an argument to test the function

// Name a function "removeS(string)"
// in the return statement, use the preexisting replace method with 
// the global attribute feature to replace any instance of "s" in string with ""
// write a few console log statements with strings including the letter s to test
// write one without the letter s as a control group


// NOTE: the challenge specifies removing the letter "s" not the character lowercase "s"
//       so I added another replace method to also remove capital "S" from the string

function removeS(string) {
    return string.replace(/s/g, "").replace(/S/g, "");
}

console.log(removeS("Sassafrass"));
console.log(removeS("Sandals on the sandy beach on Sunday"));
console.log(removeS("Joey stole some salad from Joshua Wasserman's son"));
console.log(removeS("Birthday Party"));