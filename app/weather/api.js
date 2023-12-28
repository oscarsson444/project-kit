"use client";

import { MdSunny, MdOutlineGrain } from "react-icons/md";
import { IoPartlySunny, IoRainy } from "react-icons/io5";
import { IoIosCloud, IoIosThunderstorm } from "react-icons/io";
import { GiFog, GiHeavyRain } from "react-icons/gi";
import { BsCloudDrizzleFill, BsCloudSnowFill } from "react-icons/bs";
import { LuCloudDrizzle } from "react-icons/lu";
import { FaRegSnowflake } from "react-icons/fa";

export const weatherCode = {
  0: { desc: "Clear sky", icon: <MdSunny className="h-10 w-10" /> },
  1: { desc: "Mainly clear", icon: <MdSunny className="h-10 w-10" /> },
  2: { desc: "Partly cloudy", icon: <IoPartlySunny className="h-10 w-10" /> },
  3: { desc: "Overcast", icon: <IoIosCloud className="h-10 w-10" /> },
  45: {
    desc: "Fog and depositing rime fog",
    icon: <GiFog className="h-8 w-8" />,
  },
  48: {
    desc: "Fog and depositing rime fog",
    icon: <GiFog className="h-8 w-8" />,
  },
  51: {
    desc: "Drizzle: Light intensity",
    icon: <BsCloudDrizzleFill className="h-8 w-8" />,
  },
  53: {
    desc: "Drizzle: Moderate intensity",
    icon: <BsCloudDrizzleFill className="h-8 w-8" />,
  },
  55: {
    desc: "Drizzle: Dense intensity",
    icon: <BsCloudDrizzleFill className="h-8 w-8" />,
  },
  56: {
    desc: "Freezing Drizzle: Light intensity",
    icon: <LuCloudDrizzle className="h-8 w-8" />,
  },
  57: {
    desc: "Freezing Drizzle: Dense intensity",
    icon: <LuCloudDrizzle className="h-8 w-8" />,
  },
  61: { desc: "Rain: Slight intensity", icon: <IoRainy className="h-8 w-8" /> },
  63: {
    desc: "Rain: Moderate intensity",
    icon: <IoRainy className="h-8 w-8" />,
  },
  65: { desc: "Rain: Heavy intensity", icon: <IoRainy className="h-8 w-8" /> },
  66: {
    desc: "Freezing Rain: Light intensity",
    icon: <MdOutlineGrain className="h-8 w-8" />,
  },
  67: {
    desc: "Freezing Rain: Heavy intensity",
    icon: <MdOutlineGrain className="h-8 w-8" />,
  },
  71: {
    desc: "Snow fall: Slight intensity",
    icon: <FaRegSnowflake color="lightblue" className="h-8 w-8" />,
  },
  73: {
    desc: "Snow fall: Moderate intensity",
    icon: <FaRegSnowflake color="lightblue" className="h-8 w-8" />,
  },
  75: {
    desc: "Snow fall: Heavy intensity",
    icon: <FaRegSnowflake color="lightblue" className="h-8 w-8" />,
  },
  77: { desc: "Snow grains", icon: <FaRegSnowflake className="h-10 w-10" /> },
  80: {
    desc: "Rain showers: Slight intensity",
    icon: <GiHeavyRain className="h-8 w-8" />,
  },
  81: {
    desc: "Rain showers: Moderate intensity",
    icon: <GiHeavyRain className="h-8 w-8" />,
  },
  82: {
    desc: "Rain showers: Violent intensity",
    icon: <GiHeavyRain className="h-8 w-8" />,
  },
  85: {
    desc: "Snow showers: Slight intensity",
    icon: <BsCloudSnowFill className="h-8 w-8" />,
  },
  86: {
    desc: "Snow showers: Heavy intensity",
    icon: <BsCloudSnowFill className="h-8 w-8" />,
  },
  95: {
    desc: "Thunderstorm: Slight or moderate",
    icon: <IoIosThunderstorm className="h-8 w-8" />,
  },
  96: {
    desc: "Thunderstorm with slight hail",
    icon: <IoIosThunderstorm className="h-8 w-8" />,
  },
  99: {
    desc: "Thunderstorm with heavy hail",
    icon: <IoIosThunderstorm className="h-8 w-8" />,
  },
};

export const fetchWeather = async () => {
  // Setup of the API call
  const params = {
    latitude: 58.4109,
    longitude: 15.6216,
    current: ["temperature_2m", "weather_code"],
    hourly: [
      "temperature_2m",
      "precipitation_probability",
      "weather_code",
      "uv_index",
    ],
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "sunrise",
      "sunset",
      "uv_index_max",
      "precipitation_sum",
    ],
    timezone: "Europe/Berlin",
  };

  const currentParam = params.current.join(",");
  const hourlyParam = params.hourly.join(",");
  const dailyParam = params.daily.join(",");

  const queryParams = {
    latitude: params.latitude,
    longitude: params.longitude,
    current: currentParam,
    hourly: hourlyParam,
    daily: dailyParam,
    timezone: params.timezone,
  };

  const apiUrl = `https://api.open-meteo.com/v1/forecast?${new URLSearchParams(
    queryParams
  ).toString()}`;

  try {
    const resp = await fetch(apiUrl);
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    // Parse the JSON in the response
    const data = await resp.json();
    return data;
  } catch (error) {
    // Handle errors
    console.error("Fetch error:", error);
  }
};

export const searchLocation = async () => {
  const location = "Stockholm";

  const apiUrl = `https://geocoding-api.open-meteo.com/v1/search?${new URLSearchParams(
    { name: location }
  ).toString()}`;

  try {
    const resp = await fetch(apiUrl);
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    // Parse the JSON in the response
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    // Handle errors
    console.error("Fetch error:", error);
  }
};
