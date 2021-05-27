import React from 'react';
import {Link} from 'react-router-dom';

function Hero() {


    return (
        <section className="hero d-flex align-items-center">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="intro text-center">
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eos quaerat beatae, voluptates cumque labore officiis eveniet reprehenderit aperiam commodi accusamus sapiente non. Harum rem aut iste ab doloribus delectus.</p>
                            <Link to="#" className="btn btn-outline-light btn-lg mt-3">START SEARCHING NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;