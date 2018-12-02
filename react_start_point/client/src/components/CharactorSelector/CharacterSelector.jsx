import React from "react";
import './characterSelector.css'


const CharacterSelector = React.createClass({
  getInitialState: function() {
    return {
      selectedIndex: undefined, 
      win: null
    };
  },

  handleChange: function(event) {
    const newIndex = event.target.value;
    this.setState({ selectedIndex: newIndex });
    const guess = this.props.characters[newIndex];

    if (guess === this.props.chosen) {
      this.setState({ win: "You Win!" })
    }
    else {
      this.setState({ win: "Try Again!" })
    }
  },

  render: function() {
    const options = this.props.characters.map((character, index) => {
      return <option 
                value={ index } 
                key={ index }>
                { character }
              </option>
    });

    return(
      <div className="check-area">
        <p>Guess Who:</p>
        <select 
          id="characters" 
          value={ this.state.selectedIndex } 
          onChange={ this.handleChange }>
          { options }
        </select>
        <h2>{ this.state.win }</h2>
      </div>
      );
  }
});

module.exports = CharacterSelector;