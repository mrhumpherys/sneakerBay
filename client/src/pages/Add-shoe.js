import React from "react";
import { Route, Link } from 'react-router-dom';

function AddShoe() {

    return (
        <Route>
            <main>

                <section className="title-area">
                    <div className="container">
                        <div className="row pb-5">
                            <h1 className="text-center">Add Shoe</h1>
                        </div>
                    </div>
                </section>

                <section className="add-shoe pt-5">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-9">
                                <form className="row add-shoe-form">
                                    <div className="col-lg-5">
                                        <div className="img-area">
                                            <img src="https://via.placeholder.com/800x640" className="img-fluid" />
                                        </div>
                                        <div className="my-3">
                                            <label for="formFile" className="form-label">upload photo</label>
                                            <input className="form-control" type="file" id="formFile" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">

                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Shoe Title</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Brand</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Shoe Size</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label break">Shoe Size</label>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" for="inlineRadio1">Mens</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" for="inlineRadio2">Womens</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                <label className="form-check-label" for="inlineRadio3">Grade School</label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="" className="form-label break">Colors</label>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label className="form-check-label" for="inlineCheckbox1">Red</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                <label className="form-check-label" for="inlineCheckbox2">Green</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                                <label className="form-check-label" for="inlineCheckbox3">Blue</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Route >
    )
}

export default AddShoe;
