import React, { Component } from 'react';
// var JsSearch = require('js-search');
import logo from './logo.svg';
import '../../style/App.css';

var theGreatGatsby = {
 isbn: '9781597226769',
 title: 'The Great Gatsby',
 author: {
   name: 'F. Scott Fitzgerald'
 },
 tags: ['book', 'inspirational']
};

var theDaVinciCode = {
 isbn: '0307474275',
 title: 'The DaVinci Code',
 author: {
   name: 'Dan Brown'
 },
 tags: ['book', 'mystery']
};

var angelsAndDemons = {
 isbn: '074349346X',
 title: 'Angels & Demons',
 author: {
   name: 'Dan Brown',
 },
 tags: ['book', 'mystery']
};

// var search = new JsSearch.Search('isbn');
// search.addIndex('title');
// search.addIndex(['author', 'name']);
// search.addIndex('tags')

// search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);

let numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
 <li>{number}</li>
);

class NameForm extends Component {
 constructor(props) {
   super(props);
   this.state = {value: '',
                 numbers: numbers
               };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   // console.log(search.search(this.state.value));
   this.setState({numbers: numbers});
   event.preventDefault();
 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <label>
         Name:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
   );
 }
}

class App extends Component {
 render() {
   return (
     <div className="App">
       <div className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h2>Welcome to React</h2>
       </div>
       <p className="App-intro">
         <NameForm/>
         <ul>{listItems}</ul>,
       </p>
     </div>
   );
 }
}

export default App;
