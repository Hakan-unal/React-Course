import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header";
import Header2 from "./components/header2";
import Location from "./components/location";


class App extends Component{
  render() {
    return (
        <div>
        <Header />
        <Header2 />
        <Location />
        </div>
    )
}
}









ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
