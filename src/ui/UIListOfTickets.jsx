import { TableTicket } from "../TableTickets"
import { SelectMonthFilter, SelectYearFilter } from "../components"
import { LinkToCreateTicket } from "../routes/links/LinkToCreateTicket"


export const UIListOfTickets = () => {
  
  return (
    <main className="w-screen h-screen min-h-full bg-light-600 px-10 py-3">
      <h1 className="text-2xl font-semibold my-4 text-center" >Lista de Tickets</h1>
      <section className="w-full flex justify-center my-10 gap-10" >
        <SelectYearFilter />
        <SelectMonthFilter />
        <LinkToCreateTicket />
      </section>
      
      <section className="mx-auto xl:container" >
        <TableTicket />
      </section> 
    </main>
  )
}
