import moment from "moment";

import { getRecords,  recorded, savingNewRecord, addNewRecord  } from "./appSlice";


export const getRecordsList = () => {
  return async( dispatch ) => {

    try {

      const response = await JSON.parse(localStorage.getItem("tickets"));

      if (!response) {
        throw new Error('La solicitud no fue exitosa');
      }

      const data = await response;

      const dataSorted = [...data].sort( (a,b) => {

        const dateA = moment(a.dateOfCreation, 'YYYY-MM-DD HH:mm:ss');
        const dateB = moment(b.dateOfCreation, 'YYYY-MM-DD HH:mm:ss');
      
        if (dateB.isBefore(dateA)) {
          return -1;
        } else if (dateB.isAfter(dateA)) {
          return 1;
        } else {
          return 0;
        }
      });

      dispatch( getRecords( dataSorted ) );
      dispatch( recorded() );

    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
}


export const registerNewTicket = (newTicketData) => {
  return async (dispatch) => {
    dispatch(addNewRecord( {...newTicketData} ));
  }
};

export const startNewRecord = () => {
  return async ( dispatch ) => {
    dispatch( savingNewRecord() );
  }
}