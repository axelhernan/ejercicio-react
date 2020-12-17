import React from "react";
import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";

const Rango = props => (

    <Slider
        railStyle={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius:"none",
            height: 5,
        }}
        trackStyle={{
            transition: "0.3s ease background-color",
            height: 5,
            background: "#fff",
        }}
        dotStyle={{
            display:"none",
        }}
        
        handleStyle={{
            height: 15,
            width: 15,
            borderRadius: "50%",
            marginBottom: "-10px",
            background: "#ffffff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            border: "none"
        }}
        {... props}
    />
)


export default Rango