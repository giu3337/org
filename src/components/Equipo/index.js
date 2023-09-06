import "./Equipo.css"
import Colaborador from "../Colaborador"




function Equipo(props) {

    const { colorPrimario, colorSecundario, titulo} = props.datos
    const {colaboradores} = props
    const colorTitulo = {borderColor: colorPrimario}

    return <section className="equipo" style={{backgroundColor: colorSecundario }}>
        <h3 style={colorTitulo}>{titulo}</h3>
        <div className="colaboradores">
            
           {
                colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index}/>
                )
           }
        </div>
    </section>
}

export default Equipo