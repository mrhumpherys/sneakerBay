// import React from "react";
import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Signup(props) {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
    // submit form
    const handleFormSubmit = async event => {
      event.preventDefault();
      // use try/catch instead of promises to handle errors
      try {
        // execute addUser mutation and pass in variable data from form
        const { data } = await addUser({
          variables: { ...formState }
        });
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };

  return (
    <main className="form-signin d-flex flex-column h-100">
      <div className="container align-items-center">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4">
            <form onSubmit={handleFormSubmit} className="text-center">
              <img
                className="mb-4"
                src="./img/logo.svg"
                alt=""
                width="300"
                height="35"
              />
              <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={formState.username}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign Up
              </button>
              <div className="mt-3">
                <Link to="#">Already have an account? Login</Link>
              </div>
              <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
            {error && <div className="alert alert-danger">Stranger Danger! Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
