const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => { 

  const{ nombre, dueño, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm("¿ Deseas eliminar a este paciente ?")

    if( respuesta ) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="mx-5 my-10 relative">
      <div className="absolute inset-0 bg-gray-200 bg-opacity-75"></div>
      <div className="bg-gray-200 shadow-md px-5 py-10 rounded-xl relative z-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre:  
          <span className="font-normal normal-case"> { nombre }</span>
        </p>
  
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre Dueño:  
          <span className="font-normal normal-case"> { dueño }</span>
        </p>
  
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:  
          <span className="font-normal normal-case"> { email }</span>
        </p>
  
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre:  
          <span className="font-normal normal-case"> { fecha }</span>
        </p>
  
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas:  
          <span className="font-normal normal-case"> { sintomas }</span>
        </p>
  
        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-500 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => setPaciente(paciente)}
          >Editar</button>
  
          <button
            type="button"
            className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={ handleEliminar }
          >Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default Paciente;
