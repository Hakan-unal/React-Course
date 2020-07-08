import React from 'react';
import User from './components/User';
import './App.css'

function App() {
  const value = false;



  return (
    <div className="App">

      
      {
        value ? <User />
        : console.log("False")
      }

    </div>
  );
}

export default App;
