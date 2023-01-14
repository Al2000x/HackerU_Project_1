import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import GamesList from "./pages/GamesList";
import Details from "./pages/Details";
import GameDetails from "./pages/GameDetails";
import NotFound404 from "./pages/NotFound404";
import LoginLogout from "./pages/LoginLogout";
import TopNav from "./componets/navbar/TopNav";
import Profile from "./pages/Profile";
import GeneralGames from "./componets/GeneralGames";
import Discover from "./pages/Discover";
import SearchedGame from "./pages/searchedGame";
import Footer from "./componets/Footer";


function App() {
  const themeSelect = useSelector(state=>state.theme)
  return (
    // className="appWrapper darkTheme"
    <div  className={themeSelect.dark? "appWrapper darkTheme":"appWrapper lightTheme"}>

      <div className="container">
      <TopNav></TopNav>
      <Routes>
        <Route path="/"element={<Details/>}></Route>
        <Route path="/category/:id" element={<GamesList/>} ></Route>
        <Route path="/discover" element={<Discover/>}></Route>
        <Route path="/general-games" element={<GeneralGames/>}></Route>
        <Route path="/login" element={<LoginLogout/>}></Route>
        <Route path="/*" element={<NotFound404/>}></Route>
        <Route path='/gameDetails' element={<GameDetails/>}></Route>
        <Route path='/searched-game' element={<SearchedGame/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      
    </div>
    <Footer></Footer>
    </div>


  );
}

export default App;
