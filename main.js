const reader = require("readline-sync");
const util = require("./myUtils.js");

num1 = reader.questionInt("Please insert your number1 = ");
num2 = reader.questionInt("Please insert your number2 = ");

util.includeRange(num1, num2);