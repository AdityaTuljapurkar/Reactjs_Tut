import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"
function Home() {
  // creation of new state 
    const[searchQuery, setSearchQuery] = useState("");



  const movies = [
    { id: 1, title: "Jhon Wick", releaseDate: "2020" },
    { id: 2, title: "Jhon Wick 2", releaseDate: "2022" },
    { id: 3, title: "Jhon Wick 3", releaseDate: "2024" },
    { id: 4, title: "Iron Man", releaseDate: "2008" },
    { id: 5, title: "Thor 1", releaseDate: "2008" },
    { id: 6, title: "Iron Man 2", releaseDate: "2012" },
  ];



  const handelSearch = (e) => {
    e.preventDefault()
    
    alert(searchQuery)
    setSearchQuery("")
  };




  return (
    <div className="home">
      <form action="" onSubmit={handelSearch} className="search-form">
        <input
          type="text"
          placeholder="seach for movies ...."
          className="search-input"
          // adding dynamic change for states 
          value={searchQuery}
          //updating the state for the inpo=ut element
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button type="sumbit"  className="search -button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery)&& (<MovieCard movie={movie} key={movie.id} />)
        ))}
      </div>
    </div>
  );
}

export default Home;
