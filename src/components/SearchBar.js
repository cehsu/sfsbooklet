import React, { Component } from 'react'
import ResultsList from './containers/ResultsList'
import JsSearch from 'js-search'
import SampleSearchData from '../../data/sampleSearchData.json'

let results = '' // variable used to modify state

let search = new JsSearch.Search('isbn');
search.addIndex('title');
search.addIndex(['author', 'name']);
search.addIndex('tags')

search.addDocuments([SampleSearchData.data[0], SampleSearchData.data[1], SampleSearchData.data[2]]);


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: results
        };
        this.updateResults = this.updateResults.bind(this)
        this.renderResults = this.renderResults.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateResults = () => {
        console.log(search.search(this.state.value));
        search.search(this.state.value)
        // TODO: Fetch data from json file and render it
        this.setState({results: results});
    }

    renderResults = () => {
        return (
            <ResultsList query={this.state.value} data={this.state.results} />
        )
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.updateResults()
        this.renderResults()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SearchBar;