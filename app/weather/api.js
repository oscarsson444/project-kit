const weatherCode = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog and depositing rime fog",
  48: "Fog and depositing rime fog",
  51: "Drizzle: Light intensity",
  53: "Drizzle: Moderate intensity",
  55: "Drizzle: Dense intensity",
  56: "Freezing Drizzle: Light intensity",
  57: "Freezing Drizzle: Dense intensity",
  61: "Rain: Slight intensity",
  63: "Rain: Moderate intensity",
  65: "Rain: Heavy intensity",
  66: "Freezing Rain: Light intensity",
  67: "Freezing Rain: Heavy intensity",
  71: "Snow fall: Slight intensity",
  73: "Snow fall: Moderate intensity",
  75: "Snow fall: Heavy intensity",
  77: "Snow grains",
  80: "Rain showers: Slight intensity",
  81: "Rain showers: Moderate intensity",
  82: "Rain showers: Violent intensity",
  85: "Snow showers: Slight intensity",
  86: "Snow showers: Heavy intensity",
  95: "Thunderstorm: Slight or moderate",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
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
    console.log(data);
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
