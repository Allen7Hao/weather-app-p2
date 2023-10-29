import React from "react";
import Name from "../../../Name";
import Date from "../../../Date";
import Temperature from "./components/Temperature";
import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../WeatherIcon";
import Meta from "./components/Meta";

const CurrentCity = () => {
  return (
    <div>
      <Date />
      <Name />
      <Temperature />
      <TemperatureRange />
      <WeatherIcon />
      <Meta />
    </div>
  );
};

export default CurrentCity;
