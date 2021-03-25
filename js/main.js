let amountIn = document.getElementById("inputAmount"); //get input amount
let resultArea = document.getElementById("resultArea"); //show output amout
let inputC = document.getElementById("cin"); //get currency type in
let outputC = document.getElementById("cout"); // get currency type out
let result = ""; // value assigned to function
let amountOut = 0; //value after converting
const currencyRatio = {
  vnd: {
    usd: 0.000043,
    krw: 0.051,
    eur: 0.000039,
    vnd: 1,
  },
  usd: {
    krw: 1193.27,
    eur: 0.9,
    vnd: 23235.5,
  },
  krw: {
    usd: 0.00084,
    eur: 0.00075,
    vnd: 19.47,
  },
};

function usd2Vnd() {
  amountOut = amountIn.value * currencyRatio.usd.vnd;
  resultArea.innerHTML = `${formatCurrency(outputC.value, amountOut)}`;
}
function vnd2Usd() {
  amountOut = amountIn.value * currencyRatio.vnd.usd;
  resultArea.innerHTML = `${formatCurrency(outputC.value, amountOut)}`;
}
function vnd2Krw() {
  amountOut = amountIn.value * currencyRatio.vnd.krw;
  resultArea.innerHTML = `${formatCurrency(outputC.value, amountOut)}`;
}
function vnd2Eur() {
  amountOut = amountIn.value * currencyRatio.vnd.eur;
  resultArea.innerHTML = `${formatCurrency(outputC.value, amountOut)}`;
}
function usd2Krw() {
  amountOut = amountIn.value * currencyRatio.usd.krw;
  resultArea.innerHTML = `${formatCurrency(outputC.value, amountOut)}`;
}
function usd2Eur() {
  amountOut = amountIn.value * currencyRatio.usd.krw;
  resultArea.innerHTML = `${formatCurrency(outputC.value, amountOut)}`;
}
function krw2Usd() {
  amountOut = amountIn.value * currencyRatio.krw.usd;
  resultArea.innerHTML = `${formatCurrency(outputC.value, amountOut)}`;
}
function krw2Eur() {
  amountOut = amountIn.value * currencyRatio.krw.eur;
  resultArea.innerHTML = `${formatCurrency(outputC.value, amountOut)}`;
}
function krw2Vnd() {
  amountOut = amountIn.value * currencyRatio.krw.vnd;
  resultArea.innerHTML = `${formatCurrency(outputC.value, amountOut)}`;
}

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency",
  });
  return formatter.format(value);
}

function convert() {
    if (inputC.value === "USD" && outputC.value === "VND") {
    result = usd2Vnd();
  } else if (inputC.value === "VND" && outputC.value === "USD") {
    result = vnd2Usd();
  } else if (inputC.value === "VND" && outputC.value === "KRW") {
    result = vnd2Krw();
  } else if (inputC.value === "VND" && outputC.value === "EUR") {
    result = vnd2Eur();
  } else if (inputC.value === "USD" && outputC.value === "KRW") {
    result = usd2Krw();
  } else if (inputC.value === "USD" && outputC.value === "EUR") {
    result = usd2Eur();
  } else if (inputC.value === "KRW" && outputC.value === "USD") {
    result = krw2Usd();
  } else if (inputC.value === "KRW" && outputC.value === "EUR") {
    result = krw2Eur();
  } else if (inputC.value === "KRW" && outputC.value === "VND") {
    result = krw2Vnd();
  } else result = "Wrong type!";
}
