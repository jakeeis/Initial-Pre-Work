//In this exercise I learned that local variables will override global variables

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line


  var outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
