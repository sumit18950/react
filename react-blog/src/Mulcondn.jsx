import{useState} from "react"
const Mulcondn=()=>{
    const[count, setcond]=useState(1);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setcond(count+1)}}>clike me</button>


            {
                count==0?<h3>condition0</h3>
                :count==1?<h3>condition1</h3>
                :count==2?<h3>condition2</h3>
                :count==3?<h3>condition3</h3>
                :count==4?<h3>condition4</h3>
                :count==5?<h3>condition5</h3>
                :count==6?<h3>condition6</h3>
                :count==7?<h3>condition7</h3>
                :<h3>other condition</h3>

            }


        </div>
    )
}

export default Mulcondn