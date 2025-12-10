import { BrowserRouter} from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";


const App = () => {
  return (
    <BrowserRouter>
      <RoutesPrincipal />
    </BrowserRouter>
  );
};

export default App;
