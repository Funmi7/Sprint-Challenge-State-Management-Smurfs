import React from 'react';

export default function SmurfsCard(props) {
    const {name, age, height} = props;

    return (
        <div>
            <p>{name}</p> 
            <p>{age}</p>
            <p>{height}</p>
        </div>
    )
}