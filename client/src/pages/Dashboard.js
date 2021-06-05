import React, {useState} from "react";
import { Route } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { UPDATE_AVATAR } from '../utils/mutations';
import SneakerContainer from '../components/SneakerContainer';
import BoughtSneaker from '../components/BoughtSneaker';
import facts from "../utils/facts";


let selectedAvatar = './img/avatars/default.png'

const Dashboard = () => {
    

    const [showAvatarList, setShowAvatarList] = useState('hide')
    const [buttonText, setButtonText] = useState('Update Avatar')

    const [updateAvatarImage] = useMutation(UPDATE_AVATAR)

    const avatarHandler = (e) => {
        selectedAvatar = e.target.value;
        updateAvatarImage({variables: { avatar: selectedAvatar }});

    }
    
   const showAvatars = (e) => {

    e.preventDefault();
   
        if(showAvatarList === 'hide') {
            setShowAvatarList('');
            setButtonText('Hide Avatar')
        }
        else {
            setShowAvatarList('hide');
            setButtonText('Update Avatars');
        }
 
   }
    const { loading, data } = useQuery(QUERY_ME, {
        pollInterval: 500,
    });

    const userData = data?.me || {};
     // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }


    return (
        <Route>
            <main>

                <section className="title-area">
                    <div className="container">
                        <div className="row pb-5">
                            <h1 className="text-center">{userData.username}'s Dashboard</h1>
                        </div>
                    </div>
                </section>

                <section className="profile pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="profile-sidebar">
                                    <div className="user-details">
                                        <div className="user-photo d-flex justify-content-center align-items-center">
                                            <img src={userData.avatar} className="img-fluid" alt="" />
                                        </div>
                                        <div className="px-3 mb-3 d-flex justify-content-center align-items-center">
                                        <button className="btn btn-secondary" to="#" onClick={showAvatars}>{buttonText}</button>
                                        </div>
                                        <div id="avatar-list" className={showAvatarList}>
                                            <form onChange={avatarHandler}>
                                            <div className="row">
                                                <div className="col-4 avatar">
                                                    <label htmlFor="default" className="selected-avatar">
                                                        <input type="radio" id="default" name="avatars" hidden value="./img/avatars/default.png" />
                                                    <img src="./img/avatars/default.png" alt=" " className="img-fluid" />
                                                    </label>
                                                </div>
                                                <div className="col-4 avatar">
                                                <label htmlFor="001-man">
                                                    <input type="radio" id="001-man" name="avatars" hidden value="./img/avatars/001-man.png" />
                                                    <img src="./img/avatars/001-man.png" alt=" " className="img-fluid" /></label>
                                                </div>
                                                <div className="col-4 avatar">
                                                <label htmlFor="026-man">
                                                    <input type="radio" id="026-man" name="avatars" hidden value="./img/avatars/026-man.png" />
                                                    <img src="./img/avatars/026-man.png" alt=" " className="img-fluid" /></label>
                                                </div>
                                                <div className="col-4 avatar">
                                                <label htmlFor="007-man">
                                                    <input type="radio" id="007-man" name="avatars" hidden value="./img/avatars/007-man.png" />
                                                    <img src="./img/avatars/007-man.png" alt=" " className="img-fluid" /></label>
                                                </div>
                                                <div className="col-4 avatar">
                                                <label htmlFor="033-woman">
                                                    <input type="radio" id="033-woman" name="avatars" hidden value="./img/avatars/033-woman.png" />
                                                    <img src="./img/avatars/033-woman.png" alt=" " className="img-fluid" /></label>
                                                </div>
                                                <div className="col-4 avatar">
                                                <label htmlFor="025-man">
                                                    <input type="radio" id="025-man" name="avatars" hidden value="./img/avatars/025-man.png" />
                                                    <img src="./img/avatars/025-man.png" alt=" " className="img-fluid" /></label>
                                                </div>
                                                <div className="col-4 avatar">
                                                <label htmlFor="029-woman">
                                                    <input type="radio" id="029-woman" name="avatars" hidden value="./img/avatars/029-woman.png" />
                                                    <img src="./img/avatars/029-woman.png" alt=" " className="img-fluid" /></label>
                                                </div>
                                                <div className="col-4 avatar">
                                                <label htmlFor="012-woman">
                                                    <input type="radio" id="012-woman" name="avatars" hidden value="./img/avatars/012-woman.png" />
                                                    <img src="./img/avatars/012-woman.png" alt=" " className="img-fluid" /></label>
                                                </div>
                                                <div className="col-4 avatar">
                                                <label htmlFor="038-woman">
                                                    <input type="radio" id="038-woman" name="avatars" hidden value="./img/avatars/038-man.png" />
                                                    <img src="./img/avatars/038-man.png" alt=" " className="img-fluid" /></label>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                        <h3 className="text-center pb-2">{userData.username}</h3>
                                        <ul className="list-unstyled">
                                            <li className="d-flex justify-content-between">
                                                <span>Member since </span><span> {userData.createdAt}</span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <span># of Sales</span><span>{userData.sellCount}</span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <span># of Purchases</span><span>{userData.buyCount}</span>
                                            </li>
                                            <li className="section-header"><h4>Sneaker Facts</h4></li>
                                            <li>
                                                {/* <span>1600 Pennsylvania Ave NW</span><br />
                                                <span>Washington DC, 20500</span><br /><br />
                                                <Link to=""><i className="fas fa-edit"></i> Edit My Shipping Address</Link> */}
                                                <span>{facts()}</span>
                                            </li>
                                            {/* <li className="section-header"><h4>Payment Method</h4></li>
                                            <li>
                                                <span>************1234</span><br />
                                                <span>VISA</span><br /><br />
                                                <Link to=""><i className="fas fa-edit"></i> Edit My Payment Method</Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-12"><h2>MY SHOES</h2></div>
                                </div>
                                <div className="row">
                                    
                                   <SneakerContainer toSell={userData.toSell} />
                                    
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12"><h2>YOUR PURCHASES</h2></div>
                                </div>
                                <div className="row">
                                    <BoughtSneaker bought={userData.bought} />
                                    {/* <div className="col-lg-4">
                                        <div className="product-container mb-4 watched">
                                            <div className="product-image">
                                                <Link to="single-product.html"><img src="https://via.placeholder.com/600x350" className="img-fluid"  alt="" /></Link>
                                            </div>
                                            <div className="product-detail mt-3 px-4">
                                                <h3 className="product-name">product name</h3>
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>Sale Price</span><span>$200</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="d-flex justify-content-start px-4 product-btns">
                                                <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn"><i className="fas fa-shopping-bag"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-heart"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="product-container mb-4 watched">
                                            <div className="product-image">
                                                <Link to="single-product.html"><img src="https://via.placeholder.com/600x350" className="img-fluid"  alt="" /></Link>
                                            </div>
                                            <div className="product-detail mt-3 px-4">
                                                <h3 className="product-name">product name</h3>
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>Sale Price</span><span>$200</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="d-flex justify-content-start px-4 product-btns">
                                                <div className="btn-group my-4" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn"><i className="fas fa-shopping-bag"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-heart"></i></button>
                                                    <button type="button" className="btn"><i className="fas fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Route>
    )
}

export default Dashboard;
