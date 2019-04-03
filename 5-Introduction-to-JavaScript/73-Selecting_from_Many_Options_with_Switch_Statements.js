//In this exercise I learned about switch statements which check if a variable is
//equal to a number of specified values and performs the respective action

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val){
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
