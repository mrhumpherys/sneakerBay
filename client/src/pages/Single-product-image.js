import React, { useState } from "react";
import { Route } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { QUERY_SHOE } from '../utils/queries';
import { ADD_SHOE_IMAGE } from '../utils/mutations'
import { useParams } from 'react-router-dom';
import ModalCheckout from "../components/ModalCheckout";
import Auth from '../utils/auth';



function SingleProduct() {
    // const [shoeImage, setShoeImage] = useState('');
    // const [fileBase64String, setFileBase64String] = useState('');
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
                //Base64Image = Base64Image.split(",")[1]
                console.log(Base64Image);
            };
            reader.onerror = (error) => {
                console.log('error: ', error) 
            };
            return Base64Image;
        }

    }
    // const encodeFileBase64 = (file) => {
    //     let reader = new FileReader();
    //     if (imgFile) {
    //         reader.readAsDataURL(imgFile);
    //         reader.onload = () => {
    //             let Base64 = reader.result;
    //             Base64 = Base64.split(",")[1]
    //             console.log(Base64);
    //             setFileBase64String(Base64);
    //         };
    //         reader.onerror = (error) => {
    //             console.log('error: ', error) 
    //         };
    //     }
    // }
    // encodeFileBase64(selectedFile[0]);

    const imageSubmitHandler = async (event) => {
        event.preventDefault();
        // setShoeImage(Base64Image)

        addShoeImage({variables: { image: Base64Image, _id: shoeId }});
        console.log("this is the shoe " + Base64Image);
        
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
    const currentUser = current.data.username

    
    
    
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
                                    <img src={shoe.image} className="img-fluid" alt="" />
                                </div>
                                <form onSubmit={imageSubmitHandler}>
                                    <input type="file" onChange={onFileChange}/>
                                    <button className="btn btn-primary" type="submit">Submit PHoto</button>
                                </form>
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
