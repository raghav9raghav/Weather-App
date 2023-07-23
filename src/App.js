import React from 'react';
import { useState } from 'react';
import axios from 'axios';



function App() {

  const [Data, setData] = useState({})
  const [Location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=metric&appid=6f6c8bfe79d656a435999c8d4b7a50aa`


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }

  }


  const handleChange = event => {
    setLocation(event.target.value);
  }


  return (
    <div className="app">
      <div className='search'>
        <input
          value={Location}
          onChange={handleChange}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type='text'
        />
      </div>
      <div className='container'>
        <div className='top'>

          <div className='location'>
            <p>{Data.name}</p>
          </div>

          <div className='temp'>
            {Data.main ? <h1>{Data.main.temp}°C</h1> : null}
          </div>
          <div className='description'>
            {Data.weather ? <p>{Data.weather[0].main}</p> : null}
          </div>

        </div>





        {Data.name != undefined &&

          <div className='bottom'>

            <div className='feels'>
              {Data.main ? <p className='bold'>{Data.main.feels_like}°C</p> : null}
              <p>Feels Like</p>
            </div>

            <div className='humidity'>
              {Data.main ? <p className='bold'>{Data.main.humidity}</p> : null}
              <p>Humidity</p>
            </div>

            <div className='wind'>
              {Data.wind ? <p className='bold'>{Data.wind.speed}MPH</p> : null}
              <p>Wind Speed</p>
            </div>

          </div>
        }




      </div>
    </div>
  );
}

export default App;
