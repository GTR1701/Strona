import React from 'react'
import Navbar from '../../components/navbar/component.navbar'
import Formularz from "../../components/formularz/formularz"

function Pomoc({...props}) {
    return ( 
        <div id="Pomoc">
        <Navbar key={101} />
        <Formularz />
        </div>
        
     );
}

export default Pomoc;
