import React from "react";
import "./Card.scss";
/* import WeatherIcon from "../WeatherIcon/WeatherIcon";
 */ const Card = ({
  location,
  currentTemperature,
  celsisus,
  currentWinds,
  currentClouds,
  timeAndDay,
}) => {
  return (
    <div className="weather">
      <div className="weather__location">{location}</div>
      <div className="weather__information">
        <div className="weather__temperature"> {currentTemperature}°C </div>
        <div className="weather__windAndCloud">
          <p className="weather__windAndCloud--wind">{currentWinds} km/h </p>
          <p className="weather__windAndCloud--cloud">{currentClouds} </p>
        </div>
      </div>
      <div className="weather__timeAndDay">{timeAndDay} </div>
    </div>
  );
};
export default Card;
