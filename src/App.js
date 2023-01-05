// import logo from './logo.svg';
import './App.css';
// import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
// import InfoCard from './Components/InfoCard';
import AppProject from './Components/AppProject';
import WebProject from './Components/WebProject';
import Home from './Components/Home';
import Footer from './Components/Footer';
import PythonProject from './Components/PythonProject';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Route, Routes} from "react-router-dom";

function App() {
  let component

  switch (window.location.pathname){
    case "/":
      component =<Home />;
      break;
    case "/python":
      component = <PythonProject />;
      break;
    case "/web":
      component = <WebProject />;
      break;

      case "/app":
        console.log("Appp");
        component = <AppProject />;
        break;

      default:
        component = <Home />
        break;
  }
  
  return (
    <div>
    <NavBar />
    {component}
    <Footer />

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
