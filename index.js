const Page = () => {
  const [currentInput, setCurrentInput] = React.useState("");
  const [allInput, setAllInput] = React.useState("");
  const operators = ["/", "*", "-", "+", "."];

  const handleDigit = (e) => {
    const digit = e.target.value;
    if (digit === "0" && !currentInput) return;
    setAllInput((prev) => prev + digit);
    if (operators.includes(currentInput) && currentInput !== "-") {
      setCurrentInput(digit);
      return;
    }
    setCurrentInput((prev) => prev + digit);
  };

  const handleOperator = (e) => {
    const operator = e.target.value;
    let oldAllInput = allInput;

    // "." can be added once.
    if (operator === "." && !currentInput.includes(".")) {
      setAllInput((prev) => prev + operator);
      setCurrentInput((prev) => prev + ".");
      return;
    } else if (operator === "." && currentInput.includes(".")) {
      return;
    }

    if (
      oldAllInput[oldAllInput.length - 1] === "-" &&
      operators.includes(oldAllInput[oldAllInput.length - 2])
    ) {
      if (operator === "-") return;
      oldAllInput = oldAllInput.slice(0, 2);
      setAllInput(oldAllInput + operator);
      setCurrentInput(operator);
    }

    if (
      oldAllInput.length >= 1 &&
      operators.includes(oldAllInput[oldAllInput.length - 1])
    ) {
      if (operator === "-") {
        setAllInput((prev) => prev + operator);
        setCurrentInput(operator);
        return;
      }
      oldAllInput = oldAllInput.slice(0, -1);
      setAllInput(oldAllInput + operator);
      setCurrentInput(operator);
      return;
    }

    setAllInput((prev) => prev + operator);
    setCurrentInput(operator);
    return;
  };

  const clear = () => {
    setAllInput("");
    setCurrentInput("");
  };

  const equal = async () => {
    if (!allInput || currentInput === "-") return;
    let result = checkMinusMinus(allInput);
    result = eval(result);
    const finalShow = `${allInput} = ${result}`;
    setCurrentInput(result);
    await setAllInput(result);
    document.querySelector("#all-display").textContent = finalShow;
  };

  const checkMinusMinus = (str) => {
    let result = str;
    result = result.replace("--", "+");
    return result;
  };

  console.log(`Current Input: ${currentInput} All Input: ${allInput}`);

  return (
    // Background
    <div className="bg-slate-200 h-screen w-screen flex flex-col justify-center items-center text-white">
      {/* Container */}
      <div className="bg-black flex flex-col p-2 justify-center items-center h-[420px] w-[300px]">
        {/* All Display */}
        <p
          id="all-display"
          className="text-right w-full font-extralight text-orange-300"
        >
          {allInput ? allInput : "\xa0"}
        </p>
        {/* Current Display */}
        <p
          id="display"
          className="text-right w-full text-2xl mb-2 font-extrabold"
        >
          {currentInput ? currentInput : "0"}
        </p>
        {/* 1st row */}
        <div className="w-full grid grid-cols-4 text-center h-16 text-xl items-center">
          <p
            id="clear"
            className="border border-gray-800 col-span-2 bg-red-800 h-full flex flex-col justify-center hover:border-gray-200 hover:text-black"
            onClick={clear}
          >
            AC
          </p>
          <button
            id="divide"
            className="border border-gray-800 col-span-1 bg-gray-500 h-full text-center hover:border-gray-200 hover:text-black"
            value="/"
            onClick={handleOperator}
          >
            /
          </button>
          <button
            id="multiply"
            className="border border-gray-800 col-span-1 bg-gray-500 h-full text-center hover:border-gray-200 hover:text-black"
            value="*"
            onClick={handleOperator}
          >
            x
          </button>
        </div>
        {/* 2nd row */}
        <div className="w-full grid grid-cols-4 text-center h-16 text-xl items-center">
          <button
            id="seven"
            className="border border-gray-800 col-span-1 bg-gray-600 h-full text-center hover:border-gray-200 hover:text-black"
            value="7"
            onClick={handleDigit}
          >
            7
          </button>
          <button
            id="eight"
            className="border border-gray-800 col-span-1 bg-gray-600 h-full text-center hover:border-gray-200 hover:text-black"
            value="8"
            onClick={handleDigit}
          >
            8
          </button>
          <button
            id="nine"
            className="border border-gray-800 col-span-1 bg-gray-600 h-full text-center hover:border-gray-200 hover:text-black"
            value="9"
            onClick={handleDigit}
          >
            9
          </button>
          <button
            id="subtract"
            className="border border-gray-800 col-span-1 bg-gray-500 h-full text-center hover:border-gray-200 hover:text-black"
            value="-"
            onClick={handleOperator}
          >
            -
          </button>
        </div>
        {/* 3rd row */}
        <div className="w-full grid grid-cols-4 text-center h-16 text-xl items-center">
          <button
            id="four"
            className="border border-gray-800 col-span-1 bg-gray-600 h-full text-center hover:border-gray-200 hover:text-black"
            value="4"
            onClick={handleDigit}
          >
            4
          </button>
          <button
            id="five"
            className="border border-gray-800 col-span-1 bg-gray-600 h-full text-center hover:border-gray-200 hover:text-black"
            value="5"
            onClick={handleDigit}
          >
            5
          </button>
          <button
            id="six"
            className="border border-gray-800 col-span-1 bg-gray-600 h-full text-center hover:border-gray-200 hover:text-black"
            value="6"
            onClick={handleDigit}
          >
            6
          </button>
          <button
            id="add"
            className="border border-gray-800 col-span-1 bg-gray-500 h-full text-center hover:border-gray-200 hover:text-black"
            value="+"
            onClick={handleOperator}
          >
            +
          </button>
        </div>
        {/* 4th row */}
        <div className="w-full grid grid-cols-4 text-center h-32 text-xl items-center">
          {/* 1st and 2nd col */}
          <div className="col-span-2 h-full">
            <div className="flex w-full justify-evenly">
              <button
                id="one"
                className="border border-gray-800 col-span-1 bg-gray-600 h-16 w-full text-center hover:border-gray-200 hover:text-black"
                value="1"
                onClick={handleDigit}
              >
                1
              </button>
              <button
                id="two"
                className="border border-gray-800 col-span-1 bg-gray-600 h-16 w-full text-center hover:border-gray-200 hover:text-black"
                value="2"
                onClick={handleDigit}
              >
                2
              </button>
            </div>
            <button
              id="zero"
              className="border border-gray-800 col-span-1 bg-gray-600 h-16 w-full text-center hover:border-gray-200 hover:text-black"
              value="0"
              onClick={handleDigit}
            >
              0
            </button>
          </div>
          {/* 3rd col */}
          <div className="col-span-1 h-full">
            <button
              id="three"
              className="border border-gray-800 col-span-1 bg-gray-600 h-16 w-full text-center hover:border-gray-200 hover:text-black"
              value="3"
              onClick={handleDigit}
            >
              3
            </button>
            <button
              id="decimal"
              className="border border-gray-800 col-span-1 bg-gray-600 h-16 w-full text-center hover:border-gray-200 hover:text-black"
              value="."
              onClick={handleOperator}
            >
              .
            </button>
          </div>
          {/* 4th col */}
          <p
            id="equals"
            className="col-span-1 h-full border border-gray-800 bg-blue-800  flex flex-col justify-center hover:border-gray-200 hover:text-black"
            onClick={equal}
          >
            =
          </p>
        </div>
      </div>
      <p className="mt-2 text-black font-extralight">Designed and Coded By</p>
      <p className="text-black font-extralight">Yamaguchi</p>
    </div>
  );
};

ReactDOM.render(<Page />, document.getElementById("root"));
