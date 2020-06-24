import React, {useState, useEffect } from "react";
import axios from "axios";
// import InfoCard from "./InfoCard.js";
//import Image from "./Image.js";


export default function InfoList(){
    const [items, setInfo] = useState([]);

  useEffect(()=> {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
          console.log ("Res from useEffect of infoList", res);
          setInfo(res.data)
      })
      .catch(err=>{
          console.log('Error from useEffect on infoList', err)
      });
  }, []);

  return(
   <div className = 'everything'>   
    <div className = 'photoInfo' > 
      {items.map(item ={
          return(
              <Image key = {item.hdurl} value = {item}/>
          );
      })}
      
      {/* <InfoCard
        
        
      /> */}
      
        
    </div>
   </div>
)

};

