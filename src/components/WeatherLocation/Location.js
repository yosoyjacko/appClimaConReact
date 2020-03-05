import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Location = (props) => {//destructurin-- const Location = ({ city})...{}; con esto evito la sentencia de la variable hago el destructing y evito el paso de abajo
    const city = props.city; //name: destructuring(investigar mas)-- const { city } = props; simepre y cuando el nombre de salida sea el mismo que la entrada
   return (
            <div className='locationCont'>
                <h1>
                    {city}
                </h1>
            </div>);
};
 Location.propTypes = {
     city: PropTypes.string.isRequired,
 }

export default Location;