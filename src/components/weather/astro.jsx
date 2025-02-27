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
        </div>
    )
}
export default Air;