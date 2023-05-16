import React from "react";
import AstroCard from "./astroCard";

function Air(props){
    return (
        <div className="quality anime">
            <h2>Astro Details</h2>
            <AstroCard name='SUNRISE' value={props.quality.sunrise}/>
            <AstroCard name='SUNSET' value={props.quality.sunset}/>
            <AstroCard name='MOONRISE' value={props.quality.moonrise}/>
            <AstroCard name='MOONSET' value={props.quality.moonset}/>
            {/* <QualityUnit name="NO2" value={props.quality.no2}/>
            <QualityUnit name="O3" value={props.quality.o3}/>
            <QualityUnit name="SO2" value={props.quality.so2}/> */}
        </div>
    )
}
export default Air;