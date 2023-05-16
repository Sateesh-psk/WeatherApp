import React, { useState } from "react";
import Temper from "./Temperature";
import image from "./original.jpeg"
import Condition from "./Condition";
import AirQuality from "./AirQuality";
import Hour from "./HourForecast";
import UV from "./UV";
import CityDetails from "./CityDetails";

import Astro from "./astro";
function Input({data}){
    const weather=data;
    const {current,location,forecast}=data;
    const today=forecast.forecastday[0];
    const index=current.air_quality.gb
    const image_con={
        width: "100%",
        height:'720px',
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat'
    }
    return (
        <div>
        <div style={image_con}>
            <br />
            <h1 style={{color:'navy'}}><center>Current Weather Details</center></h1>
            <Temper value="Temperature" valuec={current.temp_c} c='°C' valuef={current.temp_f} f="°F"/>
            <AirQuality quality={current.air_quality}/>
            <Condition text={current.condition.text} icon={current.condition.icon}/>
            <Temper value="Wind Speed" valuec={current.wind_mph} c='miles/h' valuef={current.wind_kph} f='KMeter/h'/>
            <Temper value="Pressure" valuec={current.pressure_mb} c='millibar' valuef={current.pressure_in} f="inches"/>
            <Temper value="Precipitation" valuec={current.precip_mm} c='millimeter' valuef={current.precip_in} f="inches"/>
            <Temper value="Feelslike" valuec={current.feelslike_c} c='°C' valuef={current.feelslike_f} f="°F"/>
            <div className="index">
                <UV uv={current.uv} />
            </div>
        </div>
        <div style={image_con}>
            <br />
            <h1 style={{color:'navy'}}><center>Today Forecast Details</center></h1>
            <Temper value="Max Temp" valuec={today.day.maxtemp_c} c='°C' valuef={today.day.maxtemp_f} f="°F"/>
            <Astro quality={today.astro} />
            <Temper value="Min Temp" valuec={today.day.mintemp_c} c='°C' valuef={today.day.mintemp_f} f="°F"/>
            <Temper value="Avg Temp" valuec={today.day.avgtemp_c} c='°C' valuef={today.day.avgtemp_f} f="°F"/>
            <Condition text={today.day.condition.text} icon={today.day.condition.icon}/>
            <Temper value="Max Wind Speed" valuec={today.day.maxwind_mph} c='miles/h' valuef={today.day.maxwind_kph} f="KMeter/h"/>
            <Temper value="Total Precipitation" valuec={today.day.totalprecip_mm} c='millimeter' valuef={today.day.totalprecip_in} f="inches"/>
            <div>
                {today.hour.map((obj,index)=>{
                    if(index%2===0)
                    return (<Hour data={obj} />)
                })}
            </div>
        </div>
        <div style={image_con}>
            <CityDetails details={location} />
        </div>
        </div>
    )
}
export default Input;