var React = require ("react");
var Board = React.createClass({

  render: function(){
    var buttonNodes = this.props.board.map((button, index)=>{
      return(
        <div>
        <input type = "image" value = {index + 1} src = {button} key = {index} onClick = {this.props.turn}/>
        </div>
        )
    })


    return (
      <div className = "page">

      <div className = "grid">
      {buttonNodes}
      </div>

      </div>
      )
  }
})   


module.exports = Board;