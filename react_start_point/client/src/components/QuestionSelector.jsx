var React = require ("react");

var QuestionSelector = React.createClass({
  getInitialState: function(){
    return {selectedIndex: undefined, answer: null};
  },

  handleChange: function(event){
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    var questionAsked = this.props.questions[newIndex];
    console.log("question asked", questionAsked);
    console.log("newIndex:", newIndex);
    console.log("characterArray: ", this.props.characterArray);


    if(newIndex == 1){
      for (var character of this.props.characterArray){
        console.log(character.animal);
        if(character.animal === this.props.chosenObject.animal){
          this.setState({answer: character.animal})
          console.log("answer:", this.state.answer);
        }
      }
    }else if(newIndex == 2){
      for (var character of this.props.characterArray){
        console.log(character.tail);
        if(character.tail === this.props.chosenObject.tail){
          this.setState({answer: character.tail})
          console.log("answer:", this.state.answer);
        }
      }
    }else if(newIndex == 3){
      for (var character of this.props.characterArray){
        console.log(character.clothes);
        if(character.clothes === this.props.chosenObject.clothes){
          this.setState({answer: character.clothes})
          console.log("answer:", this.state.answer);
        }
      }
    }else if(newIndex == 4){
      for (var character of this.props.characterArray){
        console.log(character.vehicle);
        if(character.vehicle === this.props.chosenObject.vehicle){
          this.setState({answer: character.vehicle})
          console.log("answer:", this.state.answer);
        }
      }
    }else if(newIndex == 5){
      for (var character of this.props.characterArray){
        console.log(character.spiritual);
        if(character.spiritual === this.props.chosenObject.spiritual){
          this.setState({answer: character.spiritual})
          console.log("answer:", this.state.answer);
        }
      }
    }else if(newIndex == 6){
      for (var character of this.props.characterArray){
        console.log(character.spiritual);
        if(character.spiritual === this.props.chosenObject.spiritual){
          this.setState({answer: character.spiritual})
          console.log("answer:", this.state.answer);
        }
      }
    }
  },

  render: function(){
    var options = this.props.questions.map(
      function(question, index){
        return<option value ={index} key = {index}> {question} </option>
      })

    return(
      <div className = "answer">
      <p> Ask a Question
      <select id = "questions" value = {this.state.selectedIndex} onChange = {this.handleChange}> {options} </select>
      </p>

      <h2>{this.state.answer}</h2>
      </div>
      );
  }
});

module.exports = QuestionSelector;