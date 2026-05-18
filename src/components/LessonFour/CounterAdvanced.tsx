import {useState} from "react";
import CounterButton from "./CounterButton.tsx";
import type {CounterState} from "../../types.ts";

const initialState = {
    count: 0,
    lastAction: "",
    time: "",
}

const CounterAdvanced = () => {

    const [state, setState] = useState<CounterState>(initialState);

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const increaseCount = () => {
        setState({
            count: state.count + 1,
            lastAction: "Increase",
            time: getCurrentTime(),
        })
    }

    const decreaseCount = () => {
        setState({
            count: state.count - 1,
            lastAction: "Decrease",
            time: getCurrentTime(),
        })
    }

    const resetCount = () => {
        setState({
            count: 0,
            lastAction: "Reset",
            time: getCurrentTime(),
        })
    }


    return (
        <>
            <h1 className="text-center text-xl font-bold"
            >Count is {state.count}</h1>
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
                    disabled = {state.count === 0}
                />
                <CounterButton
                    addClasses ="bg-cf-dark-red"
                    onClick={resetCount}
                    label="Reset"
                    disabled={state.count === 0}
                />
            </div>

            {
              state.lastAction && (
                  <p className="text-center pt-8">
                      Last Change: <strong>{state.lastAction}</strong> at{" "}
                      <strong>{state.time}</strong>
                  </p>
              )
            }
        </>
    )
}
export default CounterAdvanced;