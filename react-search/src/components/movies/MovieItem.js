import React from 'react';
import {Link} from 'react-router-dom'



const MovieItem =(props) => {
    
    const {poster_path, title, overview, id} = props.movie;
        return (
         <div className="card">
            <div>
                <img src= {"https://image.tmdb.org/t/p/w300/" + poster_path} alt="movie poster" style={{width:'200px', padding:'20px'}} onError={(e)=>{e.target.onerror = null; e.target.src="https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png"}}/>
                 <h1>{title}</h1>
                 <h5>{overview}</h5>
                 
            </div>
            <div>
                <Link to= {`/movie/${id}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
        )
        
   
}

export default MovieItem
