import React from "react";
import { Movies } from "./Content/Movies";
import { Search } from "./Content/Search";
import { Preloader } from "./Content/Preloader";

class Main extends React.Component {
    state = {
    movies: [],
    loading: true,
    };
    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=c8198fff&s=spider-man')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    searchMovies = (str, type = "all") => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=c8198fff&s=${str}${        
                type !== "all" ? `&type=${type}` : "" 
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false}));
        
    };

    render() {
        const { movies, loading } = this.state;

        return(
            <main className="container content">
                < Search searchMovies={this.searchMovies }/>
                {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
            </main>
        ); 
    }
}
export {Main};

