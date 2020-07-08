import React from 'react';
import User from './components/User';
import './App.css'

function App() {
  let value = true;


  

  return (
    <div className="App">

      <User />
      {
        value ? <p>Hello World</p>
          : null
      }
      {
        "Learn React".toUpperCase()
      }
      


    </div>
  );
}

export default App;
