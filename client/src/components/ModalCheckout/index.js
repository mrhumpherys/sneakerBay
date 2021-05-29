import React from "react";
import { useMutation } from '@apollo/react-hooks'
import { BUY_SHOE } from '../../utils/mutations'


const ModalCheckout = ({ shoe, onClose }) => {
    // const { name, brand, description, price, size  } = currentShoe;
    const [buyShoe, { error }] = useMutation(BUY_SHOE);


    const buyShoeHandler = async e => {
        e.preventDefault();
        console.log(`bought`);
        console.log(e.target.value)

        try {
            await buyShoe({
                variables: { _id: e.target.value }
            });
        } catch (e) {
            console.log(e);
        }
    }



    return (
        <div className="modalBackdrop">
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
                        <button  id="modal-btn" value={shoe._id} onClick={buyShoeHandler} type="button" className="btn btn-danger" data-dismiss="modal" ><i class="fas fa-shopping-bag"></i> Buy</button>
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