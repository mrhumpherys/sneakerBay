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
                <section class="profile pt-5">
                    <div class="container">
                        <div class="row pb-5">
                            <h2 class="text-center">RESULTS FOR: <span>[SEARCH TERM]</span></h2>
                        </div>
                        <div class="row">
                            {/* {loading ? (
                                <div>Loading...</div>
                                ) : ( */}
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="product-container mb-4">
                                                <div class="product-image">
                                                    <img src="https://via.placeholder.com/600x350" class="img-fluid" />
                                                </div>
                                                <div class="product-detail mt-3 px-4">
                                                    <h3 class="product-name">product name</h3>
                                                    <div class="d-flex justify-content-between">
                                                        <span class="size">size: 10</span>
                                                        <span class="price">$100</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex justify-content-start px-4 product-btns">
                                                    <div class="btn-group my-4" role="group" aria-label="Basic example">
                                                        <button type="button" class="btn"><i class="fas fa-shopping-bag"></i></button>
                                                        <button type="button" class="btn"><i class="far fa-heart"></i></button>
                                                        <Link to="single-product.html" class="btn"><i class="fas fa-search"></i></ Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="product-container mb-4">
                                                <div class="product-image">
                                                    <img src="https://via.placeholder.com/600x350" class="img-fluid" />
                                                </div>
                                                <div class="product-detail mt-3 px-4">
                                                    <h3 class="product-name">product name</h3>
                                                    <div class="d-flex justify-content-between">
                                                        <span class="size">size: 10</span>
                                                        <span class="price">$100</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex justify-content-start px-4 product-btns">
                                                    <div class="btn-group my-4" role="group" aria-label="Basic example">
                                                        <button type="button" class="btn"><i class="fas fa-shopping-bag"></i></button>
                                                        <button type="button" class="btn"><i class="far fa-heart"></i></button>
                                                        <Link to="single-product.html" class="btn"><i class="fas fa-search"></i></ Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="product-container mb-4">
                                                <div class="product-image">
                                                    <img src="https://via.placeholder.com/600x350" class="img-fluid" />
                                                </div>
                                                <div class="product-detail mt-3 px-4">
                                                    <h3 class="product-name">product name</h3>
                                                    <div class="d-flex justify-content-between">
                                                        <span class="size">size: 10</span>
                                                        <span class="price">$100</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex justify-content-start px-4 product-btns">
                                                    <div class="btn-group my-4" role="group" aria-label="Basic example">
                                                        <button type="button" class="btn"><i class="fas fa-shopping-bag"></i></button>
                                                        <button type="button" class="btn"><i class="far fa-heart"></i></button>
                                                        <Link to="single-product.html" class="btn"><i class="fas fa-search"></i></ Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="product-container mb-4">
                                                <div class="product-image">
                                                    <img src="https://via.placeholder.com/600x350" class="img-fluid" />
                                                </div>
                                                <div class="product-detail mt-3 px-4">
                                                    <h3 class="product-name">product name</h3>
                                                    <div class="d-flex justify-content-between">
                                                        <span class="size">size: 10</span>
                                                        <span class="price">$100</span>
                                                    </div>

                                                </div>
                                                <div class="d-flex justify-content-start px-4 product-btns">
                                                    <div class="btn-group my-4" role="group" aria-label="Basic example">
                                                        <button type="button" class="btn"><i class="fas fa-shopping-bag"></i></button>
                                                        <button type="button" class="btn"><i class="far fa-heart"></i></button>
                                                        <Link to="single-product.html" class="btn"><i class="fas fa-search"></i></ Link>
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
