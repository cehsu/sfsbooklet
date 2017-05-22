import React, { Component } from 'react';
import logo from '../../logo.svg';
import SearchBar from '../SearchBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../../styles/App.css';

/* TODO: Render MuiThemeProvider on the server for much needed utility 
(currently, you have to prepend a MuiThemProvider component to each material-ui component #soTedious)
*/
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
