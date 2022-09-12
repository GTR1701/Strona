import React from 'react'
import Navbar from '../../components/navbar/component.navbar';
import NavbarApi from '../../services/navbar-api'

const navbarApi = new NavbarApi();

function Home(...props) {
    return ( 
        <Navbar content='O firmie'/>
     );
}

export default Home;
