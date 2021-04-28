import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';
// import Minesweeper, { Tile, Board } from './minesweeper';


const App = (props) => {
    return (
        <div className='app'>      
        <h1>Testing</h1>
            <h1>
                <Game />
            </h1>
        </div>
    )
}

export default App;