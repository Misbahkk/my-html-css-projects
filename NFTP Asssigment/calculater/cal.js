// function fn1() {
//   var a = document.getElementById("t1");
//   var b = a.value.toUpperCase();

//   document.getElementById("d1") = b;
//   console.log(b);
// }

var resultElement = document.getElementById("result");
var currentExpression = "";

function appendNumber(number) {
  currentExpression += number;
  updateResult();
}

function appendOperator(operator) {
  currentExpression += " " + operator + " ";
  updateResult();
}

function appendDecimalPoint() {
  currentExpression += ".";
  updateResult();
}

function calculateResult() {
  try {
    var result = eval(currentExpression);
    currentExpression = result.toString();
    updateResult();
  } catch (error) {
    currentExpression = "";
    updateResult("Error");
  }
}

function clearResult() {
  currentExpression = "";
  updateResult();
}

function updateResult(message = "") {
  resultElement.value = currentExpression || message;
}
