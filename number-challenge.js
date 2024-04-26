/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/
console.log("Number Challenge");
console.log(" ")

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

function difference(num1, num2) {
    return num1 - num2;
}

function product(num1, num2) {
    return num1 * num2;
}

function averageOfTwoNumbers(num1, num2) {
    return (num1 + num2) / 2;
}

console.log("Sum of three numbers:", sum(10, 5, 3));
console.log("Difference of 2 numbers:", difference(10, 5));
console.log("Product of 2 numbers:", product(10, 5));
console.log("Average of 2 numbers:", averageOfTwoNumbers(10, 5));