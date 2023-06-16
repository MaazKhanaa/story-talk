import { useRoutes } from "react-router-dom";


// =========== ROUTES ===========
import { ROUTES } from "./routes/routes";


function App() {

  const { role }: any = JSON.parse(localStorage.getItem("user") || "{}");


  const GETROLEROUTES = ROUTES(role)

  console.log("GETROLEROUTES ====> ", GETROLEROUTES);


  const pages = useRoutes(GETROLEROUTES);

  return (
    <div className="App">{pages}</div>
  );
}

export default App;
