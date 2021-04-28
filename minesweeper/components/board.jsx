import React from 'react'
import Tile from './tile'

class Board extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    
    render() {
        return (
            <div className = 'board'>
            {this.props.board.grid.map((row, idx) => {
                // debugger
                return <div className='row' key={idx}>{row.map((tile, idx) => {
                    return <Tile tile={tile} updateGame={this.props.updateGame} key={idx} />;
                    
                })}</div>
            })}
        </div>
        )
    }
}

export default Board;