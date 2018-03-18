import React, { Component } from 'react';
import { browserHistory } from "react-router";
//import { Link } from "react-router-dom";
//import App from './App.js';
import './App.css';
import Header from './Header';

class Home extends Component {

 constructor(props){
   super(props);
   this.handleClick=this.handleClick.bind(this);
 }

 handleClick(){
 	browserHistory.push("/Connect Four");
 }

 render() {   
   return (
   	<div className="App2 container">
	 	<Header />
		<button onClick={this.handleClick.bind(this)} className="button">Lets Play!</button>		
    </div>
   );
 }
}


export default Home;






