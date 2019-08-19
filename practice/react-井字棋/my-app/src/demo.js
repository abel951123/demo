import React, { Component } from 'react';
import './demo.css'

class Square extends Component{
  handleClick = () => {
    this.props.funcModity(this.props.index)
  }
  render(){
    return <button onClick={this.handleClick}>{this.props.myList[this.props.index]}</button>
  }
}

class Board extends Component{
  constructor(){
    super()
    this.state = {
      xIsNext : true,
      squares : Array(9).fill(null)
    }
  }

  componentDidUpdate(){
    var result = this.calculateWinner(this.state.squares)
    if (result)
      alert("胜利者是" + result)
  }

  calculateWinner(squares){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a]
    }
    return null
  }

  modifyState = (index) =>{
    var newList = this.state.squares
    this.state.xIsNext ? newList[index] = 'X':newList[index] = 'O'
    this.setState({squares:newList,xIsNext:!this.state.xIsNext})
  }

  renderSquare = (i) =>{
    return <Square myList={this.state.squares} funcModity={this.modifyState} index={i}/>
  }

  render(){
    return <div className="game-bord">
      <div className="borad-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="borad-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="borad-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
  }
}

class Games extends Component{
  render(){
    return <Board ></Board>
  }
}

export default Games