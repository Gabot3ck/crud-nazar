import { useDispatch, useSelector } from "react-redux";
import { LinkToEditTicket } from "./routes";
import { useEffect } from "react";
import { getRecordsList } from "./store";



export const TableTicket = () => {

    //todo  Obteniendo  todos los gatos de los proyectos con Redux
    const dispacth= useDispatch();
    const { records } = useSelector( state => state.app );
  
    useEffect(() => {
        dispacth( getRecordsList() );
    }, []);


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
                  //onChange={(e) => handleChange(e, setProyecto)}
                  className={ `py-1 focus:outline-none` } 
                  name="ticketType"
                  //value={ proyecto }
                >
                  <option value="">Tipo</option>
                  <option value="technicalTicket">Técnico</option>
                  <option value="functionalTicket">Funcional</option>
                </select>
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <select
                  //onChange={(e) => handleChange(e, setProyecto)}
                  className={ `py-1 focus:outline-none` } 
                  name="ticketPriority"
                  //value={ proyecto }
                >
                  <option value="">Prioridad</option>
                  <option value="highPriorityTicket">Alta</option>
                  <option value="mediumPriorityTicket">Media</option>
                  <option value="lowPriorityTicket">Baja</option>
                </select>
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <select
                    //onChange={(e) => handleChange(e, setProyecto)}
                    className={ `py-1 focus:outline-none` } 
                    name="ticketState"
                    //value={ proyecto }
                  >
                    <option value="">Estado</option>
                    <option value="openTicket">Abierto</option>
                    <option value="closeTicket">Cerrado</option>
                  </select>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {
              records?.map( record => {

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
