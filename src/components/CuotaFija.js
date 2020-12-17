import React from 'react';
import './CuotaFija.scss'

const CuotaFija = props => {
    return(
        <div className="CuotaFija">
            <p>
                {props.textoCuota}
            </p>
            <h1>
                 {props.updateCuota}
            </h1>
        </div>
    )
}

export default CuotaFija