import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Contact from './Contact'

const Rout = ({shop, Filter, allcatefiller, addtocart, cart, setCart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home addtocart={addtocart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefiller={allcatefiller} addtocart={addtocart}/>} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default Rout