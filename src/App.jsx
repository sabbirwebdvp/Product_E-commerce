import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import RootLatouts from './components/RootLatouts';
import SignUp from './pages/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<RootLatouts/>} >
     <Route path="/home" element={<Home/>} ></Route>
     <Route path="/product" element={<Product/>} ></Route>
     <Route path="/login" element={<Login/>} ></Route>
     <Route path="/signup" element={<SignUp/>} ></Route>
     </Route>
     
    </>
  )
);


const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>


  )
}

export default App