import { useState } from "react";


export const SelectStateTicket = ( { onChange, name, value } ) => {

  const [error, setError] = useState('');



  return (<>

    <div className="">
      <select 
        className="w-full rounded-lg border border-gray-200 p-4 text-sm shadow-sm 
      focus:border-primary-500 focus:ring-primary-500 focus:outline-none"  
        onChange={  onChange }
        name={ name }
        value={ value }
      >
        <option value="">Seleccione un estado</option>
        <option value="Abierto">Abierto</option>
        <option value="Cerrado">Cerrado</option>
      </select>
    </div>

    <span className="text-xs text-alert-500" >
      { error !== "" ? error : "" }
    </span>
  </>)
}