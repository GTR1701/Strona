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
          <tr>
            <td>{val.ID}</td>
            <td>{val.Username}</td>
            <td>{val.Password}</td>
            <td>{val.zalogowany}</td>
          </tr>,
        ];
      })}
    </table>
  );
}

export default GetUsers;
