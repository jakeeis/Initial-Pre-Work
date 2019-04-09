//In this exercise I learned that while a const object will always point to the
//same object, the individual elements can be changed

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  s.sort();
  // change code above this line
}
editInPlace();
