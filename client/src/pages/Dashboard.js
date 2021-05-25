import React from "react";
import { Route, Link } from 'react-router-dom';

function Dashboard() {

    return (
        <Route>
            <main>

                <section className="title-area">
                    <div className="container">
                        <div className="row pb-5">
                            <h1 className="text-center">Dashboard</h1>
                        </div>
                    </div>
                </section>

                <section className="profile pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="profile-sidebar">
                                    <div className="user-details">
                                        <div className="user-photo d-flex justify-content-center align-items-center">
                                            <img src="https://via.placeholder.com/150x150" className="img-fluid img-round" />
                                        </div>
                                        <h3 className="text-center pb-2">Username</h3>
                                        <ul className="list-unstyled">
                                            <li className="d-flex justify-content-between">
                                                <span>Member since</span><span>Aug 2020</span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <span># of Sales</span><span>15</span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <span># of Purchases</span><span>5</span>
                                            </li>
                                            <li className="section-header"><h4>Shipping Address</h4></li>
                                            <li>
                                                <span>1600 Pennsylvania Ave NW</span><br />
                                                <span>Washington DC, 20500</span><br /><br />
                                                <Link to=""><i className="fas fa-edit"></i> Edit My Shipping Address</Link>
                                            </li>
                                            <li className="section-header"><h4>Payment Method</h4></li>
                                            <li>
                                                <span>************1234</span><br />
                                                <span>VISA</span><br /><br />
                                                <Link to=""><i className="fas fa-edit"></i> Edit My Payment Method</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-12"><h2>SALES</h2></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="product-container mb-4">
                                            <div className="product-image">
                                                <Link to="single-product.html"><img src="https://via.placeholder.com/600x350" className="img-fluid" /></Link>
                                            </div>
                                            <div className="product-detail mt-3 px-4">
                                                <h3 className="product-name">product name</h3>
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>Post Date</span><span>Apr 17, 2021</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <span>Sale Price</span><span>$200</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <span>Status</span><span> SOLD</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="d-flex justify-content-start px-4 product-btns">
                                                <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn"><i className="fas fa-search"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="product-container mb-4">
                                            <div className="product-image">
                                                <Link to="single-product.html"><img src="https://via.placeholder.com/600x350" className="img-fluid" /></Link>
                                            </div>
                                            <div className="product-detail mt-3 px-4">
                                                <h3 className="product-name">product name</h3>
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>Post Date</span><span>Apr 17, 2021</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <span>Sale Price</span><span>$200</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <span>Status</span><span> SOLD</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="d-flex justify-content-start px-4 product-btns">
                                                <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn"><i className="fas fa-search"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="product-container mb-4">
                                            <div className="product-image">
                                                <Link to="single-product.html"><img src="https://via.placeholder.com/600x350" className="img-fluid" /></Link>
                                            </div>
                                            <div className="product-detail mt-3 px-4">
                                                <h3 className="product-name">product name</h3>
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>Post Date</span><span>Apr 17, 2021</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <span>Sale Price</span><span>$200</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <span>Status</span><span> SOLD</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="d-flex justify-content-start px-4 product-btns">
                                                <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn"><i className="fas fa-search"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12"><h2>WATCHLIST</h2></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="product-container mb-4 watched">
                                            <div className="product-image">
                                                <Link to="single-product.html"><img src="https://via.placeholder.com/600x350" className="img-fluid" /></Link>
                                            </div>
                                            <div className="product-detail mt-3 px-4">
                                                <h3 className="product-name">product name</h3>
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>Sale Price</span><span>$200</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="d-flex justify-content-start px-4 product-btns">
                                                <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn"><i className="fas fa-shopping-bag"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-heart"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="product-container mb-4 watched">
                                            <div className="product-image">
                                                <Link to="single-product.html"><img src="https://via.placeholder.com/600x350" className="img-fluid" /></Link>
                                            </div>
                                            <div className="product-detail mt-3 px-4">
                                                <h3 className="product-name">product name</h3>
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>Sale Price</span><span>$200</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="d-flex justify-content-start px-4 product-btns">
                                                <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn"><i className="fas fa-shopping-bag"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-heart"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
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

export default Dashboard;
