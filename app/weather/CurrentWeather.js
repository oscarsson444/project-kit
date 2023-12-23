"use client";

import { weatherCode } from "./api";

export const CurrentWeather = ({ currentWeather }) => {
  console.log(currentWeather);
  return (
    <div className="flex flex-col h-full items-center justify-center space-y-2">
      <h1 className="text-3xl">
        {currentWeather?.temperature_2m}
        {"°C"}
      </h1>
      <p>{weatherCode[currentWeather?.weather_code]}</p>
    </div>
  );
};
