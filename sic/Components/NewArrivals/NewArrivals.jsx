import React from 'react'

const NewArrivals = () => {
  return (
    <>
        <section className="NewArrivals background">
        <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" alt="" />
                        {/* <i className="fa fa-border-all"></i> */}
                        <h2>New Arrivals</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View All</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <TopCart />
            </div>
        </section>
    </>
  )
}

export default NewArrivals