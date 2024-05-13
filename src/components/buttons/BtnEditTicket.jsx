import { BsPencil } from "react-icons/bs";

export const BtnEditTicket = ( ) => {

  return (
    <button 
      className='bg-green-600 text-white w-10 p-1 rounded-md flex justify-center hover:bg-green-700' 
    >
      <BsPencil size={ 16 } />
    </button>
  )
}