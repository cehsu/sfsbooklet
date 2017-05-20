import React, { Component } from 'react';
import ResultsList from './containers/ResultsList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete'
import RaisedButton from 'material-ui/RaisedButton';
import FontAwesome from 'react-fontawesome';
import RefGuideData from '../../data/refguide.json';

let results = '' // variable used to modify state

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            results: results
        };
        this.updateResults = this.updateResults.bind(this)
        this.renderResults = this.renderResults.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateResults = () => {
        // console.log(search.search(this.state.searchText));
        // TODO: Fetch data from json file and render it
        this.setState({results: results});
    }

    renderResults = () => {
        return <ResultsList query={this.state.searchText} data={this.state.results} />
        
    }

    handleChange(event) {
        this.setState({searchText: event.target.searchText});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.updateResults()
        this.renderResults()
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    {/*TODO: Make AutoComplete component do its job! (Hint: line 52)*/}
                    <AutoComplete 
                        id="search-field"
                        dataSource={RefGuideData}
                        filter={(searchText, key) => searchText !== '' && key.indexOf(searchText) !== -1}
                        openOnFocus={true}
                        onNewRequest={this.handleSubmit}
                        onUpdateInput={() => this.handleChange}
                        searchText={this.state.searchText} />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <RaisedButton onClick={this.handleSubmit}>
                        <FontAwesome ariaLabel="search" name="search"/>
                    </RaisedButton>
                </MuiThemeProvider>
            
            </div>
        );
    }
}

export default SearchBar;