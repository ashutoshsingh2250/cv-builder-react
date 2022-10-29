import React, { Component, useState } from "react"
import UpdateCounterHOC from "./UpdateCounterHOC"

// class ClickCounter extends Component {
//     render() {
//         const {counter, incrementCounter} = this.props
//         return (
//             <>
//                 {console.log(counter)}
//                 <div>Click Counter: {counter}</div>
//                 <button onClick={incrementCounter}>Inc Click</button>
//             </>
//         )
//     }
// }

const ClickCounter = (props)=> {

    return (
        <>
            <div>Click Counter: {props.counter}</div>
            <button onClick={props.incrementCounter}>Inc Click</button>
        </>
    )
}

export default UpdateCounterHOC(ClickCounter)