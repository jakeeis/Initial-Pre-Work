//In this exercise I learned more about case and if statement as well as how to
//use them practically in an algorithm

var count = 0;

function cc(card) {
  // Only change code below this line

  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      ++count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      --count;
      break;
    default:
      break;
  }

  if (count > 0){
    return count + " Bet";
  } else{
    return count + " Hold";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);
