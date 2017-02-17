var React = require("react");
var Board = require("../components/Board.jsx");
var QuestionsSelector = require ("../components/QuestionsSelector.jsx");

var MainBox = React.createClass({
  getInitialState: function(){
    return {board: ["../resources/totoro.png",
    "../resources/ponyo.png",
    "../resources/noface.png",
     "../resources/baron.png"]}
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
      <QuestionsSelector characters = {this.state.board}/>
      <Board board = {this.state.board} turn = {this.turn} />
      </div>
      );
  }
});

module.exports = MainBox;