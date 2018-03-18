import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './App.css';

class InputDetails extends Component{
	render(){
		const style1 = {
				  marginRight: 20,
				  marginTop: 50,
				  marginLeft: 20,
				};
		return (

			<MuiThemeProvider>
				<div>
					<TextField hintText="Player name"/>
					<RaisedButton label="Add" primary={true} style={style1} onClick={this.handleClick.bind(this)} />
				</div>
			</MuiThemeProvider>
			);
	}
}
export default InputDetails;