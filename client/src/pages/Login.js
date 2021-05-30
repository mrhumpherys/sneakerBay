// import React from "react";
import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
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
        window.location.href="/dashboard"
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

              <h1 className="h3 mb-3 fw-normal">Please Login</h1>

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
                Login
              </button>
              {error && <div className="alert alert-danger mt-2">Incorrect username or password. Please try again.</div>}
              <div className="mt-3">
                <Link to="/signup">Don't have an account? Sign up</Link>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
