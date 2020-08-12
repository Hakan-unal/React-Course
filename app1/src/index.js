import React from "react";
import ReactDOM from "react-dom";
import Comment from "./component/comment";
import CardDesign from "./component/card";


const App = () => {
    return (
        <div className="ui container">
            
        <CardDesign><Comment name="Test1" surname="Deneme1" day="1 gün önce" star="1 yıldız" /></CardDesign>
        <CardDesign><Comment name="Test2" surname="Deneme2" day="2 gün önce" star="2 yıldız" /></CardDesign>
        <CardDesign><Comment name="Test3" surname="Deneme3" day="3 gün önce" star="3 yıldız" /></CardDesign>
        <CardDesign><Comment name="Test4" surname="Deneme4" day="4 gün önce" star="4 yıldız" /></CardDesign>


        </div>
    )
}




ReactDOM.render(<App />, document.querySelector("#root"));