// import React from "react";
import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
// import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

function Login() {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async event => {
      event.preventDefault();
      try {
        const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e)
      }
    };

    const handleChange = event => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value
      });
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
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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
                Sign in
              </button>
              <div className="mt-3">
                <a href="#">Don't have an account? Sign up</a>
              </div>
              <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
            {error && <div className="alert alert-danger">Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
