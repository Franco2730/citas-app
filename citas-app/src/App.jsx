import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";

function App() {

  return (//Todos los componentes / funciones deben tener un return. 
     <div className="container mx-auto mt-20">
        <Header />
        <Formulario/>
        <ListaPacientes/>
    </div>
  )
}

export default App
