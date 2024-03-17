import React from "react";
import '../../css/card.css';
import image from '../../image/AC.webp';


const CardComponent = (props) => {
    const {id, title, image, description, onClick, type} = props.data || {};
    return (
        <div className="card">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="body-and-btn">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="book-btn" onClick={() => onClick(type,id)}>Book</button>
            </div>
        </div>

    );
};


export default CardComponent;