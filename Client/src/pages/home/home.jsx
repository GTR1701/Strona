import React from 'react'
import GetUsers from '../../components/getUsers/getUsers.component';
import Navbar from '../../components/navbar/component.navbar';
import './home.css'

function Home({...props}) {
    return (
        <div id='Home'>
            <Navbar key={101} />
            <GetUsers />
        </div>
     );
}

export default Home;
