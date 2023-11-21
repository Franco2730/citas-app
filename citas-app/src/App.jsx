import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListaPacientes";
import './App.css'

function App() {

  const [ pacientes, setPacientes ] = useState([]);
  // A continuación, vamos a detallar la varable y la fn seteadora de dicha variable, para editar al paciente:
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id );
    setPacientes(pacientesActualizados)
  }

  return ( 
    //Todos los componentes / funciones deben tener un return.
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario 
          paciente= { paciente }
          setPaciente= {setPaciente}
          pacientes = { pacientes }
          setPacientes = { setPacientes } //Acá vamos a pasar la funcion seteadora de pacientes ya que en formulario se estarán efectuando los cambios.
        />

        <ListadoPacientes
          pacientes = { pacientes }
          // Vamos a pasar la funcion seteadora del paciente a continuación y luego, la vamos a pasar al ListadoPacientes para que la lea. Lo debemos hacer de nivel a nivel.
          setPaciente = { setPaciente }
          paciente = { paciente }
          eliminarPaciente = { eliminarPaciente }
        />
        
      </div>
    </div>
  );
}

export default App;
