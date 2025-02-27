import React from "react";
import Region from "../weather/Region";
import Latitude from "../weather/Latitude";
function Details(props){
    const location=props.details;
    return (
        <div>
            <br />
            <h1 style={{color:'navy'}}><center>City Details</center></h1>
            <Region value={location.name} area="location" />
            <Region value={location.region} area="region" />
            <Region value={location.localtime} area="local time" />
            <Region value={location.tz_id} area="timezone" />
            <Region value={location.country} area="country" />
            <Latitude value={location.lat} area='Latitude' />
            <Latitude value={location.lon} area='Longitude' />
        </div>
    )
}
export default Details;