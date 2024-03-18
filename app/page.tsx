'use client'

import Form from "@/components/Form";
import Newcalc from "@/components/NewCalc";
import Stopwatch from "@/components/Stopwatch";
import { useState } from "react";

const Home: React.FC = () =>
{
  const [color , setcolor] = useState<string>('red')

  const handleBlue =()=>
  {
    setcolor("blue")
  }
  const handleGreen =() =>
{
  setcolor("green")

}
const handleYellow =() =>
{
  setcolor("yellow")

}

  return(
  <div className={`h-screen  w-screen bg-${color}-200`}>
    <h1 className="text-3xl font-bold mb-10">Simple Calculator</h1>
    <div className="grid  grid-cols-3  text-center">
<button className="bg-blue-100 col-span-1" onClick={handleBlue}>Blue</button>
<button className="bg-green-100 col-span-1" onClick={handleGreen}>Green</button>
<button className="bg-yellow-100 col-span-1" onClick={handleYellow}>Yellow</button>
    </div>
    <Newcalc/>
    <Stopwatch/>
  </div>
  )
}
export default Home