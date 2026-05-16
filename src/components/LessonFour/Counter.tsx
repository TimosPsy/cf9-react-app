import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const  increaseCount = () => {
        setCounter(counter + 1);
    }

    const  decreaseCount = () => {
        if (counter > 0) {
            setCounter(counter -1)
        }
    }

    const  resetCount = () => {
        setCounter(0);
    }


    return (
        <>
            <h1 className="text-center text-xl fond-bold"
            >Count is {counter}</h1>
           <div className="text-center pt-10 space-x-4">
               <CounterButton
                   addClasses="bg-green-500"
                   onClick={increaseCount}
                   label="Increase"
               />

               <CounterButton
                   addClasses="bg-red-400"
                   onClick={decreaseCount}
                   label="Decrease"
                   disabled = {counter === 0}
               />

               <CounterButton
                   addClasses ="bg-cf-dark-red"
                   onClick={resetCount}
                   label="Reset"
                   disabled={counter === 0}
               />
           </div>
        </>
    )
}
export default Counter;