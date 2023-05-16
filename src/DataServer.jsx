import React,{useState,useEffect} from "react";
import axios from 'axios';
import Weather from "./Weather";

function Data(props){
    const [weather,setWeather]=useState();
    let status=""
    const key="http://api.weatherapi.com/v1/forecast.json?key=1ffb767f8d7140cb877102609232004&q="+props.city+"&days=1&aqi=yes&alerts=no";
    useEffect(()=>{
        axios.get(key)
        .then(res=>{
                    {res.data && (status=res.status)}
                    setWeather(res.data)
                }
        )
        .catch(error => {
                console.error(error);
            });
        },[])
    return (
        <div>
            {weather && <Weather data={weather} status={status}/>}
            
        </div>
    )
}
export default Data;






// import 'katex/dist/katex.min.css';
// import { BlockMath } from 'react-katex';

// function getCardinalDirection(angle) {
//     const directions = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'];
//     return directions[Math.round(angle / 45) % 8];
// }





// <div style={{fontSize:'300%'}}>
        //     <BlockMath math='{\\\searrow\\}' />
        // </div>
