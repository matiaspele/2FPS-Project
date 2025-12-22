import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"
import Footer from "../components/footer";
const PagesLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default PagesLayout;
