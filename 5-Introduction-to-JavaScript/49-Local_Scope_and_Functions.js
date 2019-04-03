//In this exercise I learned how to create variables with local scope which can
//only be used in the function that they are created in

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test
