import React from "react";
import { Link } from "react-router-dom";



const Modals = ({ onClose }) => {


    return (
        <div className="modalBackdrop">
            <div className="modal-dialog">
                <div className="modal-content modalContainer">
                    <div className="modal-header">
                        <h3 className="modal-title"><strong>Submit Successful</strong></h3>
                        <button type="button" className="closeModalBtn" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <h2>Thank for selling with us!!.</h2>
                        <Link to="/dashboard" className="btn btn-primary">Return to Dashboard</Link> 
                        <button  id="modal-btn" type="button" className="btn btn-warning" onClick={onClose}>Add another Shoe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modals;