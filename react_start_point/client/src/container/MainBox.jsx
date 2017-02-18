var React = require("react");
var Board = require("../components/Board.jsx");
var CharacterSelector = require ("../components/CharacterSelector.jsx");
var QuestionSelector = require ("../components/QuestionSelector.jsx")
var Character = require("../components/models/character");

var MainBox = React.createClass({
  getInitialState: function(){
    var characterArray = [];

      var totoro = new Character("Totoro", "Yes", "Yes", "No", "No", "No");
      var ponyo = new Character("Ponyo", "Yes", "Yes", "No", "No", "No");
      var noface = new Character("No Face", "No", "No", "Yes", "No", "Yes");
      var baron = new Character("Baron", "Yes", "Yes", "Yes", "No", "No");
      var kittenbus = new Character("Kitten Bus", "Yes", "Yes", "No", "Yes", "No");
      var kodama = new Character("Kodama", "No", "No", "No", "No", "Yes");


      characterArray.push(totoro);
      characterArray.push(ponyo);
      characterArray.push(noface);
      characterArray.push(baron);
      characterArray.push(kittenbus);
      characterArray.push(kodama);

    return {
      board: ["../resources/totoro.png",
    "../resources/ponyo.png",
    "../resources/noface.png",
     "../resources/baron.png",
     "../resources/kittenbus.png",
     "../resources/kodama.png"],
      characterArray: characterArray,
      characters: ["select","Totoro", "Ponyo", "Noface", "Baron", "Kitten Bus", "Kodama"],
      questions: ["select","is an animal?", "has a tail?", "is wearing clothes?", "is a vehicle?", "is a spirit?"],
      chosen: null,
      chosenObject: null,
      focusCharacter: null
      }
  },

  checkGuess: function(event){
    console.log("checking character guess");
  },

  generateChosen: function(){
    var randomIndex = Math.floor((Math.random() * this.state.characters.length) + 1)
    var chosenCharacter = this.state.characters[randomIndex];
    this.setState({chosen: chosenCharacter});
    var chosenCharacterObject = this.state.characterArray[randomIndex-1]
    this.setState({chosenObject: chosenCharacterObject});
    console.log("chosenObject: ", chosenCharacterObject);
    

  },

  turn: function(event){
    var personSelect = event.target.value;
    var lookup = {
      1: () => { 
        this.state.board[0] = "../resources/card.png"
        return(this.state.board)
      },
      2: () => { 
        this.state.board[1] = "../resources/card.png"
        return(this.state.board)
      },
      3: () => { 
        this.state.board[2] = "../resources/card.png"
        return(this.state.board)
      },
      4: () =>{
        this.state.board[3] = "../resources/card.png"
        return(this.state.board)
      },
      5: () =>{
        this.state.board[4] = "../resources/card.png"
        return(this.state.board)
      },
      6: () =>{
        this.state.board[5] = "../resources/card.png"
        return(this.state.board)
      }
    }

    var newBoard = lookup[personSelect]();

    this.setState({board: newBoard});
  },


  componentDidMount: function(){
    this.generateChosen();
  },

  setFocusCharacter: function(character){
    this.setState({focusCharacter: character});
    console.log(this.state.focusCharacter);
  },

  render: function(){
    console.log("chosenCharacter:", this.state.chosen);
    return (
      <div className = "main-box">
      <h1>Ghibli Guess Who</h1>
      <CharacterSelector characters = {this.state.characters} chosen = {this.state.chosen} selectCharacter = {this.setFocusCharacter} check = {this.checkGuess}/>
      <QuestionSelector questions = {this.state.questions} characterArray = {this.state.characterArray} chosen = {this.state.chosen} chosenObject = {this.state.chosenObject}/>
      <Board board = {this.state.board} turn = {this.turn} />
      </div>
      );
  }
});

module.exports = MainBox;