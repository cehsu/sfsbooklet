import React, { Component } from 'react';
import logo from '../../logo.svg';
import SearchBar from '../SearchBar'
import '../../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
          <MuiThemeProvider>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>SFS Booklet</h2>
                </div>
                <div className="App-intro">
                    <SearchBar />
                </div>
            </div>
          </MuiThemeProvider>
   );
 }
}

export default App;
