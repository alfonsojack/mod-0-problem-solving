// CHALLENGE 2: Start with an array of strings with a mix of uppercase and lowercase letters. 
//              Print every word in all lowercase letters.


// GOAL: I must declare a variable containing an array of strings with letters that are uppercase and lowercase 
//       then use a method to print every element in the string as completely lowercase

// First I create a variable with an array of strings, mixing capitalized letters with lowercase letters in each element
// Second I will create a for statement to loop through the array
// Finally I will use the toLowerCase() method within a console log statement to modify those strings to be all lowercase 
// i.e. "words[i].toLowerCase()"

var words = ["mAgNesium", "NeWaRk", "jUne", "JoYFulnESS"];
for(var i = 0; i < words.length; i++) {
    console.log(words[i].toLowerCase());
}
