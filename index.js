// problem 1
// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// We need to solve this using two methods
// using nested if else
// using logical operators----------------------------------------

// const number = 25

// if(number <15 && number%2 === 0){
//     console.log("a");
// }else if(number >15 && number%2 === 0){
//     console.log("b");
// }else if(number <10 && number%2 !== 0){
//     console.log("c");
// }else if(number >10 && number%2 !== 0){
//     console.log("d");
// }

// problem 2------------------------------------------------------
// answer should be: "Hi, my name is Farheena"
// use loop method


// const arr = ['Hi','my','name','is','Farheena']
// let result =[];
// for(i = 0; i < arr.length; i++ ){ 
//     const element = arr[i];
//     if(i === 0){
//         result = result +element +"," 
//         continue;
//     }
//     result=result +" "+element   ;
//     // console.log(arr[i])
// }
// console.log(result +".")

//------------------------------------------------------------------

//problem 3
//global scope and local scope----------------------------------------

// Global scope — Global scope contains all of the things defined outside of all code blocks.
// A code block simply consists of grouped statements inside curly braces ({ }). if statement, loops, function are examples of structure that 
//create a code block. A global variable has global scope. A global variable is accessible from anywhere in the code.

// var h = 10
// function x(num2){
//     return num2+10
// }
// console.log(x(h))


// // Local Scope — Local scope contains things defined inside code blocks. A local variable has 
// // local scope. A local variable is only accessible where it’s declared.
// function h(){
//     const j = 6
// }



//-------------------------------------------------------------------
//problem 4
//create a variable called myName and store your name inside it.
//then, add Mr./Miss. before it and store the result in
//a new variable with the same name i.e. myName.----------------------


//  let myName= "Soniya";
//  myName = "Miss "+myName 
//  console.log(myName)


//---------------------------------------------------------------------
// problem 5
// Find sum and multiplication of all natural numbers from 10 to 20


// let sum = 0;
// let multiplication = 1
// for (let number = 10; number <= 20; number++) {
//     sum = sum + number
//     multiplication = multiplication * number
// }

// console.log(sum, multiplication);




//------------------------------------------------------------------
// problem 6
// Check whether a given year is a leap year
// create a variable and store a random year in it
// now write code, which should return true or false, depending whether the value in the above
// variable is leap year or not---------------------------------------------------------------


// const numb = 2022

// if(numb%4 ===0 || (numb %400 ===0 && numb%100 !== 0)){
//     console.log(numb + "is a leap year")
// }else{
//     console.log(numb + " is not a leap year")
// }


//------------------------------------------------
// problem 7
// find the area of a triangle. Lengths of its sides are 5, 6, 7



// const side1 = 15;
// const side2 = 16;
// const side3 = 17;
// const s = (side1 + side2 + side3) / 2;
// const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
// console.log(area);


//---------------------------------------------------------------------------------------
// problem 8
// create two variables and store numbers in them.
// Now, write code, which return true if one of the variable is 50 or if their sum is 50.
// Otherwise, you need to return false.
// Also handle edge cases
// (in real world, these two numbers wil be supplied by the users.
// Now think what if they supply something which is not a number ?)


// const num1 = 55;
// const num2 = 35;

// if ((num1 + num2) === 50 || num1 === 50 || num2 === 50) {
//     console.log(true);
// }
//  else {
//     console.log(false)
// }


//--------------------------------------------------------------------------------------
// problem 9
// create a variable and store a number inside it
// write program to check whether a given variable is between 100 and 200
// write program to check whether a given variable is between 100 and 200 or 400 and 500
// handle edge cases--------------------------------------------------------------


// const num = 350;
// 

// if (num > 100 && num < 200) {
//     console.log(true)
// } else

// if ((num > 100 && num < 200) || (num > 400 && num < 500)) {
//     console.log(true);
// } else if ((num < 100) || (num > 200 && num < 400) || (num > 500)) {
//     console.log("Give number between 100 and 200 OR 400 and 500");
// } else {
//     console.log(false);
// }


// //----------------------------------------------------------------------------------------
// problem 10
// you have 3 numbers.
// write a program which can find the largest number


// const a = 53
// const b = 42
// const c = 5

// // method 1
// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else if (c > a && c > b) {
//     console.log(c);
// }


//---------------------------------------------------------------------------------
// problem 11
// create two variables and assign numbers to them
// now write a code which returns true if one of them is 8 or their sum or difference is 8. Otherwise
// it should return false


// const app = 16;
// const ball = 25;

// if (app === 8 || ball === 8 || app + ball === 8 || Math.abs(app - ball) === 8) {
//     console.log(true);
// } else {
//     console.log(false);
// }









