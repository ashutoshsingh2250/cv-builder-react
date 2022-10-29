import { useMemo, useState } from 'react';
import UseMemoChild from '../UseMemoEx/UseMemoChild.js';

const UseMemoParent = ()=> {

    const [childRenderCounter, setChildRenderCounter] = useState(0);

    const doNotReRender = useMemo(()=> {
        return (
            <UseMemoChild></UseMemoChild>
        )
    },[])

    const updateChildRenderCount = ()=> {
        setChildRenderCounter(childRenderCounter+1);
    }

    return (
        <>
            <div>Parent Div 1</div>
            <div> {doNotReRender} : Child Updated {childRenderCounter} times </div> 
            <div>Parent Div 2</div>

            <button onClick={updateChildRenderCount}>updateChildRenderCount</button>
        </>
    )
}

export default UseMemoParent;