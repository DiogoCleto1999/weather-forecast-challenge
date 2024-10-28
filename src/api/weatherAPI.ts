import axios, { AxiosError } from "axios";

const API_KEY = "6a805fcea35a969567163b4977932404";
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast`;

export const getWeatherData = async (
  city: string,
  units: "metric" | "imperial"
) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units, //'metric' for Celsius or 'imperial' for Fahrenheit
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Now error is of type AxiosError
      if (error.response) {
        // Handle specific HTTP errors
        switch (error.response.status) {
          case 404:
            console.warn("Error 404: City not found.");
            alert("City not found. Please check the city name and try again.");
            break;
          case 400:
            console.error("Error 400: Bad Request.");
            alert("Bad request. Please check your input and try again.");
            break;
          case 403:
            console.error("Error 403: Forbidden.");
            alert(
              "Access forbidden. You do not have permission to access this resource."
            );
            break;
          case 500:
            console.error("Error 500: Internal Server Error.");
            alert("Internal server error. Please try again later.");
            break;
          case 503:
            console.error("Error 503: Service Unavailable.");
            alert("Service is currently unavailable. Please try again later.");
            break;
          default:
            console.error(
              `Error ${error.response.status}: ${error.response.data.message}`
            );
            alert(`An error occurred: ${error.response.data.message}`);
        }
      } else if (error.request) {
        console.error("Internet connection issue or server is unreachable.");
        alert("Please check your internet connection and try again.");
      } else {
        console.error("Error:", error.message);
        alert("An unexpected error occurred. Please try again later.");
      }
    } else {
      console.error("An unexpected error occurred:", error);
      alert("An unexpected error occurred. Please try again later.");
    }

    return null;
  }
};