import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createTicketId, getRecordById, setDataTicketDB } from "../helpers";
import { getRecordsList } from "../store";
import { useForm } from "../hooks";
import { BtnCreateTicket, InputForm, SelectPriorityTicket, SelectStateTicket, SelectTypeTicket } from "../components";


export const UIEditTicket = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const dispacth= useDispatch();
  const { records } = useSelector( state => state.app );


  const [ record, setRecord ] = useState({
    id:"",
    title:"",
    description: "",
    type: "",
    priority:"",
    state: "",
    month: "",
    year:"",
    dateOfCreation:""
  });

  

  useEffect(() => {
    dispacth( getRecordsList() );
}, []);


  useEffect(() => {
    setRecord( getRecordById(records, id))
  }, [records, id]);



  const handleSubmit = (e) => {
    e.preventDefault();

    setDataTicketDB({
      id: record?.id,
      title: title,
      description: description,
      type: type,
      priority: priority,
      state: state,
      dateOfCreation: record?.registrationDate,
      mes: record?.month,
      year: record?.year,
    });
  }

  return (<>
    <h1 className="text-2xl font-semibold my-2 text-center" >Editar Ticket</h1>
    
    <form 
      className="mx-auto mb-0 mt-4 max-w-md space-y-4 text-center"
      onSubmit={ handleSubmit }
      autoComplete="off"
    >

      <InputForm 
        title="Título del ticket:"
        type="text"
        placeholder="Título..."
        name="title"
        value={ record?.title }
        onChange={ onInputChange }
      />

      <InputForm 
        title="Descripción del ticket:"
        type="text"
        placeholder="Descripción..."
        name="description"
        value={ record?.description }
        onChange={ onInputChange }
      />

      <SelectTypeTicket 
        onChange={  onInputChange }
        name="type"
        value={ record?.type }
      />

      <SelectPriorityTicket 
        onChange={  onInputChange }
        name="priority"
        value={ record?.priority }
      />

      <SelectStateTicket 
        onChange={  onInputChange }
        name="state"
        value={ record?.state }
      />

      <BtnCreateTicket 
        type='submit'
      />

      {/* <ToastContainer/> */}
    </form>
  </>)
}
