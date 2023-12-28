"use client";
import { useState } from "react";
import { weatherCode } from "./api";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { MdCloudySnowing } from "react-icons/md";
import { motion } from "framer-motion";

export const WeeklyWeather = ({ weather, weekday, index }) => {
  const [expanded, setExpanded] = useState(false);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <div className="glass glass-blur">
      <div
        onClick={() => setExpanded((prev) => !prev)}
        className="grid grid-cols-5 items-center justify-center min-h-[100px] cursor-pointer"
      >
        <div>
          <p>{weekday}</p>
          <p>{weather?.daily.time[index]}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-center">
            {weatherCode[weather?.daily.weather_code[index]].desc}
          </p>
        </div>
        <div className="flex items-center justify-center">
          {weatherCode[weather?.daily.weather_code[index]].icon}
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-row gap-2">
            <FaTemperatureHigh color="orange" className="w-5 h-5" />
            <p>
              {weather?.daily.temperature_2m_max[index]}
              {"°C"}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <FaTemperatureLow color="lightblue" className="w-5 h-5" />
            <p>
              {weather?.daily.temperature_2m_min[index]}
              {"°C"}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <MdCloudySnowing color="white" className="w-5 h-5" />
          <p>
            {weather?.daily.precipitation_sum[index]}
            {" mm"}
          </p>
        </div>
      </div>

      <motion.div
        initial="closed"
        animate={expanded ? "open" : "closed"}
        variants={variants}
        className="w-full"
      >
        <div className="w-48 h-1 mx-auto mb-6 mt-2 bg-gray-100 border-0 rounded dark:bg-gray-700" />
        {weather?.hourly.time
          .slice(index * 24, (index + 1) * 24)
          .map((time, hourIndex) => {
            if (index === 0 && hourIndex < new Date().getHours() + 1) return;
            const currentIndex = index * 24 + hourIndex;
            return (
              <div
                key={currentIndex}
                className="grid grid-cols-4 items-center justify-center w-full"
              >
                <p className="text-center">{time.split("T")[1]}</p>
                <p className="text-center">
                  {weather?.hourly.temperature_2m[currentIndex]}
                  {"°C"}
                </p>
                <p className="text-center">
                  {weather?.hourly.precipitation_probability[currentIndex]}
                  {"%"}
                </p>
                <div className="flex items-center justify-center">
                  {weatherCode[weather?.hourly.weather_code[currentIndex]].icon}
                </div>
              </div>
            );
          })}
      </motion.div>
    </div>
  );
};
