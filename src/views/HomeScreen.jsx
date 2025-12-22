import Header from "../components/Header"
import HomeProducts from "../components/HomeProducts"


const HomeScreen = () => {
  return (
    <div>
        <Header/>
        <h2 className="text-white m-5">Productos destacados</h2>
        <HomeProducts/>
    </div>
  )
}

export default HomeScreen