import { useDispatch, useSelector } from "react-redux";
import { LinkToEditTicket } from "./routes";
import { useEffect, useState } from "react";
import { getRecordsList } from "./store";



export const TableTicket = () => {

    //todo  Obteniendo  todos los gatos de los proyectos con Redux
    const dispacth= useDispatch();
    const { records } = useSelector( state => state.app );

    const [type, setType] = useState("");
    const [priority, setPriority] = useState("");
    const [state, setState] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const handleChange = (e, setState)=>{
      const { value } = e.target;
      setState(value);
    }
  
    useEffect(() => {
        dispacth( getRecordsList() );
    }, []);


    const filteredRecords = records?.filter(el => {
      return (
          ( !type || el.type.includes(type) ) &&
          ( !priority || el.priority?.includes(priority) ) &&
          ( !state || el.state?.includes(state) ) &&
          ( !month || el.month?.includes(month) ) &&
          ( !year || el.year?.includes(year) )
      )
  })


  return (

    <div className="rounded-lg border border-gray-200">
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
          <thead className="ltr:text-left rtl:text-right border-b-2 border-slate-900">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Editar</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Título</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha y hora</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Descripción</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <select
                  onChange={(e) => handleChange(e, setType)}
                  className={ `py-1 focus:outline-none` } 
                  name="ticketType"
                  value={ type }
                >
                  <option value="">Tipo</option>
                  <option value="Técnico">Técnico</option>
                  <option value="Funcional">Funcional</option>
                </select>
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <select
                  onChange={(e) => handleChange(e, setPriority)}
                  className={ `py-1 focus:outline-none` } 
                  name="ticketPriority"
                  value={ priority }
                >
                  <option value="">Prioridad</option>
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </select>
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <select
                    onChange={(e) => handleChange(e, setState)}
                    className={ `py-1 focus:outline-none` } 
                    name="ticketState"
                    value={ state }
                  >
                    <option value="">Estado</option>
                    <option value="Abierto">Abierto</option>
                    <option value="Cerrado">Cerrado</option>
                  </select>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {
              filteredRecords?.map( record => {

                return(
                  <tr key= { record.id } className="odd:bg-gray-50" >
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <LinkToEditTicket id={ record.id }/>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"> { record.title } </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700"> { record.dateOfCreation } </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700"> { record.description } </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700"> { record.type } </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700"> { record.priority } </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700"> { record.state } </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
