import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = () => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Deals</h1>
          </div>
          <FlashCard />
        </div>
      </section>
    </>
  )
}



{/* <FlashCard productItems={productItems} addToCart={addToCart} /> */}
export default FlashDeals