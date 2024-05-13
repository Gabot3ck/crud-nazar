

export const SelectMonthFilter = ( { onChange, monthTicketCreated } ) => {
  
  return(
    <select
    className="rounded-md w-32 py-2 font-semibold text-base text-center focus:outline-none"
    value={ monthTicketCreated } 
    onChange={ onChange }
    name="monthTicketCreated"
  >
    <option className="text-center"  value="">Mes</option>
    <option value="January">Enero</option>
    <option value="February">Febrero</option>
    <option value="March">Marzo</option>
    <option value="April">Abril</option>
    <option value="May">Mayo</option>
    <option value="June">Junio</option>
    <option value="July">Julio</option>
    <option value="August">Agosto</option>
    <option value="September">Septiembre</option>
    <option value="October">Octubre</option>
    <option value="November">Noviembre</option>
    <option value="December">Diciembre</option>
  </select>
  )
}
