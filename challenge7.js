// CHALLENGE 7:
// Write a method or function that determines how much a person will [pay in taxes in the United States]
// (https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2022)
// based on their annual income. 
// The method or function should accept a number representing the individual's annual income as an argument 
// and return the amount they will owe in taxes for that year.

// GOAL: Create a function that returns a number amount owed based on the annual income number input as the function's argument


// First I name a function taxesOwed(income)
// Then I create a series of if statements based on irs income thresholds
// if income > 215950, return (35/100)*income
// else if income > 170050, return (32/100)*income
// else if income > 89075, return (24/100)*income
// else if income > 41775, return (22/100)*income
// else if income > 10275, return (12/100)*income
// else, return (10/100)*income
// write a console.log statement that prints, using string interpolation "You owe ${taxesOwed(income)} to the IRS."

function taxesOwed(income) {
    if (income > 215950) {
        return ((35/100)*income).toFixed(2)
    } else if (income > 170050) {
        return ((32/100)*income).toFixed(2)
    } else if (income > 89075) {
        return ((24/100)*income).toFixed(2)
    } else if (income > 41775) {
        return ((22/100)*income).toFixed(2)
    } else if (income > 10275) {
        return ((12/100)*income).toFixed(2)
    } else {
        return ((10/100)*income).toFixed(2)
    }
}

console.log(`You owe ${taxesOwed(215951)} dollars to the IRS.`);
console.log(`You owe ${taxesOwed(215950)} dollars to the IRS.`);
console.log(`You owe ${taxesOwed(90000)} dollars to the IRS.`);
console.log(`You owe ${taxesOwed(89000)} dollars to the IRS.`);
console.log(`You owe ${taxesOwed(41800)} dollars to the IRS.`);
console.log(`You owe ${taxesOwed(10276)} dollars to the IRS.`);
console.log(`You owe ${taxesOwed(10000)} dollars to the IRS.`);

// NOTE: 
//      I noticed one of my results gave me a long running decimal
//      so I added the toFixed(2) method to each return statement
//      in order to round each result to an actual dollars and cents total


// node challenge7.js prints: 
// You owe 75582.85 dollars to the IRS.
// You owe 69104.00 dollars to the IRS.
// You owe 21600.00 dollars to the IRS.
// You owe 19580.00 dollars to the IRS.
// You owe 9196.00 dollars to the IRS.
// You owe 1233.12 dollars to the IRS.
// You owe 1000.00 dollars to the IRS.