import React from "react"

function Temper(props){
    return (
        <div className="qualityCard">
            <h2 className="degree" style={{float:"left"}}>{props.name}</h2>
            <h2 className="degree" style={{float:"right"}}>{props.value}</h2>
            <br />
        </div>
    )
}
export default Temper;