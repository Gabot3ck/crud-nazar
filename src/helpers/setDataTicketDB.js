

export const setDataTicketDB = ( newTicket ) => {

  let dataLS = localStorage.getItem('tickets');

  if (dataLS) {
    dataLS = JSON.parse(dataLS);
  } else {
    dataLS = [];
  }

  dataLS.push(newTicket);
  
  localStorage.setItem("tickets",JSON.stringify( dataLS ));
}
