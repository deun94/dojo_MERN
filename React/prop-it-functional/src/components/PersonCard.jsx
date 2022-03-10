import React from "react";
const PersonCard = (props) => {
    //you can name it anything, but props is the industry standard
    return (
        <>
        <div>
            <h3> {props.lastName}, {props.firstName}</h3>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
        <hr ></hr>
        </>
    );
}

export default PersonCard;