import React from "react";

const InfoCard = ({ title, date, explanation }) => {

    return (
        <div className = 'dataPresentation'>
           {/*<img src = {image} />*/}
            <h2>Photo Title: {title}</h2>
            <p>Date Taken: {date}</p>
            <p>About: {explanation}</p>
        </div>
    );
};

export default InfoCard;
