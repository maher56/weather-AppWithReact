import axios from 'axios';
import React , { useState , useEffect } from 'react'
import Data from './Components/Data';
import Spanier from './Components/Spanier'
import Error from './Components/Error';
import './main.css'
const App=()=>{
    const API_KEY = "e7a2f501086c24d25bb29fad496a7543";
    const [country , setCountry] = useState("syria")
    const [city , setCity] = useState("Aleppo")
    const [state , setState] = useState(0)
    const [data , setData] = useState({})

    const submitHndler=(e)=>{
        e.preventDefault();
        gitInfo();
    }
    useEffect(()=>{gitInfo()} , [])
    const gitInfo=()=> {
        setState(0);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
        .then(res=> {
            setState(2);
            setData(res.data);
            console.log(data)
        })
        .catch(error=> {
            console.log(error);
            setState(1);
            setData({});
        })
    }
    return (
        <div className='App'>
            <form onSubmit={submitHndler} className='search-form'>
                <div>
                <div className='form-group'>
                    <input onChange={(e)=>setCountry(e.target.value)} value={country} id='country' className='form-control'/>
                    <label htmlFor='country' className={country ? "active" : ""}>Country</label>
                </div>
                </div>
                <div>
                    <div className='form-group'>
                        <input onChange={(e)=>setCity(e.target.value)} value={city} id='city' className='form-control'/>
                        <label htmlFor='city' className={city ? "active" : ""}>City</label>
                    </div>
                </div>
                <button type='submit' className='btn-primary'>Submit</button>
            </form>
            {state === 2 ? <Data data={data} /> : (state === 1 ? <Error /> : <Spanier /> )}
        </div>
    );
}
//background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
export default App;
