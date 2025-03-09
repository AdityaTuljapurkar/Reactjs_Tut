import MovieCard from "../components/MovieCard"
function Home(){
    const movies = [ 
        {id:1,title:"Jhon Wick",releaseDate: "2020"},
        {id:2,title:"Jhon Wick 2",releaseDate: "2022"},
        {id:3,title:"Jhon Wick 3",releaseDate: "2024"},
        {id:4,title:"Iron Man",releaseDate: "2008"},
    ]
    return (<div className="home">
        <div className="movies-grid" >
            {movies.map(movie =><MovieCard movie={movie} key={movie.id} ></MovieCard> )}
        </div>
    </div>);
}

export default Home