import React from "react";
import { Route, Link } from 'react-router-dom';
import Searchbar from "../components/Searchbar";
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_SHOES } from '../utils/queries';

function Search( { shoes }) {

    

    return (
        <Route>
            <main>
                <Searchbar />
                <section className="profile pt-5">
                    <div className="container">
                        <div className="row pb-5">
                            <h2 className="text-center">RESULTS FOR: <span>[SEARCH TERM]</span></h2>
                        </div>
                        <div className="row">
                            {/* {loading ? (
                                <div>Loading...</div>
                                ) : ( */}
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="product-container mb-4">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/600x350" className="img-fluid" alt="" />
                                                </div>
                                                <div className="product-detail mt-3 px-4">
                                                    <h3 className="product-name">product name</h3>
                                                    <div className="d-flex justify-content-between">
                                                        <span className="size">size: 10</span>
                                                        <span className="price">$100</span>
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-start px-4 product-btns">
                                                    <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                        <button type="button" className="btn"><i className="fas fa-shopping-bag"></i></button>
                                                        <button type="button" className="btn"><i className="far fa-heart"></i></button>
                                                        <Link to="single-product.html" className="btn"><i className="fas fa-search"></i></ Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="product-container mb-4">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/600x350" className="img-fluid" alt="" />
                                                </div>
                                                <div className="product-detail mt-3 px-4">
                                                    <h3 className="product-name">product name</h3>
                                                    <div className="d-flex justify-content-between">
                                                        <span className="size">size: 10</span>
                                                        <span className="price">$100</span>
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-start px-4 product-btns">
                                                    <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                        <button type="button" className="btn"><i className="fas fa-shopping-bag"></i></button>
                                                        <button type="button" className="btn"><i className="far fa-heart"></i></button>
                                                        <Link to="single-product.html" className="btn"><i className="fas fa-search"></i></ Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="product-container mb-4">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/600x350" className="img-fluid" alt="" />
                                                </div>
                                                <div className="product-detail mt-3 px-4">
                                                    <h3 className="product-name">product name</h3>
                                                    <div className="d-flex justify-content-between">
                                                        <span className="size">size: 10</span>
                                                        <span className="price">$100</span>
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-start px-4 product-btns">
                                                    <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                        <button type="button" className="btn"><i className="fas fa-shopping-bag"></i></button>
                                                        <button type="button" className="btn"><i className="far fa-heart"></i></button>
                                                        <Link to="single-product.html" className="btn"><i className="fas fa-search"></i></ Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="product-container mb-4">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/600x350" className="img-fluid" alt="" />
                                                </div>
                                                <div className="product-detail mt-3 px-4">
                                                    <h3 className="product-name">product name</h3>
                                                    <div className="d-flex justify-content-between">
                                                        <span className="size">size: 10</span>
                                                        <span className="price">$100</span>
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-start px-4 product-btns">
                                                    <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                        <button type="button" className="btn"><i className="fas fa-shopping-bag"></i></button>
                                                        <button type="button" className="btn"><i className="far fa-heart"></i></button>
                                                        <Link to="single-product.html" className="btn"><i className="fas fa-search"></i></ Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* )} */}
                        </div>
                    </div>
                </section>
            </main>

        </Route>
    )
}

export default Search;
