import "./App.css";
import { Routes, Route } from "react-router-dom";
import GamesList from "./pages/GamesList";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import GameDetails from "./pages/GameDetails";
import NotFound404 from "./pages/NotFound404";
import Login from "./pages/Login";
import Navbar from "./componets/Navbar";

function App() {
  return (

    <div className="container ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<GamesList/>}></Route>
        <Route path="/games" element={<GamesList/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/*" element={<NotFound404/>}></Route>
        <Route path='/gameDetails' element={<GameDetails/>}></Route>
        {/* <Route path="/games/:gameId" element={<GameDetails/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
