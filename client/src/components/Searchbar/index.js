import React from 'react';

function Searchbar() {


    return(
        <section className="title-area">
            <div className="container">
                <div className="row pb-4">
                    <h2 className="text-center">SNEAKER SEARCH</h2>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-8">
                       <form className="row g-3">
                           <div className="col-9">
                             <label for="sneakersearch" className="visually-hidden">sneaker search</label>
                             <input type="text" className="form-control form-control-lg" id="inputShowSearch" placeholder="search" />
                           </div>
                           <div className="col-3">
                             <button type="submit" className="btn btn-primary mb-3 btn-lg">Search</button>
                           </div>
                         </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Searchbar;