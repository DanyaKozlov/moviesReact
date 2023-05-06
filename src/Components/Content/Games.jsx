import { Game } from "../Movie/Game";

function Games(props){
    const {games} = props;

    return (
        <div className="Movies content">
            {games.length ? (
                games.map((movie)=> <Game key = {movie.imdbID} {...movie} />)
            ) : (
                <h4> Not Found </h4>
            )}   
        </div>
    )
}

export {Games};