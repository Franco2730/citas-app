import Paciente from "./Paciente";

  const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => { //setPaciente fn seteadora del paciente


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h.screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {/* Por cada nuevo paciente vamos a aplicar un map y, del componente que ya hemos creado, renderizaremos uno. Uno por cada paciente */}

          {pacientes.map((paciente) => (
            <Paciente 
            key = { paciente.id } 
            paciente = { paciente }
            setPaciente = { setPaciente } //Cuando lo pudimos leer a la fn seteadora, la pasamos acá
            eliminarPaciente = { eliminarPaciente }
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza con agregar un paciente{" "}
            <span className="text-indigo-600 font-bold">para verlos a continuación:</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
