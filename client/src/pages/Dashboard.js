import React from "react";
import { Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import SneakerContainer from '../components/SneakerContainer';
import BoughtSneaker from '../components/BoughtSneaker';
import facts from "../utils/facts";

const Dashboard = () => {

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
                                            <img src="./img/default.png" className="img-fluid" alt="" />
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
