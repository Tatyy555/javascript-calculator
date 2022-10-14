const [currentNum, setCurrentNum] = React.useState(0);
const [inputArray, setInputArray] = React.useState([]);
const [operator, setOperator] = React.useState("");
const [result, setResult] = React.useState(0);

function clear() {
  const currentDisplayEl = document.querySelector("#display");
  currentDisplayEl.innerText = "0";
  setCurrentNum(0);
  setInputArray([]);
  setResult(0);
}

function add() {
  const currentDisplayEl = document.querySelector("#display");
  currentDisplayEl.innerText = "+";
  setResult(result + currentNum);
  setInputArray((prev) => [...prev, currentNum, "+"]);
  setCurrentNum(0);
  setOperator("+");
}

function subtract() {
  const currentDisplayEl = document.querySelector("#display");
  currentDisplayEl.innerText = "-";
  setResult(result - currentNum);
  setInputArray((prev) => [...prev, currentNum, "-"]);
  setCurrentNum(0);
  setOperator("-");
}

function multiply() {
  const currentDisplayEl = document.querySelector("#display");
  currentDisplayEl.innerText = "x";
  setResult(result * currentNum);
  setInputArray((prev) => [...prev, currentNum, "x"]);
  setCurrentNum(0);
  setOperator("x");
}

function divide() {
  const currentDisplayEl = document.querySelector("#display");
  currentDisplayEl.innerText = "/";
  setResult(result  / currentNum);
  setInputArray((prev) => [...prev, currentNum, "/"]);
  setCurrentNum(0);
  setOperator("/");
}

function equal() {
  let answer = 0;
  if(operator === "+"){
    answer = result + currentNum
  }else if(operator === "-"){
    answer = result - currentNum
  }else if(operator === "x"){
    answer = result * currentNum
  }else if(operator === "/"){
    answer = result / currentNum
  }
  const currentDisplayEl = document.querySelector("#display");
  currentDisplayEl.innerText = answer;
  setResult(answer); 
  setCurrentNum(0);
}

function one() {
  const currentDisplayEl = document.querySelector("#display");
  if (currentNum === 0) {
    currentDisplayEl.innerText = "1";
    setCurrentNum(1);
  } else if (currentNum !== 0) {
    currentDisplayEl.innerText += "1";
    setCurrentNum(currentNum * 10 + 1);
  }
}

function two() {
  const currentDisplayEl = document.querySelector("#display");
  if (currentNum === 0) {
    currentDisplayEl.innerText = "2";
    setCurrentNum(2);
  } else if (currentNum !== 0) {
    currentDisplayEl.innerText += "2";
    setCurrentNum(currentNum * 10 + 2);
  }
}

function three() {
  const currentDisplayEl = document.querySelector("#display");
  if (currentNum === 0) {
    currentDisplayEl.innerText = "3";
    setCurrentNum(3);
  } else if (currentNum !== 0) {
    currentDisplayEl.innerText += "3";
    setCurrentNum(currentNum * 10 + 3);
  }
}

function four() {
  const currentDisplayEl = document.querySelector("#display");
  if (currentNum === 0) {
    currentDisplayEl.innerText = "4";
    setCurrentNum(4);
  } else if (currentNum !== 0) {
    currentDisplayEl.innerText += "4";
    setCurrentNum(currentNum * 10 + 4);
  }
}

function five() {
  const currentDisplayEl = document.querySelector("#display");
  if (currentNum === 0) {
    currentDisplayEl.innerText = "5";
    setCurrentNum(5);
  } else if (currentNum !== 0) {
    currentDisplayEl.innerText += "5";
    setCurrentNum(currentNum * 10 + 5);
  }
}

function six() {
  const currentDisplayEl = document.querySelector("#display");
  if (currentNum === 0) {
    currentDisplayEl.innerText = "6";
    setCurrentNum(6);
  } else if (currentNum !== 0) {
    currentDisplayEl.innerText += "6";
    setCurrentNum(currentNum * 10 + 6);
  }
}

function seven() {
  const currentDisplayEl = document.querySelector("#display");
  if (currentNum === 0) {
    currentDisplayEl.innerText = "7";
    setCurrentNum(7);
  } else if (currentNum !== 0) {
    currentDisplayEl.innerText += "7";
    setCurrentNum(currentNum * 10 + 7);
  }
}

function eight() {
  const currentDisplayEl = document.querySelector("#display");
  if (currentNum === 0) {
    currentDisplayEl.innerText = "8";
    setCurrentNum(8);
  } else if (currentNum !== 0) {
    currentDisplayEl.innerText += "8";
    setCurrentNum(currentNum * 10 + 8);
  }
}

function nine() {
  const currentDisplayEl = document.querySelector("#display");
  if (currentNum === 0) {
    currentDisplayEl.innerText = "9";
    setCurrentNum(9);
  } else if (currentNum !== 0) {
    currentDisplayEl.innerText += "9";
    setCurrentNum(currentNum * 10 + 9);
  }
}

function zero() {
  const currentDisplayEl = document.querySelector("#display");
  if (currentNum === 0) {
    setCurrentNum(0);
  } else if (currentNum !== 0) {
    currentDisplayEl.innerText += "0";
    setCurrentNum(currentNum * 10 + 0);
  }
}