import React from "react";
import { Link } from "react-router-dom";



const avatarModal = ({ onClose }) => {

    const avatarHandler = e => {
        let selectedAvatar = e.target.value
    }

    return (
        <div className="modalBackdrop d-flex justify-content-center align-items-center">
            <div className="modal-dialog">
                <div className="modal-content modalContainer">
                    <div className="modal-header d-flex justify-content-end">
                        <button type="button" className="closeModalBtn" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-body text-center">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="./img/avatars/001-man.png" className="img-fluid" />
                            </div>
                            <div className="col-lg-6">
                                <h3>Select an Avatar</h3>
                                <select className="form-control" onChange={avatarHandler}>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                    <Link to="/dashboard" className="btn btn-primary">Save</Link>
                        <button  id="modal-btn" type="button" className="btn btn-warning" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default avatarModal;