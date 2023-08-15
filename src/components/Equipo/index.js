import "./Equipo.css"
import Colaborador from "../Colaborador"




function Equipo(props) {

    const { colorPrimario, colorSecundario, titulo} = props.datos
    const colorTitulo = {borderColor: colorPrimario}

    return <section className="equipo" style={{backgroundColor: colorSecundario }}>
        <h3 style={colorTitulo}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo