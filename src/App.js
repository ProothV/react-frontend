import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import Navigation from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Help';
import Contact from './Component/Footer';
import QRCodeComponent from './Component/Qrcd';
import Login from './Component/Login';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <QRCodeComponent></QRCodeComponent>
      <Login></Login>
    
    </div>
  );
}

export default App;
