import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getRecordById, setDataTicketDB } from "../helpers";
import { getRecordsList } from "../store";
import { useForm } from "../hooks";
import { BtnEditTicket, InputForm, SelectPriorityTicket, SelectStateTicket, SelectTypeTicket } from "../components";


export const UIEditTicket = () => {

  const { id } = useParams();
  //const navigate = useNavigate();


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

  const handleInput = (e) => {
    const {name, value} = e.target;
    setRecord({...record, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setDataTicketDB({
      title: record?.title,
      description: record?.description,
      type: record?.type,
      priority: record?.priority,
      state: record?.state,
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
        onChange={ handleInput }
      />

      <InputForm 
        title="Descripción del ticket:"
        type="text"
        placeholder="Descripción..."
        name="description"
        value={ record?.description }
        onChange={ handleInput }
      />

      <SelectTypeTicket 
        onChange={  handleInput }
        name="type"
        value={ record?.type }
      />

      <SelectPriorityTicket 
        onChange={  handleInput }
        name="priority"
        value={ record?.priority }
      />

      <SelectStateTicket 
        onChange={  handleInput }
        name="state"
        value={ record?.state }
      />

      <BtnEditTicket 
        type='submit'
      />

    </form>
  </>)
}
