import React from "react";
import "react-slideshow-image/dist/styles.css";
import IconsAPI from "../../services/icons-api";
import "./ikonki.css";

const icons = new IconsAPI();
let ikonki = icons.getIcons();

const IconShow = () => {
  return (
    <div className="slide-container">
        {ikonki.map((iconfile) => (
          <div className="each" key={iconfile.id}>
            <div>   
            <div className="App">
      <table>
        <tr>
          <th><i class="fa-regular fa-handshake"></i></th>
          <th>{iconfile.text}</th>
        </tr>
        <tr>
          <td>{iconfile.href}</td>
          <td>{iconfile.text}</td>
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