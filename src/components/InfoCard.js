import React from "react";

const InfoCard = ({image, title, date, explanation }) => {

    return (
        <div className = 'dataPresentation'>
            <h1>{title}</h1>
            <img src = {image} />
            <h2>Photo Title: {title}</h2>
            <p>Date Taken: {date}</p>
            <p>About: {explanation}</p>
        </div>
    );
};

export default InfoCard;
