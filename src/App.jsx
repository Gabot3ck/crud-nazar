import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { tickets } from "./db";


function App() {

  localStorage.setItem("tickets",JSON.stringify( tickets ));

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>    
  )
}

export default App
