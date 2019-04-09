//In this exercise I learned about the differences between the the scope of a
//variable declared with var and with let. Variable declared with var are scoped
//globaly or within the function. Variables declared with let are scoped globaly
//or within the block/statment/function.

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
