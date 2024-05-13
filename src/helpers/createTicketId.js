


export const createTicketId = ( setId ) => {

  const currentDate = new Date().getTime();
  setId(  currentDate * 3 );

  return setId;
}
