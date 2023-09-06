import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/myorg';
import Equipo from './components/Equipo';



function App() {

  const [mostrarFormulario, actualizarMostrar ] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([])

  // Ternario condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
     actualizarMostrar(!mostrarFormulario)
  }

  // Registrar Colaborador 

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador:", colaborador);
    // ...spread operator // es una copia coma, agregas nuevo elemento 
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Lista de Equipos 

  const equipos = [

    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    
    {
      titulo:  "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
]

  return (
    
    <div>
      <Header />
      {/* { mostrarFormulario ?  <Form  /> : null } */}

      { 
      
          mostrarFormulario && <Form  
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
          />
      }
      
      <MyOrg cambiarMostrar={cambiarMostrar}/>
      
    {
      equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />
        )

    }
      
    </div>
  );
}

export default App;
