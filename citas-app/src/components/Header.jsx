//A continuación vamos a acceder a la props que le pasamos al Header en el archivo App para ello, vamos a colocar props avisandole que va a recibir unas. 
const Header = () => {


  return (
    //Todos los componentes necesitan un return que devuelvan un solo elemento en su mayor nivel (algo que envuelva a todos los elementos)
    <>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        Seguimiento Pacientes{" "}
        <span className="text-indigo-600">Veterinaria</span>
      </h1>
    </>
  );
};
export default Header;
