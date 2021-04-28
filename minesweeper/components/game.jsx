import React from 'react';
import Minesweeper, { Tile, Board } from './minesweeper';

class Game extends React.Component {
    constructor(props) {
        super(props);
        const newBoard = new Board(5,2)
        this.state = {
            board : newBoard.grid
        }
        this.updateGame = this.updateGame.bind(this)

       console.log(this.state.board)
    }

    updateGame() {

    }

    render() {
        return (
            <div className='board'>
                <ul>
                {this.state.board.map((el, idx) => {
                    debugger
                    return <li key={idx}>...</li>
                })}
                </ul>
                <span>
                {/* {this.updateGame} */}
                </span>
            </div>
            // <h1>hi</h1>
        )
    }
}

export default Game;