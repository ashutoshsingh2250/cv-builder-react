import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Calculator from '../src/components/Calculator.js';
import UseMemoParent from '../src/components/UseMemoEx/UseMemoParent.js';
import UseCallbackParent from './components/UseCallbackEx/UseCallbackParent';
import UseReducerEx from './components/UseReducerEx/UseReducerEx';
import UseContextEx from './components/UseContextEx/UseContextEx';
import HighOrderCompApp from './components/HighOrderComp/HighOrderCompApp';
import { createContext } from 'react';
import CustomHookMain from './components/CustomHook/CustomHookMain';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

export const GlobalInfo = createContext();



function App() {

  const [color, setColor] = useState('red');

  return (
    // <GlobalInfo.Provider value={{appColor: color}}>
      <div>
        {/* <Calculator></Calculator> */}
        {/* <UseMemoParent></UseMemoParent> */}
        {/* <UseCallbackParent></UseCallbackParent> */}
        {/* <UseReducerEx></UseReducerEx> */}
        {/* <UseContextEx></UseContextEx> */}
        {/* <HighOrderCompApp></HighOrderCompApp> */}
        {/* <CustomHookMain></CustomHookMain> */}
        <Header />
        <Body />
      </div>
    // </GlobalInfo.Provider>
  )
}

export default App;