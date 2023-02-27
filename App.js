import React, { useState } from 'react'
import axios from 'axios'
import ShowTemp from './ShowTemp'
import './App.css'
function App() {
    const [city, setCity] = useState("")
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
    })
    const handleClick = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c02103bcaa325cf562eb71efaf3f69f4`)
            .then((response) => {
                setData({
                    description: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
                })
            })
    }

    return (
        <div className='image'>
            <div className='container text-center my-2' >
                <h1 className='clr'>Weathers Information</h1>
                <input type="text" className='from-control' value={city} onChange={(e) => {
                    setCity(e.target.value);
                }} />
                <button className='btn btn-primary mx-2' type='submit' onClick={handleClick}>get temp</button>

            </div>

            
            <ShowTemp text ={data}></ShowTemp>
            
        </div>
    )
}

export default App