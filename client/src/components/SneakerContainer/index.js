import React from 'react';
import { Link } from 'react-router-dom';


function SneakerContainer({ toSell }) {

const deleteShoeHandler = (e) => {
    e.preventDefault();
    console.log(`Let's delete this sucker!`);
}
    return (
        <>
        {toSell.map((shoe) => (
            <div className="col-lg-4" key={shoe._id}>
                <div className="product-container mb-4">
                <div className="product-image">
                    <Link to={`/single-product/${shoe._id}`}><img src="./img/sneakers.svg" className="img-fluid" alt="" /></Link>
                </div>
                <div className="product-detail mt-3 px-4">
                    <h3 className="product-name"><Link to={`/single-product/${shoe._id}`}>{shoe.name}</Link></h3>
                    <div className="d-flex justify-content-between">
                        <span className="size">{shoe.size}</span>
                        <span className="price">{shoe.price}</span>
                    </div>
                </div>
                <div className="d-flex justify-content-start px-4 product-btns">
                    <div className="btn-group my-4" role="group" aria-label="Basic example">
                        <Link to={`/single-product/${shoe._id}`} className="btn d-flex justify-content-center align-items-center"><i className="fas fa-search"></i></Link>
                        <button type="button" className="btn d-flex justify-content-center align-items-center" onClick={deleteShoeHandler}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
            </div>
        ))}
        </>
    )
}
export default SneakerContainer;
