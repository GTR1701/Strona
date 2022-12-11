import React, { useEffect, useState } from "react";
import { getFilteredData } from "../../services/users-service";
import LoginModal from "../login-modal/component.loginModal";
import "./getData.css";
import Daty from "../../services/date-format";

const _Daty = new Daty();

function GetData() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("*");
  useEffect(() => {
    (async () => {
      let wynik = await getFilteredData(search);
      for (let poz of wynik) {
        let przyj = poz.Data_zgloszenia;
        console.log(przyj);
        let przyj_dok = poz.Data_zgloszenia_dokl;
        let serwis = poz.Data_przyj_serwis;
        let wysyl = poz.Data_wysyl_do_kli;
        if (przyj != null) poz.Data_zgloszenia = _Daty.formatDate(przyj);
        if (przyj_dok != null)
          poz.Data_zgloszenia_dokl = _Daty.toDateTimestamp(przyj_dok);
        if (serwis != null) poz.Data_przyj_serwis = _Daty.formatDate(serwis);
        if (wysyl != null) poz.Data_wysyl_do_kli = _Daty.formatDate(wysyl);
      }

      setUsers(wynik);
    })();
  }, [search]);

  const convert = (wynik) => {
    return wynik;
  };

  return (
    <div className="tabels">
      <div className="szukanie">
        <input
          type="text"
          id="Search"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Wyszukaj:"
        />
      </div>
      <div className="tabela-container">
      <table className="tabela-panel">
        <tr>
          <td className="tabela-panel komorka-panel">Id</td>
          <td className="tabela-panel komorka-panel" colSpan={2}>
            Zgłaszający
          </td>
          <td className="tabela-panel komorka-panel">Data Zgłoszenia</td>
          <td className="tabela-panel komorka-panel">
            Data Przyjęcia Przez Serwis
          </td>
          <td className="tabela-panel komorka-panel">
            Data Wysyłki Do Klienta
          </td>
          <td className="tabela-panel komorka-panel">Firma</td>
          <td className="tabela-panel komorka-panel">Rodzaj Zgłoszenia</td>
          <td className="tabela-panel komorka-panel">Tytuł Zgłoszenia</td>
          <td className="tabela-panel komorka-panel">Krótki Opis</td>
          <td className="tabela-panel komorka-panel">Szczegóły</td>
        </tr>
        {users.map((val) => {
          // console.log(val);
          return [
            <tr className="tabela-panel">
              <td className="tabela-panel komorka-panel">{val.Id}</td>
              <td className="tabela-panel komorka-panel">{val.Imie}</td>
              <td className="tabela-panel komorka-panel">{val.Nazwisko}</td>
              <td className="tabela-panel komorka-panel">
                {val.Data_zgloszenia}
              </td>
              <td className="tabela-panel komorka-panel">
                {val.Data_przyj_serwis}
              </td>
              <td className="tabela-panel komorka-panel">
                {val.Data_wysyl_do_kli}
              </td>
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
    </div>
  );
}

export default GetData;
