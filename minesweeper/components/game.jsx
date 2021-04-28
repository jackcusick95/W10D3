import React from 'react';
import * as Minesweeper from './minesweeper';
import Board from './board'

class Game extends React.Component {
    constructor(props) {
        super(props);
        const newBoard = new Minesweeper.Board(5,4)
        this.state = {
            board : newBoard
        }
        this.updateGame = this.updateGame.bind(this)
    }

    updateGame(tile, boolean) {
        // debugger
        tile.explore();
        this.setState({
            board : this.state.board
        })
    }

    render() {
        return (
            <div className='game'>
                <Board board={this.state.board} updateGame = {this.updateGame} />
            </div>
        )
    }
}

export default Game;