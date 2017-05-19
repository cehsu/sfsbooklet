import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Result.css'

let Result = (props) => {
    return (
        <div className="Result">
           <li>
                <ul>
                    <li>{`Submitted by ${props.author} on ${props.date}`}</li>
                    <li>{props.title}</li>
                    <li>{props.briefDesc}</li>
                    {/* TODO: make the content of a particular resource slide down when clicked on. */}
                    <li class="hide">{props.content}</li> 
                </ul>
            </li>
        </div>
    )
}

Result.propTypes = {
    author: PropTypes.string,
    date: PropTypes.date,
    title: PropTypes.string,
    briefDesc: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Result;