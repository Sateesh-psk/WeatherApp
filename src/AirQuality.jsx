import React from "react";
import QualityCard from "./QualityUnit";

function Air(props){
    return (
        <div className="quality anime">
            <h2>Air Pollutants</h2>
            <QualityCard name="CO" value={props.quality.co}/>
            <QualityCard name="NO2" value={props.quality.no2}/>
            <QualityCard name="O3" value={props.quality.o3}/>
            <QualityCard name="SO2" value={props.quality.so2}/>
        </div>
    )
}
export default Air;