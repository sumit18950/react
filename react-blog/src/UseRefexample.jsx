import React,{useRef} from "react"

function UseRefexample(){
    const inputref = useRef(null);
    const clickCount = useRef(0);

    function handle(){
        // inputref.current.focus();
       
        inputref.current.value="Sumit";
        clickCount.current = clickCount.current + 1;
        console.log("Button clicked"+ clickCount.current + "times");
    }

    return(
        <React.Fragment>
          <h1>UseRef Example</h1>
          <input type="text" ref={inputref}/>
          <button onClick={handle}>click</button>
          
        </React.Fragment>
           
    )
}

export default UseRefexample;