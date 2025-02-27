import React,{useState} from "react";
import DataServer from "../../services/DataServer";
import "../../index.css"
function City(){
    const [city,setCity]=useState("")
    const [searchCity,setSearchCity] = useState("")
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
        if (city.trim() === "") return;
        setSearchCity(city);
        setSubmitted(true);
    }
    return (
        <div style={image}>
            <br />
            <h1 id="title">Weather Forecasting</h1>
            <div className="page1">
                <input type="text" className="citySearch" onChange={HandleCity} value={city} placeholder="Enter City Name" name="city" autoComplete="off"/>
                <button type="submit" className="searchButton" onClick={SubmitHandle}>Submit</button>
                <h2 style={{color:'whitesmoke', letterSpacing:'3px', opacity:'0.9', wordSpacing:'5px'}}>
                    {submitted ? "scroll down for details" : "please enter the city name"}

                </h2>
            </div>
            {submitted && (<DataServer city={searchCity} />)}
        </div>
    )
}
export default City;
