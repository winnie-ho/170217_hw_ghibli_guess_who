import React from "react";
import "./questionSelector.css"

const QuestionSelector = React.createClass({
  getInitialState: function(){
    return {
      selectedIndex: undefined,
      answer: null
    };
  },

  handleChange: function(event){
    const newIndex = event.target.value;
    this.setState({ selectedIndex: newIndex });

    if (newIndex == 1) {
      for (let character of this.props.characterArray){
        if(character.animal === this.props.chosenObject.animal){
          this.setState({ answer: character.animal })
        }
      }
    } else if (newIndex == 2) {
      for (let character of this.props.characterArray){
        if(character.tail === this.props.chosenObject.tail){
          this.setState({ answer: character.tail })
        }
      }
    } else if (newIndex == 3) {
      for (let character of this.props.characterArray){
        if(character.clothes === this.props.chosenObject.clothes){
          this.setState({ answer: character.clothes })
        }
      }
    } else if (newIndex == 4) {
      for (let character of this.props.characterArray){
        if(character.vehicle === this.props.chosenObject.vehicle){
          this.setState({ answer: character.vehicle })
        }
      }
    } else if (newIndex == 5) {
      for (let character of this.props.characterArray){
        if(character.spiritual === this.props.chosenObject.spiritual){
          this.setState({ answer: character.spiritual })
        }
      }
    } else if (newIndex == 6) {
      for (let character of this.props.characterArray){
        if(character.princess === this.props.chosenObject.princess){
          this.setState({ answer: character.princess })
        }
      }
    } else if (newIndex == 7) {
      for (let character of this.props.characterArray){
        if(character.wolves === this.props.chosenObject.wolves){
          this.setState({ answer: character.wolves })
        }
      }
    } else if (newIndex == 8) {
      for (let character of this.props.characterArray){
        if(character.star === this.props.chosenObject.star){
          this.setState({ answer: character.star })
        }
      }
    } else if (newIndex == 9) {
      for (let character of this.props.characterArray){
        if(character.sea === this.props.chosenObject.sea){
          this.setState({ answer: character.sea })
        }
      }
    } else if (newIndex == 10) {
      for (let character of this.props.characterArray) {
        if (character.witch === this.props.chosenObject.witch) {
          this.setState({ answer: character.witch })
        }
      }
    }
  },

  render: function(){
    const options = this.props.questions.map((question, index) => {
      return <option 
              value={ index } 
              key={ index }> 
                {question}
              </option>
    });

    return(
      <div className="answer">
        <p>Ask a Question</p>
        <select 
          id="questions" 
          value={ this.state.selectedIndex }
          onChange={ this.handleChange }>
           { options } 
          </select>

        <h2>{ this.state.answer }</h2>
      </div>
    );
  }
});

export default QuestionSelector;