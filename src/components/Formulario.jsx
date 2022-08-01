import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({pacientes,setPacientes,paciente,setPaciente}){

    const [nombre, setNombre ] =  useState('')
    const [propietario, setPropietario ] =  useState('')
    const [email, setEmail ] =  useState('')
    const [fecha, setFecha ] =  useState('')
    const [sintomas, setSintomas ] =  useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
       if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
       }
    },[paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36);

        return fecha +  random;
    }


    const handleSubmit = (e) => {
         e.preventDefault()

         if([nombre,propietario,email,fecha,sintomas].includes('')){
            
            setError(true)
            return;
         }

         setError(false)

         const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            Estado:'En espera',
            Diagnostico:'Evaluativo'
         }

         if(paciente.Id){
           //editando registro
           objetoPaciente.Id = paciente.Id 
        
           const pacienteActualizado = pacientes.map( pacientState => pacientState.Id === paciente.Id ? objetoPaciente : pacientState)

           setPacientes(pacienteActualizado)

           setPaciente({})
         }else{
           //nuevo registro
           objetoPaciente.Id = generarId() 
           setPacientes([...pacientes,objetoPaciente])
         }

         setNombre('')
         setPropietario('')
         setEmail('')
         setFecha('')
         setSintomas('')
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl mb-5 text-center capitalize">Siguiendo pacientes</h2>

            <p className="text-center capitalize mb-10 text-xl">
                añade pacientes y {''}
                <span className="text-center text-indigo-600 font-bold tex-lg">administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-5">
            {error && <Error mensaje = {'Todos los campos son obligatorios'}/>}
                <div className="mb-2">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>
                    <input id="mascota" type="text" placeholder="Escribe el nombre de la mascota" 
                    className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md" 
                    value={nombre}
                    onChange = { (e) => setNombre(e.target.value)}
                    />
                    
                </div>

                <div className="mb-2">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario</label>
                    <input id="propietario" type="text" placeholder="Nombre  propietario" 
                    className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange = { (e) => setPropietario(e.target.value)}
                     />
                </div>

                <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold"> email </label>
                    <input id="email" type="email" placeholder="email propietario" 
                    className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
                    value={email}
                    onChange = { (e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">Dia de alta</label>
                    <input id="Alta" type="Date" className="border-2 p-2 mt-2 w-full  rounded-md"
                     value={fecha}
                     onChange = { (e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">sintomas</label>
                    <textarea  id="Sintomas" 
                    className="border-2 p-2 mt-2 placeholder-gray-400 w-full rounded-md" placeholder="Describe los Sintomas"
                    value={sintomas}
                    onChange = { (e) => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <input type="submit"
                className="bg-indigo-600 w-full p-2 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                value={paciente.Id ? 'Editar Paciente' : 'Guardar Paciente' }

                onClick = {handleSubmit}
                />



                
            </form>
        </div>
    )
}

export default Formulario;




