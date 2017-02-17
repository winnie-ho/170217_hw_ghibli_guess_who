var React = require ("react");

var QuestionsSelector = React.createClass({
  getInitialState: function(){
    return {selectedIndex: undefined};
  },

  render: function(){
    var options = this.props.characters.map(
      function(character, index){
        return<option value ={index} key = {index}> {character.name} </option>
      })

    return(
      <select id = "characters" value = {this.state.selectedIndex}> {options} </select>
      );
  }
});

module.exports = QuestionsSelector;