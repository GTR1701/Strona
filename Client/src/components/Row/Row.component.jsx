import React, { Fragment } from 'react'

function Row({data: {id, username, passwd, logged}}) {
    console.log(id)
    return ( 
        <>
            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{passwd}</td>
                <td>{logged}</td>
            </tr>
        </>
    );
}

export default Row;