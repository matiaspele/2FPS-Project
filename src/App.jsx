import { BrowserRouter} from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";
import Header from "./components/Header"
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



