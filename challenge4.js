// CHALLENGE 4: Start with an array of hobbies. Print out only the words that end in "ing".

// GOAL: Create a variable "hobbies" with an array of actions, some being gerunds. Print only the gerunds

// First I define a variable hobbies then add an array of one-word strings, some of those strings ending in "ing"
// I write a for statement to loop through the array
// Within the for statement I write an if statement using the method endsWith()
// if endsWith("ing") is true of the element, the resulting console log statement will print that element in the array


// Here is my array of hobbies
var hobbies = ["running", "swimming", "pottery", "reading", "parkour", "architecture", "walking", "art"]

//Next I'll write a for statement that loops through the array
for (var i = 0; i < hobbies.length; i++) {
    //Now I write my if statement within the for statement
    if(hobbies[i].endsWith("ing") === true) {
        //Now the second half of the condtional will print any element ending in "ing" as the for statement loops through
        console.log(hobbies[i]);
    }
}

// node challenge4.js prints:
// running
// swimming
// reading
// walking


// Additional note: While I completed the challenge there is some weird wording in the challenge
//                  It says print only the WORDS ending in "ing", instead of only the STRINGS ending in "ing"
//                  While my answer satisfies both wordings, it made me curious about an element such as "Walking in the park" 
//                  If I wanted to print that string, I'd have to use the includes.("ing ") method 
//                  and add a space at the end of each element to make that work
//                  However even then, that would print the whole string instead of just the word "walking" which is what the challenge
//                  asks for. I assume thats just wonky wording and not the actual intent of the challenge.
//                  But if you'd like my to figure out a way to do that, I will
