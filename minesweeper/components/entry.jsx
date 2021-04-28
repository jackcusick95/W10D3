import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    console.log(root);
    const hello = React.createElement('h1', null, ["hello from React!"]);


    ReactDOM.render(<App />, root)
})


// You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports