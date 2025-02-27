import React from "react";
import QualityUnit from "./QualityUnit";

function Air(props){
    return (
        <div className="quality anime">
            <h2>Air Pollutants</h2>
            <QualityUnit name="CO" value={props.quality.co}/>
            <QualityUnit name="NO2" value={props.quality.no2}/>
            <QualityUnit name="O3" value={props.quality.o3}/>
            <QualityUnit name="SO2" value={props.quality.so2}/>
        </div>
    )
}
export default Air;