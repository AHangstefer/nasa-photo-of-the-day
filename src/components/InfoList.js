import React, {useState, useEffect } from "react";
import axios from "axios";
import styled, {css} from "styled-components";
import InfoCard from "./InfoCard.js";









export default function InfoList(){
    const [item, setInfo] = useState([]);

  useEffect(()=> {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=poFnIF8d1VUkog409A9fBoVwfKJ85mAPlasWItCZ`)
      .then(res => {
          console.log ("Res from useEffect of infoList", res);
          setInfo(res.data);
      })
      .catch(err=>{
          console.log('Error from useEffect on infoList', err)
      });
  }, []);


          return(
            <div className = "everything">
              <InfoCard 
                key = {item.hdurl}
                image = {item.url}
                title = {item.title} 
                date = {item.date}
                explanation = {item.explanation}
            />
            </div>
          );
        
     

          };


