import { useSetLocalStorage, useGetLocalStorage } from "./LocalStorage"

const CustomHookMain = ()=> {

    const setVal = useSetLocalStorage("name", "ashutosh")

    const getVal = useGetLocalStorage("name")

    return (
        <>  
            This is get local storage value: {getVal}
        </>
    )
}

export default CustomHookMain