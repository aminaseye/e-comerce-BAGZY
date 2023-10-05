
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import  Home from "../pages/auth/Home";
import  Login from "../pages/auth/Login";
import  Register from "../pages/auth/Register";
import  Checkout from "../pages/auth/Checkout";
import  Contact from "../pages/auth/Contact";
import  Fav from "../pages/auth/Fav";





const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path= "/" element = {<Home />}/> 
            <Route path= "/login" element = {<Login />} />
            <Route path= "/register" element = {<Register />} />
            <Route path= "/checkout" element = {<Checkout />} /> 
            <Route path= "/contact" element = {<Contact />} />
            <Route path= "/fav" element = {<Fav />} />
            <Route path= "/*" element = {<Navigate to = "/"/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;