import {Navigate, Route, Routes} from "react-router"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import Login from "./Login"
import PageNotFound from "./PageNotFound"
import GetUserDetails from "./GetUserDetails"
function App() {
  

  return (
    <>
    <Navbar/>
    <Routes >
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
      {/* <Route path='/*' element={<Navigate to="/"/>}/> */}  for redirectting to login page if 404 occured instead of showing page not found
    </Routes>  
    <GetUserDetails/>
    </>
  )
}

export default App
