import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import "./App.css"

function App() {
  /*
  step1 :  const { productItems } = Data 
  lai pass garne using props
  
  Step 2 : item lai cart ma halne using useState
  ==> CartItem lai pass garre using props from  <Cart CartItem={CartItem} /> ani import garrxa in cartItem ma
 
  Step 3 :  chai flashCard ma xa button ma

  Step 4 :  addToCart lai chai pass garne using props in pages and cart components
  */
  //Step 1 :
  const { productItems } = Data
  const { shopItems } = Sdata
  //Step 2 :
  const [CartItem, setCartItem] = useState([])
  //Step 4 :
  const addToCart = (product) => {
    // if hamara product already cart me hai to find product
    const productExist = CartItem.find((item) => item.id === product.id);
    // if productExist then will run function setCartItem
    // setCartItem will run map() aur map() each cart me jayega aur cheeck karega
    // jiska item.id product.id same ho
    // productExist me product ka detail hoga
    // aur existing product ka QTY increase by 1
    // if item and product doesnt match then will return original items
    // but if the product doesnt exit in the cart that mean if card is empty
    // then new product is added in cart  and its qty is initalize to 1
    if (productExist) {
      setCartItem(CartItem.map((item) =>
        (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  // Step: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExist = CartItem.find((item) => item.id === product.id)
    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    if (productExist.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      // else
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route path="/" element=
            {<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}
          />
          <Route path="/cart" element=
            {<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
