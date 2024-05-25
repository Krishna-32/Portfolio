import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [search, setSearch] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const api = {
    key: "5e7c2a34ec5d2ae6a4045f24ccf38726"
  }

  const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}`)
      .then((response) => {
        if(!response.ok){
          throw new Error("City not found :(")
        }
        return response.json()
      })
      .then((json) => {
        console.log(json);
        setWeather(json);
        setError(null)
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error)
        setError(error.message)
        setWeather(null)
      })
  };

  useEffect(() => {
    fetchWeather(search); 
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleFetch = () => {
    fetchWeather(search); 
  };

  return (
    <>
      <div>
        <h1>Weather API</h1>
        <input type="text" value={search} onChange={handleSearch} />
        <button onClick={handleFetch}>Fetch API</button>
        {error ? (
          <p>Error: {error}</p>
        ) : weather ? (
          <div>
            <p>City: {weather.name}</p>
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
    </div>
    </>
  )
}

export default App
