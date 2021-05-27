import React from "react";
import { Route, Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Navbar() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Route>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src="./img/logo.svg" alt="" width="300" height="35"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        {Auth.loggedIn() ? (
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/"><i className="fas fa-home"></i> Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/add-shoe"><i className="fas fa-dollar-sign"></i> Sell Shoe</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="#" onClick={logout}>Logout</Link>
        </li>
        </ul>
        ) : (
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/login"><i className="fas fa-user-plus"></i> Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup"><i className="fas fa-user-plus"></i> Signup</Link>
            </li>
          </ul>
        )}
        

    </div>
  </div>
</nav>

    </Route>
  );
}

export default Navbar;
