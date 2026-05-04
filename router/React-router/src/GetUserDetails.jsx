import {useEffect, useState} from "react";
import axios from "axios";
function GetUserDetails() {
    const[data, setUsersData] = useState([])


    useEffect(()=>{
        // fetch("https://dummyjson.com/users")
        // .then((res)=> res.json())
        // .then((data)=> setUsersData(data.users))


        axios.get("https://dummyjson.com/users")
        .then((res)=> setUsersData(res.data.users))

    },[])



return(
    <div>
        <h1>users data</h1>
        {
            data.map((user)=>{
               return <h3 key={user.id}>{user.firstName}</h3>
            })
        }
    </div>
)
}
export default GetUserDetails;