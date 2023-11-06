import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";

function App() {

  const [ pacientes, setPacientes ] = useState([]);

  return (
    //Todos los componentes / funciones deben tener un return.
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = { pacientes }
          setPacientes = { setPacientes } //Acá vamos a pasar la funcion seteadora de pacientes ya que en formulario se estarán efectuando los cambios.
        />

        <ListaPacientes 
          pacientes = { pacientes }
        />
        
      </div>
    </div>
  );
}

export default App;
