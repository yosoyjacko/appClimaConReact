import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN,} from './../../constantes/climas';
import './style.css';


const location = "Buenos Aires,ar";
const api_key = "9d7d8b3cd79f683e857ecd3549a3f883";

const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = {
        temperature : 20,
        estadoDelClima: SUN,  
        humedad: 10,
        wind: '10 m/s',
};



class WeatherLocation extends Component { 

    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1
        };

    }

    handleUpdateClick =() => {
        fetch(api_weather);
    
        /*    this.setState({
            data: data2
        });*/
        console.log("actualizado");
    }


    render = () => {
        const { city, data} = this.state;
        return (
    <div className='weatherLocationCont'>
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
    </div>);
};

}

export default WeatherLocation;