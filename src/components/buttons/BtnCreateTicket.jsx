
export const BtnCreateTicket = ( { onClick, type } ) => {
  
  return (
    <button
      className="w-32 text-white font-semibold text-base rounded-md py-2 bg-primary-500 transition-colors duration-300 ease-in-out
      hover:bg-primary-400"
      type={ type }
      onClick={ onClick }
    >
      Crear ticket
    </button>
  )
}
