import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,
CLOUDY,
SUN,
RAIN,
SNOW,
WINDY } from '../../../constantes/climas';
import './style.css';

const stateToIconName = estadoDelClima => {
    switch (estadoDelClima) {
        case CLOUD:
            return "cloud";
        case CLOUDY :
            return "cloudy";
        case SUN :
            return "day-sunny";
        case RAIN :
            return "rain";
        case SNOW :
            return "snow";
        case WINDY :
            return "windy";
    
        default:
            return "meteor"
    };
};
const getWeatherIcon = estadoDelClima => {
    return  (<WeatherIcons className='cIcon' name={stateToIconName(estadoDelClima)} size="3x" />)
    };

const ClimaTemperatura = ({temperature, estadoDelClima}) => (

    <div className='climaTemperaturaCont'>
        {getWeatherIcon(estadoDelClima)}
        <span className='temperatura'>{`${temperature}`}</span>
        <span className='temperaturaType'>C°</span>
        </div>
);
ClimaTemperatura.propTypes = {
    temperature: PropTypes.number.isRequired,
    estadoDelClima: PropTypes.string,
};
export default ClimaTemperatura;