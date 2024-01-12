"use client";
import { useState, useEffect } from "react";

export const DigitalClock = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-3xl">{time?.toLocaleTimeString()}</h1>
    </div>
  );
};
