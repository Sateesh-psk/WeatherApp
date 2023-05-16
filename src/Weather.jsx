import React, { useState } from "react";
import Temper from "./Temperature";
import Region from "./Region";
import image from "./original.jpeg"
import Condition from "./Condition";
import AirQuality from "./AirQuality";
import AirQualityIndex from "./AirQualityIndex";

function Input({data}){
    const [temp,setTemp]=useState();
    const weather=data;
    const {current,location,forecast}=data;
    const today=forecast.forecastday[0].day;
    // const index=current.air_quality.us-epa-index
    const image_con={
        width: "100%",
        height:'720px',
        // backgroundImage: 'url("https://cdn.theatlantic.com/thumbor/77FMxJGfMpkM-FcZIiGHyH8mqec=/845x470:2635x1477/960x540/media/img/mt/2016/03/RTX283V4/original.jpg")',
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat'

    }
    return (
        <div>
        <div style={image_con}>
            <br />
            <h1 style={{color:'navy'}}><center>City Details</center></h1>
            <Region value={location.name} area="location" />
            <Region value={location.region} area="region" />
            <Region value={location.localtime} area="local time" />
            <Region value={location.tz_id} area="timezone" />
            <Region value={location.country} area="country" />
        </div>
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
            <h2>{current.air_quality.usepaindex}</h2>
            {/* <AirQualityIndex index={index} /> */}

        </div>
        <div style={image_con}>
            <br />
            <h1 style={{color:'navy'}}><center>Today Forecast Details</center></h1>
            <Temper value="Max Temp" valuec={today.maxtemp_c} c='°C' valuef={today.maxtemp_f} f="°F"/>
            <Temper value="Min Temp" valuec={today.mintemp_c} c='°C' valuef={today.mintemp_f} f="°F"/>
            <Temper value="Avg Temp" valuec={today.avgtemp_c} c='°C' valuef={today.avgtemp_f} f="°F"/>
            <Temper value="Max Wind Speed" valuec={today.maxwind_mph} c='miles/h' valuef={today.maxwind_kph} f="KMeter/h"/>
            <Temper value="Total Precipitation" valuec={today.totalprecip_mm} c='millimeter' valuef={today.totalprecip_in} f="inches"/>
            <Condition text={today.condition.text} icon={today.condition.icon}/>
        </div>
        </div>
    )
}
export default Input;