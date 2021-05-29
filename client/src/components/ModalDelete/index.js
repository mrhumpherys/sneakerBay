// import React, { useState } from "react";
import React from "react";
//import ConfirmDelete from "./confirmDelete";
// import { QUERY_SHOE } from '../utils/queries';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_SHOE } from '../../utils/mutations';




const ModalDelete = ({ shoe, onClose }) => {
     // ================ modal start ================== //
    //  const [isModalOpen, setIsModalOpen] = useState(false);
    //  const toggleModal = () => {
    //      setIsModalOpen(!isModalOpen);
    //  };
     // ================ modal end ================== //
    //  const { loading, data } = useQuery(QUERY_SHOE, {
    //     variables: { id: shoeId }
    // });
    // const shoe = data?.shoe || {};

    // if (loading) {
    //     return <div>Loading...</div>
    // }
    // const { name, brand, description, price, size  } = currentShoe;
    const [removeMyShoe, { error }] = useMutation(DELETE_SHOE)
    const deleteShoeHandler = async e => {
        e.preventDefault();


        try {
            await removeMyShoe({
                variables: { _id: e.target.value }
                
            });
            onClose()
        } catch (e) {
            console.log(e);
        }
    }

    return (
      
        <div className="modalBackdrop">
            {/* <div id="delete-shoe" tabindex="-1" > */}
            <div className="modal-dialog modal-lg">

                <div className="modal-content modalContainer">
                    <div className="modal-header d-flex align-items-start">           
                        <h3 className="modal-title"><strong>Are you sure you want to delete these?</strong></h3>
                        <button type="button" className="closeModalBtn" onClick={onClose}>&times;</button>
                    </div>

                    <div className="modal-body">
                        <div className="row">
                            <div className="col-6">
                            <div className="product-image">
                            <img src="../img/sneakers.svg" className="img-fluid" alt="" />
                            </div>
                            </div>
                            <div className="col-6">
                            <ul className="list-unstyled">
                                <li><h2>{shoe.name}</h2></li>
                                <li>Price: ${shoe.price}</li>
                                <li>Size: {shoe.size}</li>

                            </ul>
                            </div>
                        </div>
                    {error && <span className="alert alert-danger ml-2">Something went wrong...</span>}
                        
                        
                        
                    </div>
                    <div className="modal-footer">
                        <button id="modal-btn" type="button" className="btn btn-primary " data-toggle="modal" value={shoe._id} onClick={deleteShoeHandler}><i className="fas fa-trash-alt"></i> Delete</button>
                        <button  id="modal-btn" type="button" className="btn btn-warning" onClick={onClose}><i className="fas fa-ban"></i> Cancel</button>
                    </div>
                    </div>
                </div>
            </div>
        //  </div>
         
    )
}

export default ModalDelete;
