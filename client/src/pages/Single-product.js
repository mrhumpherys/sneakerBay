import React, { useState } from "react";
import { Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SHOE } from '../utils/queries';
import { useParams } from 'react-router-dom';
import ModalCheckout from "../components/ModalCheckout";
import Auth from '../utils/auth';


function SingleProduct() {
// ================ modal start ================== //
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id: shoeId } = useParams();
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };
// ================ modal end ================== //
    const { loading, data } = useQuery(QUERY_SHOE, {
        variables: { id: shoeId }
    });
    const shoe = data?.shoe || {};
    
    const current = Auth.getProfile();
    const currentUser = current.data.username


    function buyButtonHandler(user) {
        if ( currentUser === user || shoe.sold === true) {
            return null;
        }
        return (
            <button type="button" className="btn btn-primary" data-toggle="modal" onClick={() => toggleModal()}>BUY THESE NOW</button>
        )
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <Route>
            <main>
                <section className="title-area">
                    <div className="container">
                        <div className="row pb-5">
                            <h1 className="text-center">{shoe.name}</h1>
                        </div>
                    </div>
                </section>

                <section className="single-shoe-container pt-5">
                
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="img-large-container">
                                    <img src="../img/sneakers.svg" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 side-content">
                                <div className="row">
                                    <div className="col-12 details-container">
                                    {shoe.sold && <div className="corner-ribbon">SOLD</div>}
                                    
                                        <div className="mt-3">
                                            <ul className="list-unstyled product-details-list">
                                                <li className="product-title">
                                                    <h2 className="d-flex justify-content-between"><span>{shoe.name}</span><span>${shoe.price}</span></h2>
                                                    </li>
                                                <li className="before">SOLD BY: {shoe.username}</li>
                                                <li className="before">SIZE: {shoe.size}</li>
                                                <li><strong>Description:<br /></strong>{shoe.description}</li>
                                            </ul>

                                        </div>

                                        {buyButtonHandler(shoe.username)}
                                        {isModalOpen && <ModalCheckout shoe={shoe} onClose={toggleModal} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Route>
    )
}

export default SingleProduct;
