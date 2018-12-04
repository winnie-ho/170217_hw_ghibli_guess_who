import React from 'react';
import './board.css';


const Board = React.createClass({

  render: function(){
    const buttonNodes = this.props.characterArray.map((button, index) => {
      return(
        <div 
          className="card-container" 
          key={ index }>
          <div className="card">
            <input 
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


export default Board;