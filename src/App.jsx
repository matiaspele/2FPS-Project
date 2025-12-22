import { BrowserRouter } from 'react-router-dom';
import RoutesPrincipal from "./routes/RoutesPrincipal";
import NavBar from "./components/NavBar";
import Footer from "./components/footer"; 

const App = () => {
  return (
    <BrowserRouter>
      
      <NavBar />
      
      <RoutesPrincipal />
      
      <Footer />

    </BrowserRouter> 

  );
}

export default App;
