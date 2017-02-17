var React = require("react");
var Board = require("../components/Board.jsx");
var CharacterSelector = require ("../components/CharacterSelector.jsx");
var QuestionSelector = require ("../components/QuestionSelector.jsx")

var MainBox = React.createClass({
  getInitialState: function(){
    return {
      board: ["../resources/totoro.png",
    "../resources/ponyo.png",
    "../resources/noface.png",
     "../resources/baron.png"],
      characters: ["totoro", "ponyo", "noface", "baron"],
      questions: ["is an animal?", "has no face?", "has a tail?", "is wearing clothes?"]}
  },

  winGame: function(){

  },

  turn: function(event){
    var personSelect = event.target.value;
    var lookup = {
      1: () => { 
        this.state.board[0] = ""
        this.winGame();
        return(this.state.board)
      },
      2: () => { 
        this.state.board[1] = ""
        this.winGame();
        return(this.state.board)
      },
      3: () => { 
        this.state.board[2] = ""
        this.winGame();
        return(this.state.board)
      },
      4: () =>{
        this.state.board[3] = ""
        this.winGame();
        return(this.state.board)
      }
    }

    var newBoard = lookup[personSelect]();

    this.setState({board: newBoard});
  },

  render: function(){
    return (
      <div className = "main-box">
      <h1>Ghibli Guess Who</h1>
      Guess Who: <CharacterSelector characters = {this.state.characters}/>
      Ask a Question: <QuestionSelector questions = {this.state.questions}/>
      <Board board = {this.state.board} turn = {this.turn} />
      </div>
      );
  }
});

module.exports = MainBox;