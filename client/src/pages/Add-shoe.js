import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { ADD_SHOE } from '../utils/mutations';
//import { QUERY_SHOES, QUERY_ME } from '../utils/queries';
import  Modals  from '../components/Modals';


function AddShoe() {
  // ================ modal start ================== //
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
// ================ modal end ================== //

  const [shoeFormData, setShoeFormData] = useState({ name: '', size:'', description: '', price: ''})
  const [addNewShoe, { error }] = useMutation(ADD_SHOE)
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setShoeFormData({
      ...shoeFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
        await addNewShoe({
            variables: { input : shoeFormData }
        });

        setShoeFormData({ name: '', size:'', description: '', price: ''});
        toggleModal();
    } catch (e) {
        console.log(e);
    }
    //<button type="button" className="btn btn-primary" data-toggle="modal" onClick={() => toggleModal()}>BUY THESE NOW</button>
    //{isModalOpen && <ModalCheckout shoe={shoe} onClose={toggleModal} />}
  };

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
                <form className="row add-shoe-form" onSubmit={handleFormSubmit}>
                  <div className="col-lg-5">
                    <div className="img-area">
                      <img
                        src="https://via.placeholder.com/800x640"
                        className="img-fluid"
                        alt="placeholder"
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="formFile" className="form-label">
                        upload photo
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Shoe Title
                      </label>
                      <input
                        type="name"
                        name="name"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={shoeFormData.name}
                        onChange={handleChange}
                        placeholder="Example: Nike Jordan 1"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Size
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="size"
                        value={shoeFormData.size}
                        onChange={handleChange}
                        placeholder="Example: 10.0"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="price"
                        value={shoeFormData.price}
                        onChange={handleChange}
                        placeholder="$99.00"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleInputPassword1"
                        name="description"
                        value={shoeFormData.description}
                        onChange={handleChange}
                        placeholder="Enter your description"
                        
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    
                  </div>
                </form>
                {error && <span className="ml-2">Something went wrong...</span>}
              </div>
            </div>
          </div>
        </section>
      </main>
      {isModalOpen && <Modals onClose={toggleModal} />}
    </Route>
  );
}

export default AddShoe;
