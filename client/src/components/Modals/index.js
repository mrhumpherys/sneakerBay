import React from "react";
import { Link } from "react-router-dom";



const Modals = ({ onClose }) => {


    return (
        <div className="modalBackdrop d-flex justify-content-center align-items-center">
            <div className="modal-dialog">
                <div className="modal-content modalContainer">
                    <div className="modal-header d-flex justify-content-end">
                        <button type="button" className="closeModalBtn" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-body text-center">
                        <h2>Your Shoes have been successfully posted</h2>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                    <Link to="/dashboard" className="btn btn-primary">Return to Dashboard</Link>
                        <button  id="modal-btn" type="button" className="btn btn-warning" onClick={onClose}>Add another Shoe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modals;