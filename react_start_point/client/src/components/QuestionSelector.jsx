var React = require ("react");

var QuestionSelector = React.createClass({
  getInitialState: function(){
    return {selectedIndex: undefined};
  },

  render: function(){
    var options = this.props.questions.map(
      function(question, index){
        return<option value ={index} key = {index}> {question} </option>
      })

    return(
      <select id = "questions" value = {this.state.selectedIndex}> {options} </select>
      );
  }
});

module.exports = QuestionSelector;