var React = require ("react");

var CharacterSelector = React.createClass({
  getInitialState: function(){
    return {selectedIndex: undefined, win: null};
  },

  handleChange: function(event){
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    var guess = this.props.characters[newIndex];
    if(guess === this.props.chosen){
      this.setState({win: "You Win!"})
      console.log("win!");
    }
  },

  checkCharacter: function(){
  },

  render: function(){
    var options = this.props.characters.map(
      function(character, index){
        return <option value ={index} key = {index}> {character} </option>
      })

    return(
      <div className = "check-area">
      <p>Guess Who:
      <select id = "characters" value = {this.state.selectedIndex} onChange = {this.handleChange}> {options} </select>
      </p>
      <h2>{this.state.win}</h2>
      </div>
      );
  }
});

module.exports = CharacterSelector;