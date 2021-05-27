import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Navbar from './components/Navbar/';
import Footer from './components/Footer';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SingleProduct from "./pages/Single-product";
import Search from "./pages/Search";
import AddShoe from "./pages/Add-shoe";
import NoMatch from "./pages/NoMatch";
import './App.css';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/single-product" component={SingleProduct} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/add-shoe" component={AddShoe} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
