import React from 'react';
import propTypes from 'prop-types';


function Movie({year, title, summary, poster, genres}){
    return (
    <div className='movie'>
        <img src={poster} alt={title} title={title}/>
        <div className='movie_data'>
            <h3 className='movie_title'>{title}</h3>
            <h5 className='movie_year'>{year}</h5>
            <ul className='movie_genres'>
                {genres.map((genres, index) => (
                    <li key={index} className='genres_genre'>{genres}</li>
                ))}
            </ul>
            <p className='movie_summary'>{summary.slice(0,140)}...</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;
