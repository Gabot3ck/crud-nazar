export const getRecordById = ( records, id ) => {

  const data = records?.filter( el => el.id == id );

  return data[0];
}