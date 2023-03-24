import React from "react";
//import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import Services from './components/Services';
import Header from "./components/Header";
import { Register } from "./components/Register";
import "./assets/stylesheets/style.css";
import "./assets/stylesheets/support.css";


const App = () => {
  return (
    <div>
      <Header />
      <Login />
      <Services />
    </div>
  );
};

export default App;