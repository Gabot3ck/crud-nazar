import { Link } from 'react-router-dom';
import { BtnEditTicket } from '../../components';


export const LinkToEditTicket = ( { id } ) => {
  
  return (
    <Link to={`/edit-ticket/${ id }`}>
      <BtnEditTicket/>
    </Link>
  )
}
