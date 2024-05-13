  const yearOptions = [];
  const maxYear = new Date().getFullYear();
  const minYear = 2010;

  for (let i = maxYear; i >= minYear; i--) {
    yearOptions.push(<option key={i} value={i}>{i}</option>);
  }

export const SelectYearFilter = ( { onChange, yearTicketCreated } ) => {

  return (
    <select
      className="rounded-md w-32 py-2 font-semibold text-base text-center focus:outline-none"
      value={ yearTicketCreated } 
      onChange={ onChange }
      name="yearTicketCreated"
    >
      <option className="text-center"  value="">Año</option>
      {
        yearOptions
      }
    </select>
  )
}
