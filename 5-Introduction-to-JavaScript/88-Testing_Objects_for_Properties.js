//In this exercise I learned how to check if an object has a property or not

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  } else{
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");
