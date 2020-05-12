let amount = prompt("Input amount!");

let from = prompt("From?");

let to = prompt("to?");

let usdVndRatio = 23161.39;

result = 0;

if (from === "usd" && to === "vnd") {
  result = usdToVnd();
} else if (from === "vnd" && to === "usd") {
  result = vndToUsd();
} else result = "Wrong type!";

function usdToVnd() {
  return amount * currencyRatio;
}

function vndToUsd() {
  return amount / currencyRatio;
}

console.log(from, " to ", to, "is ", result);
