import React from 'react';


function Hero() {


    return (
        <section className="hero d-flex align-items-center">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="intro text-center">
                        <h1>Your Ultimate Sneaker Source</h1>
                            <p><strong>Got 'em!</strong> 2 words every sneaker head loves to say. But we all know how rare it is to get those exclusive shoes. Now with SneakerBay you don't have to worry. Explore, buy, and sell the best and latest sneakers. The SneakerBay<sup>TM</sup> App connects buyers and sellers of sneakers around the world giving you the opportunity to pickup rare shoes you may have missed. </p>
                            {/* <Link to="#sneakerList" className="btn btn-outline-light btn-lg my-3">FIND YOUR SHOES</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;