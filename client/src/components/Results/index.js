import React from 'react';
import { Link } from 'react-router-dom';

function SearchResult({ shoes }) {

    return (

        <section className="search-results-area">
            <div className="container">
                <div className="row my-5">
                    <h2>LATEST SHOES</h2>
                </div>
                <div className="row">
                    
                    {shoes.map(shoe => (
                        <div className="col-lg-3" key={shoe._id}>
                            <div className="product-container mb-4">
                                <div className="product-image">
                                <Link to={`/single-product/${shoe._id}`}><img src="./img/sneakers.svg" className="img-fluid" alt="" /></Link>
                                </div>
                                <div className="product-detail mt-3 px-4">
                                <Link to={`/single-product/${shoe._id}`}><h3 className="product-name">{shoe.name}</h3></Link>
                                    <div className="d-flex justify-content-between">
                                        <span className="size">Size: {shoe.size}</span>
                                        <span className="price"><strong>${shoe.price}</strong></span>
                                    </div>

                                </div>
                                <div className="d-flex justify-content-start px-4 product-btns">
                                    <div className="btn-group my-4" role="group" aria-label="Basic example">
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#checktoutModal" className="btn"><i className="fas fa-shopping-bag"></i></button>
                                        <Link to={`/single-product/${shoe._id}`} className="btn d-flex justify-content-center align-items-center"><i className="fas fa-search"></i></ Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SearchResult;