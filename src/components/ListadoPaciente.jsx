import Paciente from "./Paciente";

const ListadoPaciente = ({pacientes,setPaciente,eliminarPaciente,pacienteAtendido}) => {
  return (
    <div className="md:w-1/2  lg:w-3/5 md:h-screen md:overflow-y-scroll">

      
    {pacientes && pacientes.length ? (


<>
<h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

<p className="text-xl mt-5 mb-10 text-center">
  Administra tus {""}
  <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
</p>

<div className="pacientes">
{pacientes.map((paciente) => (
 <Paciente 
 key={paciente.Id}
 paciente={paciente}
 setPaciente={setPaciente}
 eliminarPaciente={eliminarPaciente}
 pacienteAtendido = {pacienteAtendido}
/>
))}
</div>

</>
): (

<>
<h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

<p className="text-xl mt-5 mb-10 text-center">
  Comienza Agregando Pacientes {""}
  <span className="text-indigo-600 font-bold">Y apareceran en este lugar</span>
</p>

</>

)}
     

     
  
       
      
    </div>
  );
};

export default ListadoPaciente;
