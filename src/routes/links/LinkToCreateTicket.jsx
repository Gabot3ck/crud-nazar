import { Link } from "react-router-dom";
import { BtnCreateTicket } from "../../components";


export const LinkToCreateTicket = ( ) => {

  return (
    <Link to={`/create-ticket`}>
      <BtnCreateTicket type="button"/>
    </Link>
  )
}
