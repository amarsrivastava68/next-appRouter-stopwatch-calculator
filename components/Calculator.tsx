
import { useState } from "react";
import React from "react";

const Calculator: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const hanleClick = (value: string) => {
   setResult( prev => prev + value) 
  }
  const handleClear = () => {
    setResult("");
  }
  const handleCalculate = () => {
    try{
    setResult(eval(result).toString());    
    }
    catch(err){
      setResult("Wrong input , Please Clear console");
    }
  }
const handleBackspace = () => {
  setResult(result.slice(0, -1));
}

  return (
    <React.Fragment >
     
     <p className="text-2xl text-center p-2">Simple Calculator</p>
    <div className="grid grid-cols-4 gap-2 p-2"> 

    <textarea 
        value={result} 
        className="col-span-4 border-black border-2 w-full rounded text-right p-1" // Added mr-2 for right margin
      >
       
      </textarea>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("1")}>1</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("2")}>2</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("3")}>3</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("+")}>+</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("5")}>5</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("6")}>6</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("7")}>7</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("-")}>-</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("8")}>8</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("9")}>9</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("0")}>0</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("*")}>*</button>
        <button className="col-span-1 bg-green-300 rounded" onClick={handleCalculate}>=</button>
        <button className="col-span-1 bg-red-300 rounded" onClick={handleBackspace}>{"<-Del"}</button>
        <button className="col-span-1 bg-red-300 rounded" onClick={handleClear}>CLEAR</button>
        <button className="col-span-1 bg-gray-300 rounded" onClick={() => hanleClick("/")}>/</button>



      </div>
    
    </React.Fragment>
  )
  }

  export default Calculator