// // Condition
// // Write your code below each problems:

// /*
// Write a program that asks the user his/her age and check for the following conditions :

// - `if` the age is between 12-55 then print the message "You can participate in the marathon".
// - `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
// - `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
// - `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
// 👇
// */

let age= +prompt("Enter your age");
if(age>=12 && age<=55){
  alert("You can participate in the marathon");
}
else if(age>=4 && age<=11){
  alert("You are too young to participate in the marathon");
}
else if(age<4){
  alert("Hey Kiddo! Can You Walk ?");
}
else if(age>55){
  alert("You are too old to participate in the marthon");
}
else {
  alert("invalid age");
}
// // Loops
// /*
// Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

// Example:
// n = 1 => output: hello
// n = 7 => output: heeeeeeello
// 👇
// */
// // [Your code goes here]

let num = +prompt("Enter number of e's");
let val1= "h";
let val2= "llo"
let e= "e";
while(num>1){
  e= e + "e";
  num--;
}
let sum= val1 + e + val2;
alert(sum);
// /*
// Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
// 👇
// */
// // [Your code goes here]
let no= +prompt("Enter the number of natural numbers");
sum=0;
i=1;
while(i<=no){
  sum=sum+i;
  i++;
}
alert(sum);
// /* Switch Statement

//  🎖Using switch statement do the following

// Take a number value from user and alert the message if it matches the conditions.
// * [ ] ONE, if `number` is equal to 1.
// * [ ] TWO, if `number` is equal to 2.
// * [ ] THREE, if `number` is equal to 3.
// * [ ] FOUR, if `number` is equal to 4.
// * [ ] FIVE, if `number` is equal to 5.
// * [ ] SIX, if `number` is equal to 6.
// * [ ] SEVEN, if `number` is equal to 7.
// * [ ] EIGHT, if `number` is equal to 8.
// * [ ] NINE, if `number` is equal to 9.
// * [ ] PLEASE TRY AGAIN, if  is none of the above.

// */
// // [Your code goes here]
  let userNo = +prompt("Enter the number");
  switch(userNo){
    case 1:
      alert("number is equal to 1");
      break;
    case 2:
      alert("number is equal to 2");
      break;
    case 3:
      alert("number is equal to 3");
      break;
    case 4:
      alert("number is equal to 4");
      break;
    case 5:
      alert("number is equal to 5");
      break;
    case 6:
      alert("number is equal to 6");
      break;
    case 7:
      alert("number is equal to 7");
      break;
    case 8:
      alert("number is equal to 8");
      break;
    case 9:
      alert("number is equal to 9");
      break;
    default:
      alert("try again");
  }
// /*
// 🎖Using switch statement do the following

// Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
// * [ ] `AA` if `marks` is greater than 90.
// * [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
// * [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
// * [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
// * [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
// * [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
// * [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
// * [ ] `FF` if `marks` is less than or equal to 30
// */

// // [Your code goes here]
let marks = +prompt("Enter the number");
  switch(true){
    case marks>90:
      alert("AA");
      break;
    case marks>80 && marks<=90:
      alert("AB");
      break;
    case marks>70 && marks<=80:
      alert("BB");
      break;
    case marks>60 && marks<=70:
      alert("BC");
      break;
    case marks>50 && marks<=60:
      alert("CC");
      break;
    case marks>40 && marks<=50:
      alert("CD");
      break;
    case marks>30 && marks<=40:
      alert("DD");
      break;
    case marks<30:
      alert("FF");
      break;
    default:
      alert("try again");
  }
// /*
//  🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
// */
// // [your code goes here]
let number1 = +prompt("Enter first number");
let number2 = +prompt("Enter second number");
if(number1 > number2){
  alert(`${number1} is greater than ${number2}`);
} else {
  alert(`${number2} is greater than ${number1}`);
}
// /*
// 🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
// */
// // [Your code goes here]
let numA= +prompt("Enter first number");
let numB= +prompt("Enter second number");
let numC= +prompt("Enter Third number");
alert("1- Addition, 2- subtraction 3- product");
let ops= +prompt("Enter operation");
let add= numA + numB + numC;
let sub= numA - numB - numC;
let mul= numA * numB * numC;

switch(ops){
    case 1:
      alert(add);
      break;
    case 2:
      alert(sub);
      break;
    case 3:
      alert(mul);
      break;
    default:
      alert("try agin")
}
// /* Calculator
//  🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

//   ⛑ Rule
//     * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
//   ⚡️ Operations
//     * [ ] Add
//     * [ ] Sub
//     * [ ] Mul
//     * [ ] Div
// */

let first= +prompt("Enter first number");
let second= +prompt("Enter second number");


alert("1- Addition, 2- subtraction 3- product 4-Divide");
let opss= +prompt("Enter operation");
if(opss == 1){
   alert(`The sum is ${first + second}`);
}else if(opss == 2 && first>second){
  alert(`The sub is ${first - second}`);
}else if(opss == 3){
  alert(`The mul is ${first * second}`);
}else if(opss == 4 && first>second){
  alert(`The Div is ${first / second}`);
}else{
  alert(`Invalid entry or first number greater than second`);
}
// [Your code goes here]
