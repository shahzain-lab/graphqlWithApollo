import React from 'react';
///css
import './App.css';
////Apollo Provider
import {ApolloProvider} from '@apollo/client'
//setup clints
import {ApolloClient, InMemoryCache} from '@apollo/client';
///components
import { Countries } from './components/Countries';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
 

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Countries />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
