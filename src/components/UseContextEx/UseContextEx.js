import { useContext } from "react";
import { GlobalInfo } from '../../App'

const UseContextEx = ()=> {

    const {appColor} = useContext(GlobalInfo)

    return (
        <>
            <div>Selected Color: {appColor}</div>
        </>
    )
}

export default UseContextEx;