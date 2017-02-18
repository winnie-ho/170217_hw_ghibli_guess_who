var React = require("react");
var Board = require("../components/Board.jsx");
var CharacterSelector = require ("../components/CharacterSelector.jsx");
var QuestionSelector = require ("../components/QuestionSelector.jsx")
var Character = require("../components/models/character");

var MainBox = React.createClass({
  getInitialState: function(){
    var characterArray = [];

      var totoro = new Character("Totoro", "../resources/totoro.png", "Yes", "Yes", "No", "No", "Yes", "No", "No", "No", "No")
      var ponyo = new Character("Ponyo", "../resources/ponyo.png", "Yes", "Yes", "No", "No", "No", "No", "No", "No", "Yes")
      var noface = new Character("No Face", "../resources/noface.png", "No", "No", "Yes", "No", "Yes", "No", "No", "No", "No")
      var baron = new Character("Baron", "../resources/baron.png", "Yes", "Yes", "Yes", "No", "No", "No", "No", "No", "No")
      var kittenbus = new Character("Kitten Bus", "../resources/kittenbus.png", "Yes", "Yes", "No", "Yes", "No", "No", "No", "No", "No")
      var kodama = new Character("Kodama", "../resources/kodama.png", "No", "No", "No", "No", "Yes", "No", "No", "No", "No")
      var satsuki = new Character("Satsuki", "../resources/satsuki.png", "No", "No", "Yes", "No", "No", "No", "No", "No", "No")
      var calcifier = new Character("Calcifier", "../resources/calcifier.png", "No", "No", "No", "No", "No", "No", "No", "Yes", "No")
      var fujimoto = new Character("Fujimoto", "../resources/fujimoto.png", "No", "No", "Yes", "No", "No", "No", "No", "No", "Yes")
      var chihiro = new Character("Chihiro", "../resources/chihiro.png", "No", "No", "Yes", "No", "No", "No", "No", "No", "No")
      var gonta = new Character("Gonta", "../resources/gonta.jpg", "Yes", "Yes", "No", "No", "No", "No", "No", "No", "No")
      var mononoke = new Character("Mononoke", "../resources/mononoke.png", "No", "No", "Yes", "No", "No", "Yes", "Yes", "No", "No")
      var yubaba = new Character("Yubaba", "../resources/yubaba.png", "No", "No", "Yes", "No", "Yes", "No", "No", "No", "No")
      var nausicaa = new Character("Nausicaa", "../resources/nausicaa.png", "No", "No", "Yes", "No", "No", "Yes", "No", "No", "No")


      characterArray.push(totoro);
      characterArray.push(ponyo);
      characterArray.push(noface);
      characterArray.push(baron);
      characterArray.push(kittenbus);
      characterArray.push(kodama);
      characterArray.push(satsuki);
      characterArray.push(calcifier);
      characterArray.push(fujimoto);
      characterArray.push(chihiro);
      characterArray.push(gonta);
      characterArray.push(mononoke);
      characterArray.push(yubaba);
      characterArray.push(nausicaa);

    return {
      characterArray: characterArray,
      characters: ["select","Totoro", "Ponyo", "Noface", "Baron", "Kitten Bus", "Kodama", "Satsuki", "Calcifier", "Fujimoto", "Chihiro", "Gonta", "Mononoke", "Yubaba", "Nausicaa"],
      questions: ["select","is an animal?", "has a tail?", "is wearing clothes?", "is a vehicle?", "is a spirit?", "is a princess?", "can speak to wolves?", "was originally a falling star?", "lives under water?"],
      chosen: null,
      chosenObject: null,
      focusCharacter: null
      }
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
        this.state.characterArray[0].image = "../resources/card.png"
        this.state.characterArray[0].name = "-"
        return(this.state.characterArray)
      },
      2: () => { 
        this.state.characterArray[1].image = "../resources/card.png"
        this.state.characterArray[1].name = "-"
        return(this.state.characterArray)
      },
      3: () => { 
        this.state.characterArray[2].image = "../resources/card.png"
        this.state.characterArray[2].name = "-"
        return(this.state.characterArray)
      },
      4: () =>{
        this.state.characterArray[3].image = "../resources/card.png"
        this.state.characterArray[3].name = "-"
        return(this.state.characterArray)
      },
      5: () =>{
        this.state.characterArray[4].image = "../resources/card.png"
        this.state.characterArray[4].name = "-"
        return(this.state.characterArray)
      },
      6: () =>{
        this.state.characterArray[5].image = "../resources/card.png"
        this.state.characterArray[5].name = "-"
        return(this.state.characterArray)
      },
      7: () =>{
        this.state.characterArray[6].image = "../resources/card.png"
        this.state.characterArray[6].name = "-"
        return(this.state.characterArray)
      },
      8: () =>{
        this.state.characterArray[7].image = "../resources/card.png"
        this.state.characterArray[7].name = "-"
        return(this.state.characterArray)
      },
      9: () =>{
        this.state.characterArray[8].image = "../resources/card.png"
        this.state.characterArray[8].name = "-"
        return(this.state.characterArray)
      },
      10: () =>{
        this.state.characterArray[9].image = "../resources/card.png"
        this.state.characterArray[9].name = "-"
        return(this.state.characterArray)
      },
      11: () =>{
        this.state.characterArray[10].image = "../resources/card.png"
        this.state.characterArray[10].name = "-"
        return(this.state.characterArray)
      },
      12: () =>{
        this.state.characterArray[11].image = "../resources/card.png"
        this.state.characterArray[11].name = "-"
        return(this.state.characterArray)
      },
      13: () =>{
        this.state.characterArray[12].image = "../resources/card.png"
        this.state.characterArray[12].name = "-"
        return(this.state.characterArray)
      },
      14: () =>{
        this.state.characterArray[13].image = "../resources/card.png"
        this.state.characterArray[13].name = "-"
        return(this.state.characterArray)
      }
    }

    var newCharacterArray = lookup[personSelect]();
    this.setState({characterArray: newCharacterArray});
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
      <CharacterSelector characters = {this.state.characters} chosen = {this.state.chosen} selectCharacter = {this.setFocusCharacter} check = {this.checkGuess} characterArray = {this.state.characterArray}/>
      <QuestionSelector questions = {this.state.questions} characterArray = {this.state.characterArray} chosen = {this.state.chosen} chosenObject = {this.state.chosenObject}/>
      <Board turn = {this.turn} characterArray = {this.state.characterArray} />
      </div>
      );
  }
});

module.exports = MainBox;