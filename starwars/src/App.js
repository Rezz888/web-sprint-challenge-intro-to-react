import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Pagination from './components/Pagination';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  

const [posts, setPosts] = useState([]);
const [url] = useState(['https://rickandmortyapi.com/api/character/?page=1']);

const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(3);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=> {
    axios.get(url)
    .then((response)=> {
      // console.log(response.data.results)

      setPosts(response.data.results)
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [url])

  // console.log(posts)

  // Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Chaange page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      <Pagination 
      postsPerPage={postsPerPage} 
      totalPosts={posts.length}
      paginate ={paginate}
      />
      {currentPosts.map((character)=> {
        return (
        <div>
          
        <Character
        key={character.id}
        image={character.image}
        name={character.name}
        gender={character.gender}
        species={character.species}
        type={character.type}
        status={character.status}
        />
        </div>
        

        )
      })}
    </div>
  );
}

export default App;
