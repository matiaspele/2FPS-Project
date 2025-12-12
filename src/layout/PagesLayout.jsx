import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"
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
        {/* footer */}
      </footer>
    </>
  );
};

export default PagesLayout;
