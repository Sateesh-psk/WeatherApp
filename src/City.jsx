import React,{useState,useEffect} from "react";
import DataServer from "./DataServer";
import "./index.css"
function City(){
    const [city,setCity]=useState("")
    const [submitted,setSubmitted]=useState(false)
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
        <div>
            <div className="page1">
                <input type="text" className="citySearch" onChange={HandleCity} value={city} placeholder="Enter City Name" name="city" autocomplete="off"/>
                <button type="submit" className="searchButton" onClick={()=>setSubmitted(true)}>Submit</button>
            </div>
                {submitted ? (<DataServer city={city} />) : null}
        </div>
    )
}
export default City;
