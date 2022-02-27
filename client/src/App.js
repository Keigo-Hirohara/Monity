import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Navbar from './components/Navbar';
import Login from "./components/login/Login";
import Mypage from "./components/mypage/Mypage";
import Room from "./components/room/Room";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/mypage" exact element={<Mypage/>}/>
        <Route path="/room" exact element={<Room/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
