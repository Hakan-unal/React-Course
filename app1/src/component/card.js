import React from "react";

const cardDesign = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <span className="left floated like">
                    <i className="like icon"></i>
    Beğen 
  </span>
                <span className="right floated star">
                    <i className="star icon"></i>
    Favoriye al
  </span>
            </div>
        </div>)
}


export default cardDesign;