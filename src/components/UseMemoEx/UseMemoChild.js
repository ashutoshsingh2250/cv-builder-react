import { memo } from "react";

const UseMemoChild = ()=> {
    console.log("Child Renders")
    return (
        <>
            <span>Child Div 1</span>
        </>
    )
}

export default UseMemoChild;