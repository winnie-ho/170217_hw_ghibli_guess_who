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

  },

  render: function(){
    var options = this.props.questions.map(
      function(question, index){
        return<option value ={index} key = {index}> {question} </option>
      })

    return(
      <div>
      <p> Ask a Question
      <select id = "questions" value = {this.state.selectedIndex} onChange = {this.handleChange} > {options} </select>
      </p>
      <h1>{this.state.answer}</h1>
      </div>
      );
  }
});

module.exports = QuestionSelector;