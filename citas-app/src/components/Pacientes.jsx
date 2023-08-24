const Pacientes = () => {
  return (
    
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:
        <span className="font-normal normal-case"> Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Dueño:
        <span className="font-normal normal-case"> Franco</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:
        <span className="font-normal normal-case"> correo@gmail.com </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:
        <span className="font-normal normal-case"> 10/06/2023/</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:
        <span className="font-normal normal-case">

          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          eum maiores id voluptas dolore ullam velit perferendis voluptatem
          assumenda, eveniet enim vero reprehenderit suscipit!
        </span>
      </p>
    </div>
  );
};

export default Pacientes;
