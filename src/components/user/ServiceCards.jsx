import React from 'react';

const ServiceCards = (props) => {
    const { id, title, image, description, buttonClick } = props.data;
    let handleClick = props.func

    return (
        <div className="box">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="btn" onClick={() => {
                handleClick("ac")
            }}>Book</button>
        </div>
    );
};

export default ServiceCards;