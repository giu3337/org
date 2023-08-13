import "./OptionList.css"

function OptionList(props) {

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ]

    const manejarCambio = (e) => {
        console.log("Cambio:", e.target.value);
        props.actualizarEquipo
    }

  

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {  equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default OptionList