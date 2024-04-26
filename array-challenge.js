const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/

console.log("Array Challenge")
console.log(" ")


function display(numbers){
    const even = [];
    const odd = [];

    for(let i = 0; i <= numbers.length; i++){
        if(numbers[i] %2 === 0){
            even.push(numbers[i]);
        }else {
            odd.push(numbers[i]);
        }
    }

      // Display even numbers
      console.log("Even Numbers:",even)

      // Display odd numbers
      console.log("Odd numbers:", odd);
    
}
display(arr)
console.log(" ")
