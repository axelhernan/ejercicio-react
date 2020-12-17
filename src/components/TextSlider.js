import React from 'react';
import './Rango.scss'

const TextSlider = props => {
    return (
        <div className="textBox">
            <p>
                {props.titulo}
            </p>

            <p>
                {props.gasto}
            </p>
        </div>
    )
}

export default TextSlider