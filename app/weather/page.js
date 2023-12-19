"use client";

import { useEffect } from "react";
import { fetchWeather, searchLocation } from "./api";

export default function Weather() {
  useEffect(() => {
    fetchWeather();
    searchLocation();
  }, []);

  return (
    <main>
      <h1>Weather</h1>
    </main>
  );
}
