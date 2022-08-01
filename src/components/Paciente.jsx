const Paciente = ({ paciente, setPaciente,eliminarPaciente,pacienteAtendido }) => {
  const { nombre, propietario, email, fecha, sintomas, Estado, Id, Diagnostico} = paciente;

  const handleEliminar = () => {
    const respuesta = confirm(`desea eliminar el paciente ${nombre}`)

    if(respuesta){
      eliminarPaciente(Id)
    }
  }

  const handleAtendido = () => {
    const respuesta = confirm(`Seguro que el paciente ${nombre} fue atendido sastifactoriamente`)

    if(respuesta){
      pacienteAtendido(Id)
    }
  }  


  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
 
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Estado: {""}
        <span className="color font-bold normal-case text-red-400">{Estado}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Diagnostico: {""}
        <span className="color font-bold normal-case text-blue-600">{Diagnostico}</span>
      </p>

      <div className="flex flex-col mt-10">
        <button 
        type="button"
        className="py-2 mb-2 px-10 bg-indigo-600 hover:bg-slate-600 text-white uppercase rounded-lg" 
        onClick={() => setPaciente(paciente)}
        >Editar</button>

        <button 
        type="button"
        className="py-2 px-10 mb-2 bg-green-600 hover:bg-green-800 text-white uppercase rounded-lg" 
        onClick={handleAtendido}
        >Consultar</button>

        <button 
        type="button"
        className="py-2 px-10 mb-2  bg-red-600 hover:bg-red-800 text-white uppercase rounded-lg" 
        onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
