import React from 'react';
import './Botones.scss'
const Botones = props => {
        return (
                <div className="botonera">
                        <button className="btn primary" type='submit' >{props.ctaPrimario}</button>
                        <button className="btn secondary" type='submit' >{props.ctaSecundario}</button>
                </div>
        )
}

export default Botones