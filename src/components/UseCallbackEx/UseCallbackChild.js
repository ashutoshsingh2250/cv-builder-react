import { memo } from "react";

const UseCallbackChild = (props)=> {
    console.log("Child rendered!")

    return (
        <>
            <div>First Lucky Number for Child: {props.onGetLuckyNum()/10}</div>
        </>
    )
}

export default memo(UseCallbackChild);