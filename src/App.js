import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Webapps from "./pages/Webapps";
import Games from "./pages/Games";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

import React from "react";
const App = () => {
  return (
    <>
      <div className="home-background">
        <Header/>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/portfolio" exact element={<Home/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/webapps" element={<Webapps/>} />
            <Route path="/games" element={<Games/>} />
          </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
