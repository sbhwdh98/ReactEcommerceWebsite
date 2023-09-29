import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = ({productItems}) => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Deals</h1>
          </div>
          <FlashCard productItems={productItems} />
        </div>
      </section>
    </>
  )
}



{/* <FlashCard productItems={productItems} addToCart={addToCart} /> */}
export default FlashDeals