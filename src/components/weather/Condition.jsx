import React from "react";

function Condition(props){
    return (
        <div className="temper anime">
            <img style={{float:'left',width:'25%'}} src={props.icon} alt="" />
            {
                props.text.length>15 ? 
                <h2 style={{marginTop:'1.5em', color:"navy"}}>{props.text}</h2> : 
                <h1 style={{marginTop:'1.5em', color:"navy", height:'2em'}}>{props.text}</h1>

            }
        </div>
    )
}
export default Condition;