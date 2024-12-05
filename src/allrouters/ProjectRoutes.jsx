import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { Allproducts, Allusers, Home, Login, UserDetails } from "../pages";

const ProjectRoutes = () => {
  return (
    <>
     <Router>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/allproducts" element={<Allproducts/>}/>
            <Route path="/users" element={<Allusers/>}/>
            <Route path="/userDetails/:firstName" element={<UserDetails/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default ProjectRoutes