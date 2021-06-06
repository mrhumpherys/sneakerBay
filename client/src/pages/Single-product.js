import React, { useState } from "react";
import { Route } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_SHOE } from '../utils/queries';
import { ADD_SHOE_IMAGE } from '../utils/mutations'
import { useParams } from 'react-router-dom';
import ModalCheckout from "../components/ModalCheckout";
import Auth from '../utils/auth';


function SingleProduct() {
// add shoe image
const [addShoeImage] = useMutation(ADD_SHOE_IMAGE)
    let imgFile;
    let Base64Image;
    const onFileChange = (event) => {
        imgFile = event.target.files[0];
        let reader = new FileReader();
        if (imgFile) {
            reader.readAsDataURL(imgFile);
            reader.onload = () => {
                Base64Image = reader.result;
            };
            reader.onerror = (error) => {
                console.log('error: ', error) 
            };
            return Base64Image;
        }

    }
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
    const currentUser = current.data.username;

    function buyButtonHandler(user) {
        if ( currentUser === user || shoe.sold === true) {
            return null;
        }

        return (
            <button type="button" className="btn btn-primary" data-toggle="modal" onClick={() => toggleModal()}>BUY THESE NOW</button>
        )
    }
    function addImage(user) {
        if (currentUser === user ) {
            return (
                <form onSubmit={imageSubmitHandler}>
                    <div className="input-group mt-3">
                        <input onChange={onFileChange} type="file" className="form-control" aria-describedby="image upload" aria-label="Upload" />
                        <button className="btn btn-primary" type="submit" >Add Photo</button>
                        
                    </div>
                    <div className="form-text">For best results we recommend a 4:3 image ratio e.g., 640x480</div>
                </form>
            )
        } else { return null;}
    }
    const imageSubmitHandler = async (event) => {
        event.preventDefault();
        // setShoeImage(Base64Image)

        addShoeImage({variables: { image: Base64Image, _id: shoeId }});

        
    }
    if (loading) {
        return <div id="loading" className="loading-div d-flex jutify-content-center align-items-center">Loading...</div>
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
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-10 product-box">
                                <div className="row">
                                <div className="col-lg-6">
                                <div className="img-large-container">
                                    <img src={shoe.image} className="img-fluid" alt="" />
                                </div>
                                {addImage(shoe.username)}
                            </div>
                            <div className="col-lg-6 side-content">
                                <div className="row">
                                    <div className="col-12 details-container">
                                    {shoe.sold && <div className="corner-ribbon">SOLD</div>}
                                            <ul className="list-unstyled product-details-list">
                                                <li className="product-title">
                                                    <h2 className="d-flex justify-content-between"><span>{shoe.name}</span><span>${shoe.price}</span></h2>
                                                    </li>
                                                <li className="before">SOLD BY: {shoe.username}</li>
                                                <li className="before">SIZE: {shoe.size}</li>
                                                <li><strong>Description:<br /></strong>{shoe.description}</li>
                                            </ul>
                                        {buyButtonHandler(shoe.username)}
                                        {isModalOpen && <ModalCheckout shoe={shoe} onClose={toggleModal} />}
                                    </div>
                                </div>
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
