import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


//import InputDetails from './InputDetails.js';

import Squares from './Squares.js';
import {checkWinner, checkMatch} from './Findwinner.js'

class Grid extends Component{
	constructor(){
		super();
		this.state ={
			boardState: new Array(7).fill(new Array(6).fill(null)),
			playerOne: '',
			playerTwo: '',
		    playerTurn: 'Red',
		    gameMode: '',
		    gameSelected: false,
		    winner: ''
		}
	}
	createGrid(){
		console.log(this.state);
		
		  }
	
	addPlayer(event){
		console.log(event.target.value);
			this.setState({
			   playerOne: event.target.value,
			   playerTwo: 'ai',
			   gameMode: 'ai',
			   gameSelected: true, 
			   boardState: new Array(7).fill(new Array(6).fill(null))
			})
		
	  
	}
	move(playermove){
	  const boardCopy = this.state.boardState.map(function(arr) {
	    return arr.slice();
	  });
	  if( boardCopy[playermove].indexOf(null) !== -1 ){
	    let newmove = boardCopy[playermove]
	    newmove[newmove.indexOf(null)] = this.state.playerTurn
	    
	    this.setState({
	      playerTurn: (this.state.playerTurn === 'Red') ? 'Blue' : 'Red',
	      boardState: boardCopy
	    })
	  }
	}

	handleClick(playermove) {
	  if(this.state.winner === ''){
	    this.move(playermove)
	  }
	}
	
	componentDidUpdate(){
	  let winner = checkWinner(this.state.boardState)
	  if(this.state.winner !== winner){
	    this.setState({winner: winner})
	  } else {
	     if(this.state.gameMode === 'ai' && this.state.playerTurn === 'Blue'){
	      let validMove = -1;
	      while(validMove === -1){
	        let Squares = Math.floor((Math.random() * 7))
	        if(this.state.boardState[Squares].indexOf(null) !== -1){
	          validMove = Squares
	        }else{
	          validMove = -1
	        }
	      }
	      this.move(validMove)
	     }
	  }
	}



	render(){
		const style1 = {
				  marginRight: 20,
				  marginTop: 50,
				  marginLeft: 20,
				};
		let result
		if(this.state.winner !== ""){
		  result = "winnerMessage appear"
		}else {
		  result = "winnerMessage"
		}


		let tiles = [...Array(this.state.boardState.length)].map((x, index) => 
		  <Squares 
		      key={index}
		      holes={this.state.boardState[index]}
		      handleClick={() => this.handleClick(index)}
		  ></Squares>
		)

		return(
		<div>
			

			

			<MuiThemeProvider>
				<div>
					<TextField hintText="Player name" onChange={this.addPlayer.bind(this)}/>
					<RaisedButton label="Player One" primary={true} style={style1} onClick={this.createGrid.bind(this)} />
				</div>

			</MuiThemeProvider>

			<div className="Board">
			  {tiles}
			</div>

			<div className={result}>{this.state.winner}</div>

		</div>


			);
	}

}export default Grid;


      