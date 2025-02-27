import React from "react";
import IndexCard from "./IndexCard"
const value=[
    "You can safely enjoy being outside!",
    "Seek shade during midday hours!",
    "Avoid being outside during midday hours!"
]
function UV(props){
    if(props.uv<3){
        return(
            <div>
                <h1>UV Index</h1>
                <IndexCard left={props.uv} right={value[0]}/>
            </div>
        )
    }else if(props.uv<8){
        return(
            <div>
                <h1>UV Index</h1>
                <IndexCard left={props.uv} right={value[1]}/>
            </div>
        )
    }else{
        return(
            <div>
                <h1>UV Index</h1>
                <IndexCard left={props.uv} right={value[1]}/>
            </div>
        )
    }
}
export default UV;