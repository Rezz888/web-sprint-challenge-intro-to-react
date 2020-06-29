import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = useState([]);
const [url] = useState(['https://rickandmortyapi.com/api/character/?page=2']);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=> {
    axios.get(url)
    .then((response)=> {
      console.log(response.data.results)

      setData(response.data.results)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [url])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map((character)=> {
        return (
        <Character
        image={character.image}
        name={character.name}
        gender={character.gender}
        species={character.species}
        type={character.type}
        status={character.status}
        />

        )
      })}
    </div>
  );
}

export default App;
