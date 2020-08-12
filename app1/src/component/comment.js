import React from "react";
import faker from "faker";


const Comment = (props) => {


    return (
        <div className="ui comments">
            <div className="comment">
                <a className="avatar" href="/">
                    <img alt="fotoğraf" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a className="author" href="/">{props.name}</a>
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