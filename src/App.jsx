import Header from "./components/Header"
import NavBar from "./components/NavBar"

import { BrowserRouter} from "react-router-dom";


const App = () => {
  return (
       <BrowserRouter>
      <NavBar/>
      <Header/>
      </BrowserRouter>
  );
}

export default App



