import "./App.css";
import { Routes, Route } from "react-router-dom";
import GamesList from "./pages/GamesList";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import GameDetails from "./pages/GameDetails";
import NotFound404 from "./pages/NotFound404";
import LoginLogout from "./pages/LoginLogout";
import TopNav from "./componets/TopNav";
import Home from "./pages/Home";

function App() {
  return (
      <div className="container">
      <TopNav></TopNav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/category/:id" element={<GamesList/>} ></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<LoginLogout/>}></Route>
        <Route path="/*" element={<NotFound404/>}></Route>
        <Route path='/gameDetails' element={<GameDetails/>}></Route>
        {/* <Route path="/games/:gameId" element={<GameDetails/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
