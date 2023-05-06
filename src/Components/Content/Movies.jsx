import { Movie } from "../Movie/Movie";

function Movies(props){
    const {movies = [] } = props;

    return(
        <div className="Content Movies">
        {movies.length ? (movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)) : (<h4>Not found</h4>)}
        
    </div>
    ) 
}

export {Movies};