import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_SHOE} from '../../utils/mutations';




function SneakerContainer({ toSell }) {
    const [removeMyShoe, { error }] = useMutation(DELETE_SHOE)
    

const deleteShoeHandler = async e => {
    e.preventDefault();
    console.log(`Let's delete this sucker!`);
    console.log(e.target.id)
    
    try{
        await removeMyShoe({
            variables: { _id: e.target.id }
        });
    } catch (e) {
        console.log(e);
    }
}
    return (
        <>
        {error && <span className="alert alert-danger ml-2">Something went wrong...</span>}
        {toSell.map((shoe) => (
            <div className="col-lg-4" key={shoe._id}>
                <div className="product-container mb-4">
                <div className="product-image">
                    <Link to={`/single-product/${shoe._id}`}><img src="./img/sneakers.svg" className="img-fluid" alt="" /></Link>
                </div>
                <div className="product-detail mt-3 px-4">
                    <h3 className="product-name"><Link to={`/single-product/${shoe._id}`}>{shoe.name}</Link></h3>
                    <div className="d-flex justify-content-between">
                        <span className="size">Size: {shoe.size}</span>
                        <span className="price"><strong>${shoe.price}</strong></span>
                    </div>
                </div>
                <div className="d-flex justify-content-start px-4 product-btns">
                    <div className="btn-group my-4" role="group" aria-label="Basic example">
                        <Link to={`/single-product/${shoe._id}`} className="btn d-flex justify-content-center align-items-center"><i className="fas fa-search"></i></Link>
                        <button type="button" id={shoe._id} className="btn d-flex justify-content-center align-items-center" onClick={deleteShoeHandler}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
            
            </div>
        ))}
        </>
    )
}
export default SneakerContainer;
