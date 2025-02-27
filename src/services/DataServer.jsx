import React,{useState,useEffect} from "react";
import axios from 'axios';
import Weather from "../components/weather/Weather";
import Keys from "./Key";

function Data(props){
    const [weather,setWeather]=useState();
    let status="200"
    const key="https://api.weatherapi.com/v1/forecast.json?key="+Keys+"&q="+props.city+"&days=1&aqi=yes&alerts=no";
    useEffect(()=>{
        axios.get(key)
        .then(res=>{
                setWeather(res.data)
            }
        )
        .catch(error => {
                console.error(error);
            });
        },[key])
    return (
        <div>
            {weather && <Weather data={weather} status={status}/>}
            
        </div>
    )
}
export default Data;
