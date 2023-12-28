"use client";

import { DigitalClock } from "@/components/DigitalClock";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CurrentWeather } from "./CurrentWeather";
import { DailyWeatherInfo } from "./DailyWeather";
import { fetchWeather } from "./api";
import { WeeklyWeather } from "./WeeklyWeather";

const createWeekDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const dayName = date.toLocaleDateString("en", { weekday: "long" });
    days.push(dayName);
  }
  return days;
};

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetchWeather();
      setWeather(resp);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="w-[100vw] h-[100vh] items-center justify-center flex">
        <div className="h-20 w-20 animate-spin rounded-full border-b-2 border-t-2 border-white" />
      </div>
    );
  }

  return (
    <main className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-center items-center space-y-2 mt-10">
          <DigitalClock />
          <br />
          <div className="grid grid-cols-2 w-[70%] justify-center items-center gap-10">
            <div className="flex flex-col h-full items-center justify-center glass glass-blur">
              <CurrentWeather currentWeather={weather?.current} />
            </div>
            <div className="glass glass-blur h-full">
              <DailyWeatherInfo dailyWeather={weather?.daily} />
            </div>
          </div>
          <br />
          <div className="w-[70%] space-y-4">
            {createWeekDays().map((day, index) => (
              <WeeklyWeather
                key={index}
                weather={weather}
                weekday={day}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
