import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [chosenFunction, setChosenFunction] = useState("isPrime");
  const [result, setResult] = useState();

  const storeInput = (num) => {
    if (num % 1 !== 0) {
      num = Math.round(num);
    } else if (Math.sign(num) === -1){
      num = 1;
    }
    setInputNumber(num);
  };

  const isPrime = (num) => {
    let res = true;
    if (num === 1 || num === 0){
      res = false;
    } else {
      for (let i = 2; i < num; i++){
        if (num % i === 0){
          res = false;
          break;
        }
      }
    }
    return res;
  };

  const isFibonacci = (n) => {
    const isPerfectSquare = (num) => {
      let s = parseInt(Math.sqrt(num));
      return (s * s === num);
    }

    let res = isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4);

    return res;
  }

  useEffect(() => {
    if(chosenFunction === "isPrime"){
      console.log("runnning prime");
      console.log("ON", inputNumber);
      setResult(isPrime(inputNumber));
      console.log(result);
    } else if (chosenFunction === "isFibonacci"){
      console.log("runnning fibonacci");
      setResult(isFibonacci(inputNumber));
      console.log(result);
    }
  },[chosenFunction, inputNumber, result])

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter a number"
          onKeyUp={(e) => {
            storeInput(e.target.value);
          }}
        />
      </div>
      <div className="dropdown-container">
        <select value={chosenFunction} onChange={(e) => {
          setChosenFunction(e.target.value);
          console.log("func",chosenFunction);
        }}>
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div className="result-container">
        <div> {"Result " + result} </div>
      </div>
    </div>
  );
}

export default App;
