var input= require (`readline-sync`);

let num1;
let num2;
let num3;
let sum;
let avg;

console.log("Enter 3 numbers");

num1 = parseFloat(input.question());
num2 = parseFloat(input.question());
num3 = parseFloat(input.question());

sum = num1+num2+num3;

avg = sum/3;

if(isNaN(sum)){
    console.log("Your input is not a number");
}else{
    console.log(`Average of 3 numbers is : ${avg}`);
}



