import { useEffect } from "react"

const Counter2=({counter2, data2}) =>{


    useEffect(()=>{
        console.log("mounting phase only once");
    },[])

    useEffect(()=>{
        console.log("update phase only");
    },[counter2])

    useEffect(()=>{
        return() =>{
            console.log("unmounted phase only");
        }
    },[])
return(
    <div>
        <h1>Countr value {counter2}</h1>
        <h1>data value{data2}</h1>

    </div>
)

}

export default Counter2;