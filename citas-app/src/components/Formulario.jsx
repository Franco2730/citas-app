import { useState, useEffect } from 'react' 
import Error from './Error';


//Vamos a extraer la funcion seteadora llamada setPacientes aplicandole un destructuring.
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

//Vamos a trabajar con nuestro useState y la primer regla para nuestros hooks es colocarlos al principio de nuestros componentes. 
const[nombre, setNombre] = useState('');   

//A continuacion, vamos a crear el estado de los otros inputs y siempre inicializaran en str vacios.
const[dueño, setDueño] = useState('');     
const[email, setEmail] = useState('');     
const[fecha, setFecha] = useState('');     
const[sintomas, setSintomas] = useState('');     

//Creamos un estado para la validacion del formulario:
const[error, setError] = useState(false);

useEffect(() => {
  if( Object.keys(paciente).length > 0 ){
    setNombre(paciente.nombre)
    setDueño(paciente.dueño)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
  } 
}, [paciente]) //Despues de la coma tenemos un array vacío, ahí van las dependencias, lo que coloquemos ahí, será el valor que estará revisando cuando cambie y si cambia realiza un re-render. En este ejemplo, este useEffect se ejecutará cuando PACIENTE haya cambiado (cuando se detecte el onClick en el btn editar)

const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);

  return random + fecha;
}
     
const handleSubmit = (e) => {     
  e.preventDefault();     

  0
  //A continuacion vamos a validar el formulario:
  if([ nombre, dueño, email, fecha, sintomas ].includes('')){ //Si al menos un campo esta vacío, entonces...
    console.log("Hay al menos un campo vacío")

    setError(true)
    return;
  }
    setError(false);

    //Objeto de paciente
    const objetoPaciente = {
      nombre, 
      dueño,
      email,
      fecha, 
      sintomas
    }

    if(paciente.id){
      objetoPaciente.id = paciente.id
      //Editando el registro
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //Nuevo registro.A continuacion, con la funcion seteadora de paciente decimos que haga una copia de lo que ya hay en pacientes y le agrega el nuevo objeto.
      objetoPaciente.id = generarId()
      setPacientes([ ...pacientes, objetoPaciente ]);
    }


    
    //A continuacion vamos a reiniciar el formulario colocando todos los campos como str vacios.
    setNombre('')
    setDueño('')
    setEmail('')
    setFecha('')
    setSintomas('')
}     
     
       
  return (     
    <div className="md:w-1/2 lg:w-2/5 mx-5 relative">
    <div className="absolute inset-0 bg-gray-200 bg-opacity-75"></div>
    <div className="relative z-10">
      <h2 className="font-black text-3xl text-center to-black">
        Seguimiento Pacientes:
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form 
            onSubmit={handleSubmit}
            className="bg.white shadow-md rounded-lg py-10 px-5 mb-10">

        { error && <Error mensaje= 'Todos los campos son obligatorios'/>}

        <div className='mb-5'>
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            {/* htmlFor elegimos un nombre(igual al id del input para que sea facil el acceso para todas las personas. block para...... text-gray para el color del texto ) */} 

            Nombre Mascota:
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Eje: Conan, Kenya, Magui, Daky"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

            //El siguiente campo (value) es para almacenar en la variable nombre lo que el usuario tipee. 
            value={nombre}
            
            //Vamos a acudir a un evento propio de React. Es igual a un eventListTener de JS. se llama onChange. Entonces, cada vez que el usuario este escribiendo en este campo, en la consola aparecerá (1)Escribiendo... / (2)Escribiendo...
            // onChange={ () => console.log('Escribiendo...') }
            
            //Pero lo que necesitamos hacer es saber lo que el usuario esta escribiendo, asique, como estamos trabajando con un formulario de JS podemos acceder al valor del target. Y además de mandar el valor a la consola, utilizaremos la funcion seteadora
            onChange={ (e) => setNombre(e.target.value) } 
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

            //Vinculamos a continuacion el estado:
            value={dueño}
            onChange={ (e) => setDueño(e.target.value) } 
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

            value={email}
            onChange={ (e) => setEmail(e.target.value) } 
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

            value={fecha}
            onChange={ (e) => setFecha(e.target.value) } 
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

            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) } 
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
    </div>
  );
};

export default Formulario;
