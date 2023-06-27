// CHALLENGE 5: Start with an array of travel destinations. 
//              Print every travel destination in alphabetical order embedded in a sentence using string interpolation. 
//              For example, if the destination is "New York City", 
//              print something like "The next place I want to visit is New York City!" 


// GOAL: Create an array of locations then sort the elements alphabetically and print them in a sentence using interpolation

// First I create a variable "destinations" with an array of strings, not in alphabetical order
// Use the sort() method to reorder the array alphabetically
// Write a for statement to loop through this now overwritten, alphabetically sorted array 
// Use string interpolation in the console.log statement to print a string with each element embedded in it
// i.e. console.log(`The next place I want to visit is ${destinations[i]}!`)

var destinations = ["Zimbabwe", "Alaska", "Dubai", "Cairo", "Guyana", "Ecuador", "France", "Botswana"];
destinations.sort();
for (var i = 0; i < destinations.length; i++) {
    console.log(`The next place I want to visit is ${destinations[i]}!`);
}

// node challenge5.js prints:
// The next place I want to visit is Alaska!
// The next place I want to visit is Botswana!
// The next place I want to visit is Cairo!
// The next place I want to visit is Dubai!
// The next place I want to visit is Ecuador!
// The next place I want to visit is France!
// The next place I want to visit is Guyana!
// The next place I want to visit is Zimbabwe!