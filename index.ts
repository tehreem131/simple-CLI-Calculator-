#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { massage: "Enter first number", type: "number", name: "firstNumber" },
  { massage: "Enter second number", type: "number", name: "secondNumber" },
  {
    massage: "Select one of tha operators to perform operators",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

console.log(answer);

//conditional statment
 if (answer.operator === "Addition") {
    console.log( answer.firstNumber + answer.secondNumber);
 }else if(answer.operator === "Subtraction") {
     console.log( answer.firstNumber - answer.secondNumber); 
 }else if (answer.operator === "Multiplication") {
     console.log(answer.firstNumber * answer.secondNumber);
 }
 else if (answer.operator === "Division") {
     console.log(answer.firstNumber / answer.secondNumber);
 }else {
     console.log("please select valid operator")
 }
