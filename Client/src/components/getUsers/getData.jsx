import React, { useEffect, useState } from "react";
import { getAllData, getFilteredData } from "../../services/users-service";
import LoginModal from "../login-modal/component.loginModal";
import "./getData.css";

function GetData() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("*");
  console.log(search);
  useEffect(async () => {
    setUsers(await getFilteredData(search));
  }, []);

  return (
    <div>
      <label htmlFor="Search">Wyszukaj: </label>
      <input
        type="text"
        id="Search"
        onChange={(event) => setSearch(event.target.value)}
      />
      <table className="tabela">
        <tr>
          <td className="tabela komorka">Id</td>
          <td className="tabela komorka" colSpan={2}>
            Zgłaszający
          </td>
          <td className="tabela komorka">Firma</td>
          <td className="tabela komorka">Rodzaj zgłoszenia</td>
          <td className="tabela komorka">Tytuł zgłoszenia</td>
          <td className="tabela komorka">Krótki opis</td>
          <td className="tabela komorka">Szczegóły</td>
        </tr>
        {users.map((val) => {
          // console.log(val);
          return [
            <tr className="tabela">
              <td className="tabela komorka">{val.Id}</td>
              <td className="tabela komorka">{val.Imie}</td>
              <td className="tabela komorka">{val.Nazwisko}</td>
              <td className="tabela komorka">{val.Firma}</td>
              <td className="tabela komorka">{val.Rodzaj_zgloszenia}</td>
              <td className="tabela komorka">{val.Tytul}</td>
              <td className="tabela komorka">{val.Krotki_opis}</td>
              <td className="tabela komorka">
                <LoginModal
                  Id={val.Id}
                  Imie={val.Imie}
                  Nazwisko={val.Nazwisko}
                  Firma={val.Firma}
                  Rodzaj_zgloszenia={val.Rodzaj_zgloszenia}
                  Tytul={val.Tytul}
                  Opis={val.Opis}
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
