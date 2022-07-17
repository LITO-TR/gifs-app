import './App.css';
import React,{useEffect, useState} from 'react';
import getGifs from './getGifs';

function App() {
  const [gifs, setGifs]=useState([])

  useEffect(function (){
   getGifs({}).then(gifs => setGifs(gifs))
  },[])

  return (
    <div className="App">
     <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
      </section>
    </div>
  
  );
}

export default App;
