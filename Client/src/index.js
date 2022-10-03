import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Download from './pages/Download/download';
import OFirmie from './pages/O-firmie/O_firmie';
import Pomoc from './pages/Pomoc/Pomoc'
import Kontakt from './pages/Kontakt/Kontakt'
// import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
// import {onError} from '@apollo/client/link/error'

// const errorLink = onError(({graphqlErrors, networkError}) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({message, location, path}) => {
//       alert(`Graphql error ${message}`)
//     })
//   }
// })

// const link = from([
//   errorLink,
//   new HttpLink({uri:"http://localhost:6969/graphql"})
// ])

// const client = new ApolloClient({
//   cache: InMemoryCache(),
//   link: link
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <ApolloClient client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/O_Firmie' element={<OFirmie />}/>
        <Route path='/Download' element={<Download />}/>
        <Route path='/Pomoc' element={<Pomoc />}/>
        <Route path='/Kontakt' element={<Kontakt />}/>
      </Routes>
    </BrowserRouter>
  // </ApolloClient>
    
  // </React.StrictMode>
);
