import { BrowserRouter} from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
      <RoutesPrincipal />
      <Header/>
    </BrowserRouter>
  );
};

export default App;
