import React from "react";
import IconsAPI from "../../services/icons-api";
import "./ikonki.css";
import { FaRegHandshake } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const icons = new IconsAPI();
let ikonki = icons.getIcons();

const IconShow = () => {
  return (
    <div className="slide-container">
        {ikonki.map((iconfile) => (
          <div className="eachicon" key={iconfile.id}>
            <div>   
            <hr id="linia"/>
            <hr/>
            <div className="App">
            <table>
        <tr id="ramka">
          <th><FaRegHandshake/></th>
          <th><FaHome/></th>
          <th><FaBolt/></th>
        </tr>
        <tr>
          <td className="opis1">Współpraca z klientem jest jednym z najważniejszych aspektów naszej firmy.</td>
          <td className="opis2">W naszym biurze obsługi klienta pomożemy ci bezstresowo rozwiązać twój problem.</td>
          <td className="opis3">W zakładce pomoc można błyskawicznie zgłosić swój problem.</td>
        </tr>
      </table>
    </div>
            </div>
          </div>
        
        ))}
     
    </div>
  );
};

export default IconShow;