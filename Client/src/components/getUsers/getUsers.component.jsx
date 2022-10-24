import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/users-service";
import "./getUsers.component.css";

function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    setUsers(await getAllUsers());
  }, []);

  return (
    <table className="tabela">
      {users.map((val) => {
        console.log(val);
        return [
          <tr className="tabela">
            <td className="tabela komorka">{val.ID}</td>
            <td className="tabela komorka">{val.Username}</td>
            <td className="tabela komorka">{val.Password}</td>
            <td className="tabela komorka">{val.zalogowany}</td>
          </tr>,
        ];
      })}
    </table>
  );
}

export default GetUsers;
