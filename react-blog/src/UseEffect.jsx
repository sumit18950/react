import {useEffect, useState} from 'react';

function UseEffect(){

    const[counter,setCounter]=useState(1);
    const[counterNext,setCounterNext]=useState(1);


    useEffect(()=>{
        callOnce();
    },[])

    useEffect(()=>{
        callOnce();
    },[counterNext])

    function callOnce(){
        console.log("call once");
    }

    // callOnce();   without useEffect it will always be called when button is clicked.

    return (
            <div>
                <h1>UseEffect example</h1>
                <button onClick={()=>setCounter(counter+1)}>counter{counter}</button>
                <button onClick={()=>setCounterNext(counterNext+1)}>counterNext{counterNext}</button>

            </div>
        )
    

}

export default UseEffect;