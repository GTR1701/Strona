import React from "react";
import "./ikonki.css";
import { FaRegHandshake } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const IconShow = () => {
  return (
    <div className="slide-container">
      <div className="eachicon">
        <div>
          <hr id="linia" />
          <hr />
          <div className="App">
            <table className="miejsce">
              <tr className="miejsce">
                <th className="icon-image">
                  <FaRegHandshake />
                </th>
                <th className="icon-image">
                  <FaHome />
                </th>
                <th className="icon-image">
                  <FaBolt />
                </th>
              </tr>
              <tr>
                <td className="icon-text ramka">
                  <p className="opis1">
                    Współpraca z klientem jest jednym z najważniejszych aspektów
                    naszej firmy.
                  </p>
                </td>
                <td className="icon-text ramka">
                  <p className="opis2">
                    W naszym biurze obsługi klienta pomożemy ci bezstresowo
                    rozwiązać twój problem.
                  </p>
                </td>
                <td className="icon-text ramka">
                  <p className="opis3">
                    W zakładce pomoc można błyskawicznie zgłosić swój problem.
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconShow;
