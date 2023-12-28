"use client";

import { weatherCode } from "./api";

export const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col h-full items-center justify-center space-y-2">
        <h1 className="text-2xl">Linköping</h1>
        <h1 className="text-3xl">
          {currentWeather?.temperature_2m}
          {"°C"}
        </h1>
      </div>
      <div className="flex flex-col h-full items-center justify-center space-y-2">
        <p className="text-center">
          {weatherCode[currentWeather?.weather_code].desc}
        </p>
        {weatherCode[currentWeather?.weather_code].icon}
      </div>
    </div>
  );
};
