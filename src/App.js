import React from 'react';
import Users from './component/Users/Users';
//import Contact from './component/contact/Contact';
import Navbar from './component/navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container mt-2">
      <Users/>
      </div>
      
     
     {/* <Contact></Contact>
       <Navbar title="hamid zahir"/>
    <Contact name="Mehdi" telf="4631861546" email="mehdi@outlook.fr"/>*/}
      
    </div>
  );
}

export default App;
