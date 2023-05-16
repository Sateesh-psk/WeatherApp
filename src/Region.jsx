import React from "react";

function Region(props){
    const key="https://www.google.com/search?q="+props.value
    return(
        <div className="region">
            <h2>{props.area}</h2>
            <a className="location" href={key}><h1>{props.value}</h1></a>
            
        </div>
    )
}
export default Region;