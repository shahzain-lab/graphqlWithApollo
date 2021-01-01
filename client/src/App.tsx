import React from 'react';
///css
import './App.css';
////Apollo Provider
//setup clints
import {ApolloClient, InMemoryCache} from '@apolloClient';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
    </>
  );
}

export default App;
