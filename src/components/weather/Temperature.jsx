import React from "react"

function Temper(props){
    return (
        <div className="temper anime">
            <h1>{props.value}</h1>
            <h2 className="degree" style={{float:"left"}}>{props.valuec}{props.c}</h2>
            <h2 className="degree" style={{float:"right"}}>{props.valuef}{props.f}</h2>
        </div>
    )
}
export default Temper;