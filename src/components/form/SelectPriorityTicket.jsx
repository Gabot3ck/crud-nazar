import { useState } from "react";


export const SelectPriorityTicket = ( { onChange, name, value } ) => {

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
        <option value="">Seleccione una prioridad</option>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
    </div>

    <span className="text-xs text-alert-500" >
      { error !== "" ? error : "" }
    </span>
  </>)
}