import React, { useEffect, useState } from "react";
import { getFilteredData } from "../../services/users-service";
import LoginModal from "../login-modal/component.loginModal";
import "./getData.css";

function GetData() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("*");
  useEffect(() => {
    (async () => {
      let wynik = await getFilteredData(search);
      setUsers(wynik);
    })();
  }, [search]);

  return (
    <div>
      <div className="szukanie">
        <input
          type="text"
          id="Search"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Wyszukaj:"
        />
      </div>
      <table className="tabela-panel">
        <tr>
          <td className="tabela-panel komorka-panel">Id</td>
          <td className="tabela-panel komorka-panel" colSpan={2}>
            Zgłaszający
          </td>
          <td className="tabela-panel komorka-panel">Firma</td>
          <td className="tabela-panel komorka-panel">Rodzaj zgłoszenia</td>
          <td className="tabela-panel komorka-panel">Tytuł zgłoszenia</td>
          <td className="tabela-panel komorka-panel">Krótki opis</td>
          <td className="tabela-panel komorka-panel">Szczegóły</td>
        </tr>
        {users.map((val) => {
          // console.log(val);
          return [
            <tr className="tabela-panel">
              <td className="tabela-panel komorka-panel">{val.Id}</td>
              <td className="tabela-panel komorka-panel">{val.Imie}</td>
              <td className="tabela-panel komorka-panel">{val.Nazwisko}</td>
              <td className="tabela-panel komorka-panel">{val.Firma}</td>
              <td className="tabela-panel komorka-panel">
                {val.Rodzaj_zgloszenia}
              </td>
              <td className="tabela-panel komorka-panel">{val.Tytul}</td>
              <td className="tabela-panel komorka-panel">{val.Krotki_opis}</td>
              <td className="tabela-panel komorka-panel">
                <LoginModal
                  Id={val.Id}
                  Imie={val.Imie}
                  Nazwisko={val.Nazwisko}
                  Firma={val.Firma}
                  Rodzaj_zgloszenia={val.Rodzaj_zgloszenia}
                  Tytul={val.Tytul}
                  Opis={val.Opis}
                  Data_zgl={val.Data_zgloszenia}
                  Data_zgl_dok={val.Data_zgloszenia_dokl}
                  Data_przyj={val.Data_przyj_serwis}
                  Data_wysyl_do_kli={val.Data_wysyl_do_kli}
                />
              </td>
            </tr>,
          ];
        })}
      </table>
    </div>
  );
}

export default GetData;
