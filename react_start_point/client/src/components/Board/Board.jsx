import React from 'react';
import styles from './board-style.css';


const Board = React.createClass({

  render: function(){
    const buttonNodes = this.props.characterArray.map((button, index) => {
      return(
        <div className="card-container" >
          <div className="card">
            <input 
              key={ index } 
              type="image"
              value={ index + 1 }
              src={ button.image }
              onClick={ this.props.turn }/>
          </div>
          <p>{ button.name }</p>
        </div>
      );
    });


    return (
      <div className = "page">
        { buttonNodes }
      </div>
    );
  }
})   


module.exports = Board;