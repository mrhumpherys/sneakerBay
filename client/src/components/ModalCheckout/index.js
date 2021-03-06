import React from "react";
import { useMutation, useQuery } from '@apollo/react-hooks'
import { BUY_SHOE } from '../../utils/mutations'
import { useHistory } from 'react-router-dom';
import { QUERY_USER } from '../../utils/queries';


const ModalCheckout = ({ shoe, onClose }) => {
    // const { name, brand, description, price, size  } = currentShoe;
    const { data } = useQuery(QUERY_USER, 
        { variables : { username: shoe.username } });
    const [buyShoe, { error }] = useMutation(BUY_SHOE);
    const history = useHistory();


    const userData = data?.user || {};

 
    const buyShoeHandler = async e => {
        e.preventDefault();


        const mailto = `mailto:${userData.email}?subject=${shoe.name}&body=I am contacting you in reference to buying these ${shoe.name}; please contact me as soon as you can so we can speak further. Thank you!!`;
        window.location.href = mailto;
        
        try {
            await buyShoe({
                variables: { _id: e.target.id }
            });
            
            history.push('/dashboard');
        } catch (e) {
            console.log(e);
        }
    }



    return (
        <div className="modalBackdrop d-flex justify-content-center align-items-center">
            <div className="modal-dialog">
                <div className="modal-content modalContainer">
                    <div className="modal-header">
                        <h3 className="modal-title"><strong>Confirm your purchase</strong></h3>
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
                    </div>
                    <div className="modal-footer">
                        <button  id={shoe._id} value={shoe._id} onClick={buyShoeHandler} type="button" className="btn btn-primary" data-dismiss="modal" ><i className="fas fa-shopping-bag" id={shoe._id}></i> Buy</button>
                        {/* <a  id="modal-btn" value={shoe._id} type="button" className="btn btn-danger" data-dismiss="modal" href="mailto:sneakerbay@sneakerbay.com?subject=I am interested in these awesome shoes!!&body=I am contacting you in reference to buying these shoes; please contact me as soon as you can so we can speak further. Thank you!!">Buy It!</a> */}
                        <button  id="modal-btn" type="button" className="btn btn-warning" onClick={onClose}><i className="fas fa-ban"></i> Cancel</button>
                    </div>
                    {error && <span className="alert alert-danger ml-2">Something went wrong...</span>}
                </div>
            </div>
            </div>
    )
}


export default ModalCheckout;