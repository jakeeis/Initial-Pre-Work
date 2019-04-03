//In this exercise I learned how to create a variable with global scope which
//can be used anywhere

// Declare your variable here


function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
var myGlobal = 10;
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
