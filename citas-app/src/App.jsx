import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";

function App() {

  const [ pacientes, setPacientes ] = useState([]);

  //La siguiente función tendrá como fin pasarse al Header y que este la renderice. 
  const toma1Valor = (valor) => {
    console.log(valor);
  }

  return (
    //Todos los componentes / funciones deben tener un return.
    <div className="container mx-auto mt-20">
      <Header 
        toma1Valor = { toma1Valor }
      />

      <div className="mt-12 md:flex">
        <Formulario />
        <ListaPacientes />
      </div>
    </div>
  );
}

export default App;
