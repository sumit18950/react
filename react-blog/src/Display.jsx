import {useState} from "react";
const Display=()=>{
    const [display, setDisplay]=useState(true)

    return(
        <>
        
        <h2>TOGGLE IN REACTJS</h2>

          <button onClick={()=>{setDisplay(!display)}}>click to hide</button>
        {
            display?<h3>Sumit kumar</h3>:null
        }


        </>
    )
}

export default Display

