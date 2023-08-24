import { useState, useEffect } from 'react' 

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes:
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form className="bg.white shadow-md rounded-lg py-10 px-5 mb-10">
        <div>
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            {/* htmlFor elegimos un nombre(igual al id del input para que sea facil el acceso para todas las personas. block para...... text-gray para el color del texto ) */}

            Nombre Mascota:
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Eje: Conan, Kenya, Magui, Daky"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />

        </div>

        <div className="mt-5">
          <label
            htmlFor="pariente"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Dueño:
          </label>

          <input
            id="pariente"
            type="text"
            placeholder="Nombre:"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail :
          </label>

          <input
            id="email"
            type="email"
            placeholder="Correo electronico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta :
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            sintomas :
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value="Agregar paciente"
          
        />
      </form>
    </div>
  );
};

export default Formulario;
