//In this exercise I learned how to nest multiple ternary operators so that multiple
//conditions could be tested for

function checkSign(num) {
  return num > 0 ? "positive" : num === 0 ? "zero" : "negative";
}

checkSign(10);
