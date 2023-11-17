import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";

function App() {

  const [ pacientes, setPacientes ] = useState([]);
  // A continuación, vamos a detallar la varable y la fn seteadora de dicha variable, para editar al paciente:
  const [paciente, setPaciente] = useState({});

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

        <ListaPacientes 
          pacientes = { pacientes }
          // Vamos a pasar la funcion seteadora del paciente a continuación y luego, la vamos a pasar al ListadoPacientes para que la lea. Lo debemos hacer de nivel a nivel.
          setPaciente = { setPaciente }
          paciente = { paciente }
        />
        
      </div>
    </div>
  );
}

export default App;
