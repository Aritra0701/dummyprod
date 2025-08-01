import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { Allproducts, Allusers, Home, Login, UserDetails } from "../pages";
import ProductDetails from "../pages/products/productDetails/ProductDetails";
import Allpost from "../pages/post/Allpost";
import Detailspost from "../pages/post/Detailspost";

const ProjectRoutes = () => {
  return (
    <>
     <Router>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/allproducts" element={<Allproducts/>}/>
            <Route path="/productdetails/:id" element={<ProductDetails/>}/>
            <Route path="/detailspost/:id" element={<Detailspost/>}/>
            <Route path="/users" element={<Allusers/>}/>
            <Route path="/userDetails/:firstName" element={<UserDetails/>}/>
            <Route path="/posts" element={<Allpost/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default ProjectRoutes