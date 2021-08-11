//Day 0: Hello, world

function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
}

//Day 1: Data Types

    // Declare second integer, double, and String variables.
    let secondInt;
    let secondFloat;
    let secondString;
    // Read and save an integer, double, and String to your variables.
    secondInt = parseInt(readLine());
    secondFloat = parseFloat(readLine());
    secondString = readLine();
    
    // Print the sum of both integer variables on a new line.
    console.log(i + secondInt);
    // Print the sum of the double variables on a new line.
    let sum = d + secondFloat;
    console.log(sum.toPrecision(2));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secondString);

// Day 2: Operators
/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let tip = tip_percent/100 * meal_cost; 
    let tax = tax_percent/100 * meal_cost;

    let total_cost = meal_cost + tip + tax;
    total_cost = Math.round(total_cost);
    console.log(total_cost)

    return
}