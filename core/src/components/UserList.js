import React, { useState } from "react";

function UserList(props) {
    console.log(props.user)
    return (
        <div>
            {props.user.map(u => {
                return (<div>{u.name}</div>)
            })}
        </div>
    )
}
export default UserList;