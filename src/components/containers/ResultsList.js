import React from 'react'
import PropTypes from 'prop-types'
import Result from '../Result'

let ResultsList = (props) => {
    let searchResults = props.data.map(result => {
        return <Result author={props.data.author}
                       date={props.data.date}
                       title={props.data.title}
                       briefDesc={props.data.briefDesc}
                       content={props.data.content} 
                />
    });

    return (
        <div>
            <ul>
                {searchResults}
            </ul>
        </div>
    )
}

ResultsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired, // Each data obj should contain the following fields: author, date, title, briefDesc, content
    query: PropTypes.oneOfType([ 
        PropTypes.string,
        PropTypes.array
    // The query is what was inputted to the SearchBar. It can either be a single string, for a single search result, or a series of strings, for an array of strings
    ])
}

export default ResultsList;