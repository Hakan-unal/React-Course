import React from "react";
import ReactDOM from "react-dom";
import Comment from "./component/comment";



const App = () => {
    return (
        <div>
            <Comment name="Test1" surname="Deneme1"/>
            <Comment name="Test2" surname="Deneme2"/>
            <Comment name="Test3" surname="Deneme3"/>
            <Comment name="Test4" surname="Deneme4"/>


        </div>
    )
}




ReactDOM.render(<App />, document.querySelector("#root"));