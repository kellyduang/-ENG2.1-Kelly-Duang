import React from 'react';
import './App.css';
import Tile from './components/Tile';
//TODO: Remember to import components you use

function App(props:any) {
  return ( //TODO:  Add multiple Card components inside the <Tile> 
           //       Add several Item components to each <Card>
           //       (see the screenshot for the completed My TNT Exercise)
    <div>  
      <h1 className="App-header">My TNT</h1>
      <Tile >

      </Tile>
    </div>
    )
}

export default App;
