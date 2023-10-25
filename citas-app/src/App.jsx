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
          setPacientes = { setPacientes }
        />
        <ListaPacientes />
      </div>
    </div>
  );
}

export default App;
