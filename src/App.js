import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TextField from 'material-ui/TextField';
import Grid from './Grid.js';
//import InputDetails from './InputDetails.js';

class App extends Component {
  render() {

  
    return (
      <div className="App">
      
        <Header />
        
        
        
    	<Grid />
     
      </div>
    );
  }
}

export default App;
