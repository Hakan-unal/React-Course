import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <h2 style={{ color: "blue" }}>1 Hello World</h2>
                <p><b>Merhaba bu bir deneme yazısıdır</b>.</p>
                <input id="inputBox"></input>
                <button onClick={() => console.log("Click")} className="btn btn-outline-dark ml-3 btn-sm">Gönder</button>
                <p id="result" className="text-primary"></p>
            </div>
        )
    }
}

export default User;
