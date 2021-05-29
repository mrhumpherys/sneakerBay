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
      
        <div className="container modalBackdrop">
            {/* <div id="delete-shoe" tabindex="-1" > */}
            <div className="modal-dialog">

                <div className="modal-content modalContainer">
                    <div className="modal-header">           
                        <h3 className="modal-title"><strong>Delete Item</strong></h3>
                        <button type="button" className="closeModalBtn" onClick={onClose}>&times;</button>
                    </div>

                    <div className="modal-body">
                    {error && <span className="alert alert-danger ml-2">Something went wrong...</span>}
                        <div className="product-image">
                            <img src="../img/sneakers.svg" className="img-fluid" alt="" />
                        </div>
                        <h3><strong>You really want to delete this shiznit? Are you sure?</strong></h3>
                        <h4><strong>{shoe.name}</strong></h4>
                        <h4><strong>Seller: {shoe.username}</strong></h4>
                        <h4><strong>Price: ${shoe.price}</strong></h4>
                        <h4><strong>Size: {shoe.size}</strong></h4>
                    </div>
                    <div className="modal-footer">
                        <button id="modal-btn" type="button" className="btn btn-danger" data-toggle="modal" value={shoe._id} onClick={deleteShoeHandler}>Heck Ya!</button>
                        <button  id="modal-btn" type="button" className="btn btn-warning" onClick={onClose}>Nope</button>
                    </div>
                    </div>
                </div>
            </div>
        //  </div>
         
    )
}

export default ModalDelete;
