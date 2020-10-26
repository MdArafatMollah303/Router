import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle={
        border: '1px solid black',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px',

    }
    return (
        <div style = {friendStyle}>
            <h2>Name: {name}</h2>
            <p>Address: {email}</p>
            <p><Link to={`/friend/${id}`}>About {id}</Link></p>
        </div>
    );
};

export default Friend;