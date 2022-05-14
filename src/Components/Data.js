import React from 'react'

const Data = ({data}) => {
    if(data.weather === undefined)
        return <div></div>
    else {
        const src = "http://openweathermap.org/img/w/"+ data.weather[0].icon +".png";
        return (
            <div className='weather-result'>
                <h1 className='main'>{data.weather[0].main}</h1>
                <h4 className='subTitle'><div>{data.weather[0].description}</div> <img src={src} alt='qwe'/></h4>
                <h4>temperature: {(data.main.temp - 273.15).toFixed(2)}°C</h4>
                <p>temp_max: {(data.main.temp_max - 273.15).toFixed(2)}°C</p>
                <p>temp_min: {(data.main.temp_min - 273.15).toFixed(2)}°C</p>
                <p>Pressure: {(data.main.pressure)}</p>
                <p>Humidity: {(data.main.humidity)}</p>
            </div>
        )
    }
}

export default Data
