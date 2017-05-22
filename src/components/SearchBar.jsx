import React, { Component } from 'react';
// import ResultsList from "./containers/ResultsList";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import search from '../js/search';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.updateResults = this.updateResults.bind(this);
    // this.renderResults = this.renderResults.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateResults() {
    const results = search.search(this.state.value);
    this.setState({ results });
  }

  // renderResults = () => {
  //     return (
  //         <ResultsList query={this.state.value} data={this.state.results} />
  //     )
  // }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.updateResults();
    // this.renderResults()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="query"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <RaisedButton label="Submit" type="submit" />
        <div>
          {Array.isArray(this.state.results) &&
            this.state.results.map(item => (
              <Card key={item.name}>
                <CardHeader
                  title={item.name}
                  subtitle={item.address}
                  actAsExpander
                  showExpandableButton
                />
                <CardActions>
                  {item.categories.split(',').map(category => <FlatButton key={category} label={category} />)}
                </CardActions>
                <CardText expandable>
                  {item.description}
                </CardText>
              </Card>
            ))}
        </div>
      </form>
    );
  }
}

export default SearchBar;
