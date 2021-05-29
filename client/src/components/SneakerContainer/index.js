import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_SHOE } from '../../utils/mutations';
import { useParams } from 'react-router-dom';
import ModalDelete from "../ModalDelete";




function SneakerContainer({ toSell }) {
    // ================ modal start ================== //
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id: shoeId } = useParams();
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    // ================ modal end ================== //
    
    if (!toSell.length) {
        return <h3>Got some shoes you want to sell? <Link to="/add-shoe">Click here</Link></h3>;
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
                                <span className="size">Size: {shoe.size}</span>
                                {shoe.sold && <span>sold</span>}
                                <span className="price"><strong>${shoe.price}</strong></span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start px-4 product-btns modal-btn">
                            <div className="btn-group my-4" role="group" aria-label="Basic example">
                                <Link to={`/single-product/${shoe._id}`} className="btn d-flex justify-content-center align-items-center"><i className="fas fa-search"></i></Link>
                                {/* <button type="button" id={shoe._id} className="btn d-flex justify-content-center align-items-center" onClick={deleteShoeHandler}><i className="fas fa-trash"></i></button> */}
                                <button type="button" id={shoe._id} className="btn d-flex justify-content-center align-items-center" data-toggle="modal" onClick={() => toggleModal()}><i className="fas fa-trash"></i></button>
                                {isModalOpen && <ModalDelete shoe={shoe} onClose={toggleModal} />}
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}
export default SneakerContainer;
