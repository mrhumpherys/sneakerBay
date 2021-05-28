import React from "react";


const ModalCheckout = ({ shoe, onClose }) => {
    // const { name, brand, description, price, size  } = currentShoe;
    return (
        <div className="container modalBackdrop">
            <div className="modal-dialog">
                <div className="modal-content modalContainer">
                    <div className="modal-header">
                        <h3 className="modal-title"><strong>Purchase</strong></h3>
                        <button type="button" className="closeModalBtn" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="product-image">
                            <img src="https://via.placeholder.com/350x350" className="img-fluid" alt="" />
                        </div>
                        <h3><strong>Is this the shiznit you want to buy? Are you sure?</strong></h3>
                        <h4><strong>{shoe.name}</strong></h4>
                        <h4><strong>By: Nike</strong></h4>
                        <h4><strong>Purchase Price: $299.99</strong></h4>
                        <h4><strong>Size: 11.5 EW</strong></h4>
                    </div>
                    <div className="modal-footer">
                        <button  id="modal-btn" type="button" className="btn btn-danger" data-dismiss="modal">Heck Ya!</button>
                        <button  id="modal-btn" type="button" className="btn btn-warning" onClick={onClose}>Nope</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalCheckout;