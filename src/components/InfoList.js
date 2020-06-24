import React, {useState, useEffect } from "react";
import axios from "axios";
import InfoCard from "./InfoCard.js";



export default function InfoList(){
    const [items, setInfo] = useState([]);

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
    {items.map(item => {
          return(
              <InfoCard 
                key = {item.hdurl}
                //image = {item.hdurl}
                title = {item.title} 
                date = {item.date}
                explanation = {item.explanation}
            />
          );
      })}  
     
  </div> 
);
}

