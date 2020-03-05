import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ExtraInfoClima = ({humedad, wind}) => (
    <div className='extraInfoClimaCont'>
        <span className='extraInfoText'>{`Humedad: ${humedad} %`}</span>
        <span className='extraInfoText'>{`Vientos ${wind}`}</span>
    </div>
);

ExtraInfoClima.propType = {
    humedad: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default ExtraInfoClima;