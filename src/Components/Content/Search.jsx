import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
                () => ({ type: event.target.dataset.type}),
                () => {
                    this.props.searchMovies(this.state.search, this.state.type);
                }
        );
    };


    render(){
        return <div className=" Content row">
            <div className="column">
                <div className="inputField">
                    <input
                        className="validate"
                        placeholder="поиск"
                        type='search'
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value})}
                        onKeyDown={this.handleKey}
                        />
                </div>
                <div className="filters">
                    <div className="filterColumn">
                        <label>
                            <input className="filterSearch"
                            name='type'
                            type='radio'
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                            />
                            <span className="Filters">Все</span>
                        </label>
                        <label>
                        <input className="filterSearch"
                            name='type'
                            type='radio'
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                            />
                            <span className="Filters">Фильмы</span>
                        </label>
                    </div>
                    <div className="filterColumn  filterColumn_Right">
                        <label>
                        <input className="filterSearch"
                            name='type'
                            type='radio'
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                            />
                            <span className="Filters">Сериалы</span>
                        </label>
                        <label>
                        <input className="filterSearch"
                            name='type'
                            type='radio'
                            data-type="game"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'game'}
                            />                        
                            <span className="Filters">Игры</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    }
}
export {Search};

