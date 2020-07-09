import React from 'react'

const Props = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>

            <ul>
                <li>{props.name1}</li>
                <li>{props.name2}</li>
                <li>{props.name3}</li>
                <li>{props.name4}</li>
                <li>{props.deneme}</li>
            </ul>

        </div>
    )
}




export default Props;