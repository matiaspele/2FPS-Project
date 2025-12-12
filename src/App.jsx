import { BrowserRouter} from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";
import NavBar from "./components/NavBar"




const App = () => {
  return (

      <BrowserRouter>
      <NavBar />
      <RoutesPrincipal />
    </BrowserRouter>
  );
}

export default App



