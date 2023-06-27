// CHALLENGE 6: 
//        Given a sentence with only lowercase letters, 
//        print the same sentence with the first letter of every word capitalized. 
//        For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

// GOAL: Start with a string that is a completely lowercase sentence
//       Turn that into a string where every first letter in each word is capitalized


// First I'll define a variable "sentence" with a string like "turing is the best."
// Next I'll use the split method to make each word an individual element in a array
// under a new variable "words"
// Next I'll write a for statement to loop through this new array
// Using the toUpperCase() method I'll capitalize the 0 position of every string
// then add that capitalized character back to the rest of the string
// using concatenation with the substring method starting from the 1 position
// the for statement will loop through the array doing this to every element
// Finally I will join the elements into a single string using the join method
// define that as a new variable "newSentence" and print that new variable
// using "console.log(newSentence)"

var sentence = "turing is the best";
var words = sentence.split(" ");

for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

var newSentence = words.join(" ");
console.log(newSentence);

// node challenge6.js prints:
// Turing Is The Best