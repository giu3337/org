import { useState } from "react"
import "./Form.css"
import InputLabel from "../InputLabel/InputLabel"
import OptionList from "../OptionList"
import Button from "../Button"

const Form = () => {


    const [nombre, actualizarNombre] = useState('')
    const [puesto, actualizarPuesto] = useState('')
    const [foto, actualizarFoto] = useState('')
    const [equipo, actualizarEquipo] = useState('')
    

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        console.log(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputLabel 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
                />
            <InputLabel 
                title="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
                />
            <InputLabel 
                title="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                actualizarValor={actualizarFoto}
                />
            <OptionList 
                valor={equipo}
                actualizarValor={actualizarEquipo}
                />
            <Button>
                Crear
            </Button>
        </form>
    </section>
}


export default Form