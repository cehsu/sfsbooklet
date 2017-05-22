import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from '../SearchBar';
import '../../styles/App.css';


const logo =
  'https://i2.wp.com/artdeezine.com/wp-content/uploads/2011/09/rc-bp-transparent_middle1.png';

const App = () =>
  (<MuiThemeProvider>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>SFS Booklet</h2>
      </div>
      <div className="App-intro">
        <SearchBar />
      </div>
    </div>
  </MuiThemeProvider>);

export default App;
