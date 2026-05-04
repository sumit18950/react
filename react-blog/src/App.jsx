import Header from "./Header";
import Login, {Profile, Setting, userkey} from './UserComponent'
import { createElement } from "react";
import {useState} from "react"
import Counter from "./Counter";
import Display from "./Display";
import Mulcondn from "./Mulcondn";
import Props from "./Props";
import User from "./User";
import Wrapper from "./Wrapper";
import UseEffect from "./UseEffect";
import Counter2 from "./Counter2";
import UseRefexample from "./UseRefexample";
function App(){

  const Userobj={
    name:"Sumit kumar",
    email:"sumit.kumar@gmail.com",
    age:22
  }
  const userArray=["sumit","lpu","rohan"]
  let path="https://i.pinimg.com/564x/3a/3d/4b/3a3d4b04d70cc293fadf195b4e1a7bcb.jpg"


  function Callfun(){
    alert("function called")
  }

  const Fruit=(name)=>{
    alert(name)
  }

  const [fruit,setFruit] = useState("banana")
  const handlefruit=()=>{
    setFruit("apple")
  }

  const[counter2,setCounter2] = useState(1);
  const[data2,setData2] = useState(1);
  const[display,setDisplay] = useState(true);


  return(
    <div>


      {/* <Fruit /> */}
      <Login />
      <Profile />
      <Setting />

      <h4>{operation(2,3,"-")}</h4>

    
    <h3>hello</h3>
    <h3>sumit kr</h3>
    <h3>{sum()}</h3>
    {/* <sum /> you cant call a function like this which doesn't return JSX */}

    <h3>{userkey}</h3>
    <h3>{Userobj.email}</h3>
    <h3>{userArray[0]}</h3>

    return {createElement("div",{id:"rootid"},createElement("h3",{class:'h3tag'},"heading tag"))}

    <input type="text" ></input>
    <br></br>
    {/* <img src={path}/> */}


    <h3>Event and Function call</h3>
    <button onClick={Callfun}>Click me</button>
    
    <button onClick={()=>Fruit("banana")}>banana</button>
    <button onClick={()=>Fruit("Apple")}>Apple</button>

    <h3>{fruit}</h3>
    <button onClick={handlefruit}>change fruit</button>

    <Counter />
    <Display />
    <Mulcondn />
    

    <Props name="Sumit kumar" age={23} email="sumit@gmail.com"/>
    <User name="sunitm"/>


    <Wrapper>
      <h1>Sumit Kumar</h1>
    </Wrapper>

    <UseEffect/>


    {
      display ? <Counter2 counter2={counter2} data2={data2}/> : null
    }
    <button onClick={()=>{setCounter2(counter2+1)}}>counter2 {counter2}</button>
    <button onClick={()=>{setData2(data2+1)}}>data2 {data2}</button>
    <button onClick={()=>setDisplay(!display)}>toggle</button>


    <Counter2 counter2={counter2} data2 ={data2}/>
    <UseRefexample />
    </div>

  )
}

function Fruit(){
  return(
    <h3>Apple</h3>
  )
}

function sum(){
  return 10+10
}

// return createElement("div",{id:"rootid"},createElement("h3",{class:'h3tag'},"heading tag"))


function operation(a, b, operator){
  
    if(operator == "+"){
      return a+b
    }
    else if(operator == "-"){
      return a-b
    }
    else{
      return a*b
    }
  

}

export default App
