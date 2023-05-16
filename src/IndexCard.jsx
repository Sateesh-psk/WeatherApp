import React from "react"

function Temper(props){
    return (
        <div className="qualityCard">
            <h2 className="degree" style={{float:"left",fontSize:'3em'}}>{props.left}</h2>
            <h2 className="degree"><br />{props.right}</h2>
            <br />
        </div>
    )
}
export default Temper;