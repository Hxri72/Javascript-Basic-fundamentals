var read=require('readline-sync');

console.log("Enter 2 numbers");

let value1= parseFloat(read.question());
let value2= parseFloat(read.question());

let sum = value1 + value2 ;

if(isNaN(sum)){
    console.log(`Your input is not a number`);
}else{
    console.log(`Result is : ${ sum }`);
}

