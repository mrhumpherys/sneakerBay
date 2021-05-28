import React from "react";


const ConfirmDelete = ({onClose}) => {
    // const { name, brand, description, price, size  } = currentShoe;
    return (
       
    // ==================================== CONFIRM DELETE MODAL START ======================================================
    <div className="container modalBackdrop">

        <div  id="confirm-delete" tabIndex="-1"  >
        <div className="modal-dialog">

            <div className="modal-content modalContainer">
                <div className="modal-header">    
                    <h3 className="modal-title"><strong>Are You Sure You Want To Delete This Item?</strong></h3>
                    {/* <button type="button" className="closeModalBtn" onClick={onClose}>&times;</button> */}
                </div>

                <div className="modal-footer">
                    <button id="modal-btn" type="button" className="btn btn-danger" data-dismiss="modal">Heck Ya!</button>
                    <button id="modal-btn" type="button" className="btn btn-warning" onClick={onClose}>Nope</button>
                </div>
            </div>
</div>
        </div>
     </div>  
    )
}


export default ConfirmDelete;