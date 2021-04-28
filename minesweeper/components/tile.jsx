import React from 'react';
import * as Minesweeper from './minesweeper'


class Tile extends React.Component {
    constructor(props) {
 
        super(props);
 
        // don't keep track of local tile state, rather update whole board then rerender. would otherwise require many state changes at once vs just the board (using tile.explore())
        this.notBombed = this.notBombed.bind(this);

    }

    notBombed(e) {
        e.preventDefault();
    
        this.props.updateGame(this.props.tile)
    }


    render() {
        return (
            //if not explored then onClick notBombed => props.updateGame(pos, change)
            <span className="tile" onClick={this.notBombed}>
                {this.props.tile.explored ? '' : "T"}
                
            </span>
        )
    }
}

export default Tile; 

// on click, if revealed === true && bombed === false
// show a number of bombs in adjacent tiles