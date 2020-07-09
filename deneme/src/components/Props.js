import React from 'react'

const Props = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>

            <ul>
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>Boostrap</li>
                <li>{props.deneme}</li>
            </ul>

        </div>
    )
}




export default Props;