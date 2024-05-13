

export const InputForm = ( { title, value, name, onChange, placeholder, type } ) => {


  return (<>
    <label htmlFor={ name } className="sr-only">{ title }</label>
    <input
      id={ name }
      className="w-full rounded-lg border border-gray-200 p-4 text-sm shadow-sm 
      focus:border-primary-500 focus:ring-primary-500 focus:outline-none"
      type={ type }
      placeholder={ placeholder }
      name={ name }
      value={ value }
      onChange={ onChange }
      autoComplete="off"
    />
  </>)
}