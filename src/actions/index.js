import axios from "axios";

const API_KEY = "30d0c0f518b8b73c98a9fb6e950b19ee";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const req = axios.get(url);

  console.log("Request:", req);

  return {
    type: FETCH_WEATHER,
    payload: req,
  };
}