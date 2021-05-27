import React from "react";
import { Route, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SHOE } from '../utils/queries';
import { useParams } from 'react-router-dom';


function SingleProduct() {

    const { id: shoeId } = useParams();

    const { loading, data } = useQuery(QUERY_SHOE, {
        variables: { id: shoeId }
    });
    const shoe = data?.shoe || {};

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <Route>
            <main>
                <section className="title-area">
                    <div className="container">
                        <div className="row pb-5">
                            <h1 className="text-center">PRODUCT NAME</h1>
                        </div>
                    </div>
                </section>

                <section className="profile pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="img-large-container">
                                    <img src="https://via.placeholder.com/1200x1200" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <h2>{shoe.name}<span className="subheader">{shoe.username}</span></h2>
                                        <h3 className="mb-4">{shoe.price}</h3>
                                        <p>{shoe.description}</p>
                                        <h4>{shoe.size}</h4>
                                        <button type="button" className="btn btn-primary">BUY THESE NOW</button>
                                        <Link to="#" className="btn"><i className="far fa-heart"></i> Add to Watchlists</Link>
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
