import { useReducer, useState } from "react";

const initialState = 0;
const reducerFunc = (state, action)=> {
    // return state;
    if(action.type=='INR') {
        return action.data;
    } else if(action.type=='DCR') {
        return action.data;
    }
}

const UseReducerEx = ()=> {

    // const [counter, setCounter] = useState(0);
    const [counter, dispatch] = useReducer(reducerFunc, initialState)

    const incrementCounter = ()=> {
        // setCounter(counter+1);
        dispatch({type:"INR", data: counter+2})
    }

    const decrementCounter = ()=> {
        // setCounter(counter-1);
        dispatch({type:"DCR", data: counter-2})
    }

    return (
        <>
            Counter:<span>{counter}</span>
            <div>
                <button onClick={incrementCounter}>INR</button>
                <button onClick={decrementCounter}>DCR</button>
            </div>
        </>
    )
}

export default UseReducerEx;