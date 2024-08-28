import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './page/Home'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product_details from './page/Product_details'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Cartfils from './page/Cartfils'

function App() {
  
  const [cart,setcart]=useState([])
  
   
  console.log(cart);

  return (
    <>
      <BrowserRouter>

        <div className=' bg'>
          <ToastContainer theme='dark' position='top-center' />
          <Header cart={cart} />


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Home />} />
            <Route path='/product/:id' element={<Product_details  cart={cart} setcart={setcart}    />} />
            <Route path='/cart' element={<Cartfils cart={cart} setcart={setcart}  />} />
          </Routes>

        </div>
      </BrowserRouter>
      <Footer />



    </>
  )
}

export default App
