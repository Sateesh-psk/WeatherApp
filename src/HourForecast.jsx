import React from "react";
import sun from "./sunny.png";
import moon from "./moony.png";

function hour(hour){
    let [date,time]=hour.data.time.split(" ")
    function day(){
        if(hour.data.is_day)
            return  <img src={sun} alt="" />
        else
            return  <img src={moon} alt="" />
    }
    return (
        <div className="hourCast">
            <div>{hour.data.temp_c}°C</div>
            <div><img src={hour.data.condition.icon} alt="" /></div>
            <br />
            <div className="dayimage">{day()}</div>
            <div>{time}</div>
        </div>
    )
}
export default hour;