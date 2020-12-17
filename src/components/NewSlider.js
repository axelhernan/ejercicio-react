import React, { useState, useEffect } from "react";

// components
import TextSlider from './TextSlider'
import Rango from './Rango'
import './NewSlider.scss'
import CuotaFija from "./CuotaFija";
import Botones from './Botones'

const NewSlider = () => {

  const [monto, setMonto] = useState(5000);
  const [plazo, setPlazo] = useState(3);
  const [cuota, setNuevaCuota] = useState([])

  const gasto = {
    monto,
    plazo
  }

  useEffect(() => {
    const updateCuota = () => {
      const cuota = gasto.monto / gasto.plazo; 
      setNuevaCuota(cuota)
    }

    updateCuota()
  })


  const marksMonto = {
    5000: {
      style: {
        color: 'white',
        padding: '10px 0px'
      },
      label: 5000,
    },
    50000: {
      style: {
        color: 'white',
        padding: '10px 0px'
      },
      label: 50000,
    },
  };


  const marksPlazo = {
    3: {
      style: {
        color: 'white',
        padding: '10px 0px'
      },
      label: 3,
    },
    24: {
      style: {
        color: 'white',
        padding: '10px 0px'
      },
      label: 24,
    },
  };

  // formatear numeros a monedas
  const formatNumber = (number) => {
    return new Intl.NumberFormat("arg-ES", {style: "currency", currency: "ARS"}).format(number)
  }

  return (
    <div className="contenedor">

      <TextSlider titulo={'MONTO TOTAL'} gasto={formatNumber(gasto.monto)} />


      <Rango
        className="rango"
        min={5000}
        max={50000}
        value={monto}
        step={500}
        marks={marksMonto}
        onChange={setMonto}
      />

      <TextSlider titulo={'PLAZO'} gasto={gasto.plazo} />

      <Rango
        className="rango"
        min={3}
        max={24}
        value={plazo}
        step={1}
        marks={marksPlazo}
        onChange={setPlazo}
      />

      <CuotaFija textoCuota='CUOTA FIJA POR MES' updateCuota={formatNumber(cuota)} />

      <Botones ctaPrimario='OBTENÉ CRÉDITO' ctaSecundario='VER DETALLE DE CUOTAS' />
    </div>
  )
}

export default NewSlider