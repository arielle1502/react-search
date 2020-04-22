import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


class Movie extends Component {
    componentDidMount(){
        this.props.getMovie(this.props.match.params.title);
    }

    static propTypes = {
        loading: PropTypes.bool,
        movie: PropTypes.object.isRequired,
        getMovie: PropTypes.func.isRequired
    }
    render() {
        const {
            title,
            popularity,
            poster_path,
            tagline,
            overview,
            id
        } = this.props.movie;

        const { loading } = this.props;
        if (loading) return <Spinner/>

    
        return (
            <Fragment> 
                
                <Link to='/' className='btn btn-dark btosearch ' style={{float: 'left', margin:'2rem'}} ><i class="fas fa-arrow-left"></i></Link>
                <div className='row'>
                    <div className='col-7'>
                <div className="card grid-2 movieimage">
                    <div className="all-center">
                    <h1>{title}</h1>
                        <h3 className="tagline">"{tagline}"</h3>
                        <img src= {"https://image.tmdb.org/t/p/w300/" + poster_path} alt="movie poster" style={{width:'100%', padding:'20px', overflow:'hidden'}} onError={(e)=>{e.target.onerror = null; e.target.src="https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png"}}/>
                        </div>
                    </div>
                    </div>
                    <div className='col-5'>
                    <div className='card grid-2 moviesumm'>
                        <Fragment>
                            <h2>Popularity:</h2>
                            <h3><i class="fas fa-star"></i>{popularity}<i class="fas fa-star"></i></h3>
                            <h2>Summary:</h2>
                            <h3 className="summary">{overview}</h3>
                            <a href={'https://www.themoviedb.org/movie/' + id} className='btn btn-dark ' style={{margin:'2rem'}} >Go to MovieDB Page</a>
                        </Fragment>
                    </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Movie
