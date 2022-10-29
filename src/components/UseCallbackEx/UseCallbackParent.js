import { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

const UseCallbackParent = ()=> {

    const [number, setNumber] = useState(0);

    const onGenerateLuckyNum = ()=> {
        let num = Math.floor(Math.random()*100);
        setNumber(num);
        return num;
    }

    const onGetLuckyNum = useCallback(()=> {
        return 10;
    }, []);

    return (
        <>
            <div> Lucky Number Generated: {number} </div>
            <UseCallbackChild onGetLuckyNum={onGetLuckyNum} ></UseCallbackChild>
            <button onClick={onGenerateLuckyNum}>Generate Lucky Number</button>
        </>
    )
}

export default UseCallbackParent;