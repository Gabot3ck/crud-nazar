import moment from "moment";


export const createTicketRegistrationDate = ( setRegistrationDate ) => {
  
  const registrationDate = moment().format('YYYY-MM-DD HH:mm:ss');
  setRegistrationDate( registrationDate );

  return setRegistrationDate
}
