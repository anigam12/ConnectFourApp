import React, { Component } from 'react';
import './App.css';
import Hole from './Hole.js';

class Squares extends Component{
	render(){
		return(
			<div className="Squares" onClick={() => this.props.handleClick()}>
			  {[...Array(this.props.holes.length)].map((x, j) => 
			    <Hole key={j} value={this.props.holes[j]}></Hole>)}
			</div>
			);
	}
}
export default Squares;