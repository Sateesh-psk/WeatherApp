import React,{useState,useEffect} from "react";
import DataServer from "./DataServer";
import "./index.css"
function City(){
    const [city,setCity]=useState("")
    const [submitted,setSubmitted]=useState(false)
    const image={
        width: "100%",
        height:'1040px',
        backgroundImage: `url('https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat'
    }
    function HandleCity(event){
        setCity(event.target.value);
    }
    function SubmitHandle(){
        return (
            <div>
                {console.log(city)}
            </div>
        )
    }
    return (
        <div style={image}>
            <br />
            <h1 id="title">Weather Forecasting</h1>
            <div className="page1">
                <input type="text" className="citySearch" onChange={HandleCity} value={city} placeholder="Enter City Name" name="city" autocomplete="off"/>
                <button type="submit" className="searchButton" onClick={()=>setSubmitted(true)}>Submit</button>
            </div>
                {submitted ? (<DataServer city={city} />) : null}
        </div>
    )
}
export default City;
