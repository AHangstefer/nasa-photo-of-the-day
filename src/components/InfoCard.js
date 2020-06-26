import React from "react";
import styled, {css} from "styled-components"
import "../index.css";

export const H1 = styled.h1`
font-family: 'Notable', sans-serif ;
 color: navy ;
 filter: brightness(30%);

 &:hover 
`;

export const Img = styled.img`
    opacity: 1;  
  &:hover {
      opacity: 0.8;
    
  }    
`;

export const H2 = styled.h2`
font-family: 'Notable', sans-serif ;
color: navy ;
filter: brightness(40%); 

`;

export const P = styled.p`
  font-family: 'Bebas Neue', cursive;
  color: navy;
  filter:brightness(50%);

`;




const InfoCard = ({image, title, date, explanation }) => {

    return (
        <div className = 'dataPresentation'>
            <H1>{title}</H1>
            <Img src = {image} alt = "bright clouds and a tiny upside down silouette of a big city" />
            <H2>Photo Title: {title}</H2>
            <P>Date Taken: {date}</P>
            <P>About: {explanation}</P>
        </div>
    );
};

export default InfoCard;
