import React from 'react';
import User from './components/User';
import Test from './components/Test';
import Navbar from './components/Navbar';
import Props from './components/Props';
import './App.css'

function App() {
  const value = true;



  return (
    <div className="App">

      {
        value ? <Navbar />
          : console.log("False")
      }
      <hr/><br/>

      {
        value ? <Props />
          : console.log("False")
      }

      {
        value ? <User />
          : console.log("False")
      }

      {
        value ? <Test />
          : console.log("False")
      }

    </div>
  );
}

export default App;
