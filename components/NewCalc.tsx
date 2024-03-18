'use client'
import { useState } from "react";
const Newcalc : React.FC = () => 
{
    const [result , setResult] = useState<string>('')
    const [name , setName] = useState<string>('')

    const handleClick =( value : string)  =>
    {
        setResult(prev => prev + value)
    }
    const handleClear =( ) =>
    {
        setResult("")
    }
    const handleCalculate =() =>
    {
        try {
            setResult(eval(result).toString())
            console.log(result)
        }
        catch(err){
            setResult('wrong input!! please clear console and retry')
        }
    }
    const handleBack =() =>
    {
        setResult((result.slice(0,-1)).toString())
    }
const renderButtons = (values : string[]) =>
{
    return (
        values.map((value)=> (
            <button key={value}
            className="bg-gray-200 rounded col-span-1"
            onClick={()=> {handleClick(value)}}>{value}</button>
        ))
    )
}


    return (
       <div className="grid grid-col-4 gap-2 p-20">
        <input 
        
        value={result}
        className="col-span-4 w-full border-2 border-black rounded-3xl text-right p-2"
        onChange={(e)=> setResult(e.target.value)}
        >

        </input>
       
        {renderButtons(['1' , '2' , '3' ,'+' , '4' , '5' , '6'  , '-' , '7' , '8' , '9' ,'*' ,   '/' ,'0' ])}
       
      
        
        <button className="col-span-2 bg-green-200 rounded-3xl" onClick={() => {handleCalculate()}}>=</button>
        <button className="col-span-2 bg-pink-200 rounded-3xl" onClick={() => {handleClear()}}>Clear</button>
        <button className="col-span-2 bg-red-200 rounded-3xl" onClick={() => {handleBack()}}>{"<-Delete"}</button>
       
        
       </div>
    )
}
export default Newcalc