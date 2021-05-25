import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Navbar from './components/Navbar/';
import Hero from './components/Hero/';
import Bar from './components/Bar';
import Searchbar from './components/Searchbar';
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
        <Hero />
        <Bar />
        <Searchbar />
      </Router>
    </ApolloProvider>
  );
}

export default App;
