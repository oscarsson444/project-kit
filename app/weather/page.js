"use client";

import { useEffect, useState } from "react";
import { fetchWeather, searchLocation } from "./api";
import { DigitalClock } from "@/components/DigitalClock";
import { CurrentWeather } from "./CurrentWeather";
import { DailyWeatherInfo } from "./DailyWeatherInfo";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetchWeather();
      console.log(resp);
      setWeather(resp);
      //setWeather(fetchWeather());
      //searchLocation();
    };
    getData();
  }, []);

  return (
    <main className="w-full">
      <div className="flex flex-col justify-center items-center space-y-2 mt-10">
        <DigitalClock />
        <br />
        <div className="grid grid-cols-2 justify-center items-center gap-10">
          <div className="flex flex-col items-center justify-center glass glass-blur">
            <h1 className="text-2xl">Linköping</h1>
            <CurrentWeather currentWeather={weather?.current} />
          </div>
          <div className="glass glass-blur h-full">
            <DailyWeatherInfo dailyWeather={weather?.daily} />
          </div>
        </div>
      </div>
    </main>
  );
}
