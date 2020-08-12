import React from "react";
import ReactDOM from "react-dom";
import Comment from "./component/comment";



const App = () => {
    return (
        <div>
            <Comment name="Hakan"/>
            <Comment name="Ünal"/>
            <Comment name="Hakan Ünal"/>

        </div>
    )
}




ReactDOM.render(<App />, document.querySelector("#root"));