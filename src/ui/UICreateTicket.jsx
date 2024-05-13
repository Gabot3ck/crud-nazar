import {  useState } from 'react';
import moment from "moment";

import { InputForm, SelectTypeTicket, SelectPriorityTicket, SelectStateTicket, BtnCreateTicket } from '../components';
import { useForm } from '../hooks';
import { createTicketId, createTicketRegistrationDate, setDataTicketDB } from '../helpers';
import { useNavigate } from 'react-router-dom';


export const UICreateTicket = () => {

  const 
    { 
      title, 
      description, 
      type, 
      priority, 
      state, 
      onInputChange,
      onResetForm,
    } = useForm(
      {
        title:"",
        description: "",
        type: "",
        priority:"",
        state: "",
      }
    );

  const [ registrationDate, setRegistrationDate ] = useState("");
  const [ idTicket, setIdTicket] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const month = moment(registrationDate).format("MMMM");
    const year = moment(registrationDate).format("YYYY");


    setDataTicketDB({
      id: idTicket,
      title: title,
      description: description,
      type: type,
      priority: priority,
      state: state,
      dateOfCreation:registrationDate,
      mes:month,
      year:year,
    });

    onResetForm();

    navigate(`/`);
  }



    return (<>
      <h1 className="text-2xl font-semibold my-2 text-center" >Formulario de Tickets</h1>
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
          value={ title }
          onChange={ onInputChange }
        />

        <InputForm 
          title="Descripción del ticket:"
          type="text"
          placeholder="Descripción..."
          name="description"
          value={ description }
          onChange={ onInputChange }
        />

        <SelectTypeTicket 
          onChange={  onInputChange }
          name="type"
          value={ type }
        />

        <SelectPriorityTicket 
          onChange={  onInputChange }
          name="priority"
          value={ priority }
        />

        <SelectStateTicket 
          onChange={  onInputChange }
          name="state"
          value={ state }
        />

        <BtnCreateTicket 
          onClick={  () => { createTicketRegistrationDate( setRegistrationDate ) ; createTicketId(setIdTicket) }  }
          type='submit'
        />
      </form>
    </>)
}