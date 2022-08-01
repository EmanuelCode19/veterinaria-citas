import { useState, useEffect }from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPaciente from "./components/ListadoPaciente";
import Footer from "./components/Footer";

function App() {

  const initial = JSON.parse(localStorage.getItem('pacientes')) ?? [];

  const [pacientes,setPacientes] = useState(initial)
  const [paciente,setPaciente] = useState({})


  useEffect(() => {

    localStorage.setItem('pacientes',JSON.stringify( pacientes ))

  },[pacientes])

  const eliminarPaciente = (id) =>{

    const pacienteActualizados = pacientes.filter(paciente => paciente.Id !== id)

    setPacientes(pacienteActualizados)
  }

  const pacienteAtendido = (id) =>{
    const pacienteStatusUpdate = pacientes.map( pacienteStatus => {
      if(pacienteStatus.Id === id){
        let diagnostico = prompt('Diagnostico')
        pacienteStatus.Estado =<span className="color font-bold normal-case text-green-600">Atendido</span>;
        pacienteStatus.Diagnostico = diagnostico.toUpperCase()
      }
      return pacienteStatus
    })

    setPacientes(pacienteStatusUpdate)

    return pacienteStatusUpdate
  }
  return (
    <div className="container mx-auto mt-28">
      <Header
      pacientes = {pacientes}
      
      />
        
        <div className="mt-12 md:flex">
           <Formulario
           pacientes = {pacientes}
           setPacientes={setPacientes}
           paciente = {paciente}
           setPaciente = {setPaciente}
           
           />
           
          <ListadoPaciente
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente={eliminarPaciente}
          pacienteAtendido={pacienteAtendido}  
          />
        </div>

      <Footer />
    </div>
  )
}

export default App
