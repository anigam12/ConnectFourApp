import React, { Component } from 'react';
import './App.css';

class Hole extends Component{
	render(){
		return(
			<div className="Hole">
				<div className={this.props.value}></div>
			</div>
			);
	}
}
export default Hole;