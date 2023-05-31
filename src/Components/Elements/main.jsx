import React from "react";
import { Movies } from "../Content/Movies";
import { Preloader } from "../Content/Preloader";

class Main extends React.Component{
    state = {
        movies: []
    };
    componentDidMount(){
        fetch('https://www.omdbapi.com/?apikey=c8198fff&s=spider man&type=movie')
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false}))
    }
    searchMovies = (str) => {
        fetch(`https://www.omdbapi.com/?apikey=c8198fff&s=${str}`)
        .then((response) => response.json())
        .then((data) => this.setState({movies: data.search, loading: false}));
    }
    render(){
        const { movies, loading } = this.state;

        return <main className="Content">
            {loading ? <Preloader/> : <Movies movies={this.state.movies}/>}
        </main>
    }
}

export { Main };