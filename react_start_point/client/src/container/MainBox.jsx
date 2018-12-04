import React from "react";
import Board from "../components/board/board.jsx";
import CharacterSelector from"../components/charactorSelector/characterSelector.jsx";
import QuestionSelector from"../components/QuestionSelector/questionSelector.jsx";
import Character from "../models/character";
import "./mainBox.css"

const MainBox = React.createClass({
  getInitialState: function(){
    const characterArray = [];

    const totoro = new Character("Totoro", "../resources/totoro.png", "Yes", "Yes", "No", "No", "Yes", "No", "No", "No", "No", "No");
    const ponyo = new Character("Ponyo", "../resources/ponyo.png", "Yes", "Yes", "No", "No", "No", "No", "No", "No", "Yes", "No");
    const noface = new Character("No Face", "../resources/noface.png", "No", "No", "Yes", "No", "Yes", "No", "No", "No", "No", "No");
    const baron = new Character("Baron", "../resources/baron.png", "Yes", "Yes", "Yes", "No", "No", "No", "No", "No", "No", "No");
    const kittenbus = new Character("Kitten Bus", "../resources/kittenbus.png", "Yes", "Yes", "No", "Yes", "No", "No", "No", "No", "No", "No");
    const kodama = new Character("Kodama", "../resources/kodama.png", "No", "No", "No", "No", "Yes", "No", "No", "No", "No", "No");
    const satsuki = new Character("Satsuki", "../resources/satsuki.png", "No", "No", "Yes", "No", "No", "No", "No", "No", "No", "No");
    const calcifier = new Character("Calcifier", "../resources/calcifier.png", "No", "No", "No", "No", "No", "No", "No", "Yes", "No", "No");
    const fujimoto = new Character("Fujimoto", "../resources/fujimoto.png", "No", "No", "Yes", "No", "No", "No", "No", "No", "Yes", "No");
    const chihiro = new Character("Chihiro", "../resources/chihiro.png", "No", "No", "Yes", "No", "No", "No", "No", "No", "No", "No");
    const gonta = new Character("Gonta", "../resources/gonta.jpg", "Yes", "Yes", "No", "No", "No", "No", "No", "No", "No", "No");
    const mononoke = new Character("Mononoke", "../resources/mononoke.png", "No", "No", "Yes", "No", "No", "Yes", "Yes", "No", "No", "No");
    const yubaba = new Character("Yubaba", "../resources/yubaba.png", "No", "No", "Yes", "No", "Yes", "No", "No", "No", "No", "Yes");
    const nausicaa = new Character("Nausicaa", "../resources/nausicaa.png", "No", "No", "Yes", "No", "No", "Yes", "No", "No", "No", "No");


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
      characterArray,
      characters: [ 
        "select", 
        "Totoro", 
        "Ponyo", 
        "Noface", 
        "Baron", 
        "Kitten Bus", 
        "Kodama", 
        "Satsuki", 
        "Calcifier", 
        "Fujimoto", 
        "Chihiro", 
        "Gonta", 
        "Mononoke", 
        "Yubaba", 
        "Nausicaa"
      ],
      questions: [ 
        "select",
        "is an animal?", 
        "has a tail?", 
        "is wearing clothes?", 
        "is a vehicle?", 
        "is a spirit?", 
        "is a princess?", 
        "can speak to wolves?", 
        "was originally a falling star?", 
        "lives under water?", 
        "is a witch?"
      ],
      chosen: null,
      chosenObject: null,
      focusCharacter: null
    }
  },

  generateChosen: function(){
    const randomIndex = Math.floor((Math.random() * this.state.characters.length) + 1)
    this.setState({ chosen: this.state.characters[ randomIndex ] });
    this.setState({ chosenObject: this.state.characterArray[ randomIndex - 1 ] });
  },

  turn: function(event){
    const personSelect = event.target.value;
    const lookup = {
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
      4: () => {
        this.state.characterArray[3].image = "../resources/card.png"
        this.state.characterArray[3].name = "-"
        return(this.state.characterArray)
      },
      5: () => {
        this.state.characterArray[4].image = "../resources/card.png"
        this.state.characterArray[4].name = "-"
        return(this.state.characterArray)
      },
      6: () => {
        this.state.characterArray[5].image = "../resources/card.png"
        this.state.characterArray[5].name = "-"
        return(this.state.characterArray)
      },
      7: () => {
        this.state.characterArray[6].image = "../resources/card.png"
        this.state.characterArray[6].name = "-"
        return(this.state.characterArray)
      },
      8: () => {
        this.state.characterArray[7].image = "../resources/card.png"
        this.state.characterArray[7].name = "-"
        return(this.state.characterArray)
      },
      9: () => {
        this.state.characterArray[8].image = "../resources/card.png"
        this.state.characterArray[8].name = "-"
        return(this.state.characterArray)
      },
      10: () => {
        this.state.characterArray[9].image = "../resources/card.png"
        this.state.characterArray[9].name = "-"
        return(this.state.characterArray)
      },
      11: () => {
        this.state.characterArray[10].image = "../resources/card.png"
        this.state.characterArray[10].name = "-"
        return(this.state.characterArray)
      },
      12: () => {
        this.state.characterArray[11].image = "../resources/card.png"
        this.state.characterArray[11].name = "-"
        return(this.state.characterArray)
      },
      13: () => {
        this.state.characterArray[12].image = "../resources/card.png"
        this.state.characterArray[12].name = "-"
        return(this.state.characterArray)
      },
      14: () => {
        this.state.characterArray[13].image = "../resources/card.png"
        this.state.characterArray[13].name = "-"
        return(this.state.characterArray)
      }
    }

    const newCharacterArray = lookup[ personSelect ]();
    this.setState({ characterArray: newCharacterArray });
  },


  componentDidMount: function(){
    this.generateChosen();
  },

  setFocusCharacter: function(character){
    this.setState({ focusCharacter: character });
  },

  restart: function(){
    window.location.reload();
  },

  render: function(){
    console.log("chosenCharacter:", this.state.chosen);
    return (
      <div className="main-box">
        <h1>Ghibli Guess Who</h1>
        <QuestionSelector 
          questions={ this.state.questions } 
          characterArray={ this.state.characterArray }
          chosen={ this.state.chosen }
          chosenObject={ this.state.chosenObject }/>

        <CharacterSelector 
          characters={ this.state.characters }
          chosen={ this.state.chosen }
          selectCharacter={ this.setFocusCharacter }
          check={ this.checkGuess }
          characterArray={ this.state.characterArray }/>

        <button 
          className="restart" 
          onClick = {this.restart}>Restart
        </button>
        
        <Board 
          turn={ this.turn }
          characterArray={ this.state.characterArray }/>
      </div>
    );
  }
});

export default MainBox;