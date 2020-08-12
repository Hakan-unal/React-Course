import React from "react";


const Comment = (props) => {
    const { name, surname, day, star } = props;

    return (
        <div className="ui comments">
            <div className="comment">
                <a className="avatar" href="/">
                    <img alt="fotoğraf" src="./logo192.png" />
                </a>
                <div className="content">
                    <a className="author" href="/">{name} {surname}</a>
                    <div className="metadata">
                        <div className="date">{day}</div>
                        <div className="rating">
                            <i className="star icon"></i>
                {star}
              </div>
                    </div>
                    <div className="text">
                        Merhaba dünyalı bugün nasılsın?
            </div>
                </div>
            </div>
        </div>
    )
}


export default Comment;