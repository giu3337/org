import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/myorg';



function App() {

  const [mostrarFormulario, actualizarMostrar ] = useState(true)

  // Ternario condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
     actualizarMostrar(!mostrarFormulario)
  }

  return (
    
    <div>
      <Header />
      {/* { mostrarFormulario ?  <Form  /> : null } */}
      { mostrarFormulario && <Form  />}
      
      <MyOrg cambiarMostrar={cambiarMostrar}/>

    </div>
  );
}

export default App;
