import React, { useState } from "react";

const UpdateCounterHOC = (OriginalComponent)=> {

    // class NewComponent extends React.Component {
        
    //     constructor(props) {
    //         super(props)

    //         this.state= {
    //             counter: 0
    //         }
    //     }

    //     incrementCounter = ()=> {
    //         this.setState((prevState)=> {
    //             return {counter: prevState.counter+1}
    //         })
    //     }
        
    //     render() {
    //         return (
    //             <OriginalComponent counter={this.state.counter} incrementCounter={this.incrementCounter} />
    //         )
    //     }
    // }

    const NewComponent = (props) => {

        const [counter, setCounter] = useState(0);

        const incrementCounter = ()=> {
            setCounter(counter+1);
        }

        return (
            <OriginalComponent counter={counter} incrementCounter={incrementCounter} />
        )
    }

    return NewComponent
}

export default UpdateCounterHOC