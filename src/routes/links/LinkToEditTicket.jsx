import { Link } from 'react-router-dom';
import { BtnIconEdit } from '../../components';


export const LinkToEditTicket = ( { id } ) => {
  
  return (
    <Link to={`/edit-ticket/${ id }`}>
      <BtnIconEdit/>
    </Link>
  )
}
