import { Navigate, Route, Routes } from "react-router-dom";
import { UICreateTicket, UIEditTicket, UIListOfTickets } from "../ui";



export const AppRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={ <UIListOfTickets /> } />
      <Route path="/create-ticket" element={ <UICreateTicket /> }/>
      <Route path="/edit-ticket/:id" element={ <UIEditTicket /> }/>
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
