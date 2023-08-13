import { useState } from "react";
import "./InputLabel.css"

function InputLabel(props) {
    const [valor, setValor] = useState("")
    console.log("Datos: ", props);
    const placeHolderModificado =`${props.placeholder}...`


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actulizarValor(e.target.value)
    }


    return <div className="campo-texto">
        <label>{props.title}</label>
        <input 
            type="text" 
            placeholder={placeHolderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            >
        </input>
    </div>
}


export default InputLabel