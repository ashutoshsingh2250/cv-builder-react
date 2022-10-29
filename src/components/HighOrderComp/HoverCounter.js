import { useState } from "react";
import UpdateCounterHOC from "./UpdateCounterHOC";

const HoverCounter = (props)=> {
    return (
        <>
            <div onMouseOver={props.incrementCounter}>Hover Counter: {props.counter}</div>
        </>
    )
}

export default UpdateCounterHOC(HoverCounter)