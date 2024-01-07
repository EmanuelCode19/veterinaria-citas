import { useState, useEffect }from "react";
function Header({pacientes}) {
    let count = 0;
    let countAtendido=0

    pacientes.map(paciente => {
    if(paciente.Estado === 'En espera'){
        count++;
    }else{
        countAtendido++;
        count++;
        count = count - 1;
         }
        })


    
    return (
         
        <>
         <h1 className="font-black text-3xl md:text-5xl text-center md:w-2/3 mx-auto"
        >Seguimiento pacientes

        <span className="text-indigo-600">Veterinaria</span>
        
        </h1>
              
            

         <div className="flex justify-end mt-5 gap-3">
            <p className="text-green-600 uppercase font-bold text-2xl">Atendidos {countAtendido} <span className="text-black">||</span></p>
            <p className="text-red-600 uppercase font-bold text-2xl">En espera: {count}</p>
         </div>
        </>
       


            

    )
}

export default Header;