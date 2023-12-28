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
    <div>
      <h1 className="text-3xl">{time?.toLocaleTimeString()}</h1>
    </div>
  );
};
