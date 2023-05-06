function Movie (props) {
    const {
        Title: title,
        Year: year,
        imdbID:id,
        Type: type,
        Poster: poster
    } = props;

    return <div id={id} className="movie card">
                <div className="card-image">
                    {
                        poster === 'N/A' ? (
                            <img
                            className="activator"
                            src={`https://via.placeholder.com/300x400?text=${title}`}
                            />
                        ):
                        <img className="activator" src={poster}/>
                    }
                </div>
                <div className="card-content">
                    <span className="card-title activator">{title}</span>
                    <p>{year} <span className="right">{type}</span></p>
                </div>
        </div>
}

export {Movie};