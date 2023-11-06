import Paciente from "./Pacientes";

const ListaPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h.screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

    {/* Por cada nuevo paciente vamos a aplicar un map y, del componente que ya hemos creado, renderizaremos uno. Uno por cada paciente */}

    {pacientes.map( ( paciente ) => (
      <Paciente  
         key={ paciente.id }        
         paciente={ paciente } />
))}

    </div>
  );
};

export default ListaPacientes;
