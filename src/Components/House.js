import React from 'react'

export default function House(props){
    const id = props.id;
    return(
        <div>
            Property Name : {props.name}
            <br/>
            Address : {props.address}
            <br/>
            City : {props.city}
            <br/>
            State: {props.state}
            <br/>
            Zip: {props.zipCode}
            <br/>
            <button onClick={() => props.delete(id)}>Delete</button>
        </div>
    )
}