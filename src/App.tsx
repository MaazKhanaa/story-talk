import { useRoutes } from "react-router-dom";


// =========== ROUTES ===========
import { ROUTES } from "./routes/routes";


function App() {
  const pages = useRoutes(ROUTES);

  return (
    <div className="App">{pages}</div>
  );
}

export default App;
