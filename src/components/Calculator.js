import { useRef, useState } from "react";

const Calculator = ()=> {
    const n1 = useRef(0);
    const n2 = useRef(0);
    const n3 = useRef(0);
  
    const c1 = useRef(false);
    const c2 = useRef(false);
    const c3 = useRef(false);
  
    let [result, setResult] = useState(0);
  
    let onAdd = ()=> {
      let res = 0;
      let v1 = c1.current.checked ? n1.current.value : 0;
      let v2 = c2.current.checked ? n2.current.value : 0;
      let v3 = c3.current.checked ? n3.current.value : 0;
      res = parseInt(v1) + parseInt(v2) + parseInt(v3);
      setResult(res);
    }
  
    let onSub = ()=> {
      
    }
  
    let onDiv = ()=> {
      
    }
  
    let onMul = ()=> {
      
    }
  
    return (
      <div className="App">
        <div style={{'display': 'inline-grid'}}>  
          <div>
            <input ref={n1} placeholder="num1" /> 
            <input ref={c1} type="checkbox" />
          </div>
          <div>
            <input ref={n2} placeholder="num2" />
            <input ref={c2} type="checkbox" />
          </div>
          <div>
            <input ref={n3} placeholder="num3" />
            <input ref={c3} type="checkbox" />
          </div>
        </div>
  
        <div >
          <button onClick={onAdd}>+</button>
          <button onClick={onSub}>-</button>
          <button onClick={onDiv}>/</button>
          <button onClick={onMul}>*</button>
        </div>
        <div>
          <span>Hasil:</span> {result}
        </div>
      </div>
    );
}

export default Calculator