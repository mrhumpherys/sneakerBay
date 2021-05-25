import React from 'react';
import { Route, Link } from 'react-router-dom';

function SneakerContainer() {
    return (
        <Route>
            <div className="product-container mb-4">
                <div className="product-image">
                    <Link to="single-product.html"><img src="https://via.placeholder.com/600x350" className="img-fluid" /></Link>
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
                        <button to="single-product.html" className="btn"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        </Route>
    )
}
export default SneakerContainer;
