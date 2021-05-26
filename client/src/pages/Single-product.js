import React from "react";
import { Route, Link } from 'react-router-dom';

function SingleProduct() {

    return (
        <Route>
            <main>
                <section className="title-area">
                    <div className="container">
                        <div className="row pb-5">
                            <h1 className="text-center">PRODUCT NAME</h1>
                        </div>
                    </div>
                </section>

                <section className="profile pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="img-large-container">
                                    <img src="https://via.placeholder.com/1200x1200" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <h2>SF Air Force 1 Super High<span className="subheader">NIKE</span></h2>
                                        <h3 className="mb-4">$200</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maxime quam nihil corrupti ducimus, est quasi ipsam veritatis officiis quibusdam. Quia praesentium itaque cupiditate expedita autem consequuntur optio alias dolorem.</p>
                                        <h4>Size: 10 M</h4>
                                        <button type="button" className="btn btn-primary">BUY THESE NOW</button>
                                        <Link to="#" className="btn"><i className="far fa-heart"></i> Add to Watchlists</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Route>
    )
}

export default SingleProduct;
