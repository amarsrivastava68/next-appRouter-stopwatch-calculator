import Form from "@/components/Form";
import Newcalc from "@/components/NewCalc";
import Stopwatch from "@/components/Stopwatch";

const Home: React.FC = () =>
{
  return(
  <div className="h-screen  w-screen bg-blue-200" >
    <h1 className="text-3xl font-bold mb-10">Simple Calculator</h1>
    <Newcalc/>
    <Stopwatch/>
  </div>
  )
}
export default Home