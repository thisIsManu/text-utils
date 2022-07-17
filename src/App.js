import React, { useState, useReducer } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [theme, setTheme] = useState('light');

  

  return (
    <>
    <Navbar title="TextUtils" aboutLabel="About" theme={theme} themeToggle = {setTheme}/>
    <TextForm  theme={theme}/>
    {/* <Router>
        <Navbar title="TextUtils" aboutLabel="About" theme={theme} themeToggle = {setTheme}/>
      <Routes>
        <Route element={<AboutUs/>} path="/aboutUs"/>
        <Route element={<TextForm  theme={theme}/> } path={"/textUtils"} />
      </Routes>
      </Router> */}
    </>
  );
}

export default App;
