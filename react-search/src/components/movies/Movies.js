import React from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Movies =({movies, loading}) => {
    if(loading){
        return <Spinner/>
    }else{
        return (
            <div style={userStyle}>
                {movies.map(movie =>(
                    <MovieItem key={movie.id}  movie={movie}/>
                ))}
            </div>
        )
    }
        
    }

Movies.propTypes={
    movies: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(2, 1fr)',
    gridGap:'1rem',
    paddingTop: '3rem',
   
}
export default Movies
