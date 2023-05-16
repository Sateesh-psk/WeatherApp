import React from "react";

function Condition(props){
    return (
        <div class="temper anime">
            <img style={{float:'left',width:'25%'}} src={props.icon} alt="" />
            <h1 style={{display:'inline-block',marginTop:'1.5em'}}>{props.text}</h1>
        </div>
    )
}
export default Condition;