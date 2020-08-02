import React from 'react';
import Patientlist from './Components/patients-list'

import './App.css';

function App() {


  return (
    <div className="App">
  
      <h1> Patients Record Review </h1>

      <header className="App-header">         

          <Patientlist />
           
       
      </header>
    </div>
  );
}

export default App;
