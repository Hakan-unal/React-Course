import React from "react";


const Comment = (props) => {
    const { name, surname } = props;

    return (
        <div className="ui comments">
            <div className="comment">
                <a className="avatar" href="/">
                    <img alt="fotoğraf" />
                </a>
                <div className="content">
                    <a className="author" href="/">{name} {surname}</a>
                    <div className="metadata">
                        <div className="date">2 gün önce</div>
                        <div className="rating">
                            <i className="star icon"></i>
                5 yıldız
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