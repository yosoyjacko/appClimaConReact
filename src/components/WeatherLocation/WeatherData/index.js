import React from 'react';
import PropTypes from 'prop-types';
import ClimaTemperatura from './ClimaTemperatura';
import ExtraInfoClima from './ExtraInfoClima';

import './style.css';

const WeatherData = ({ data }) => {
    const {temperature, estadoDelClima, humedad, wind } = data;
    return (
<div className='climaDataCont'>
    <ClimaTemperatura temperature={temperature} estadoDelClima={estadoDelClima}/>
    <ExtraInfoClima humedad ={humedad} wind={wind}/>

</div>);
};
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        estadoDelClima: PropTypes.string.isRequired,
        humedad: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;