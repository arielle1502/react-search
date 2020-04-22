import React from 'react';
import {Link} from 'react-router-dom'



const MovieItem =(props) => {
    
    const {poster_path, title, release_date, id} = props.movie;
        return (
         <div className="card frontpage">
            <div>
                <h2>{title}</h2>
                <img src= {"https://image.tmdb.org/t/p/w300/" + poster_path} alt="movie poster" style={{width:'250px', padding:'20px'}} onError={(e)=>{e.target.onerror = null; e.target.src="https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png"}}/>
                 
                 <div className="date">
                 <h4 style={{textAlign: 'center'}}>Release Date:</h4>
                 <h5 style={{textAlign: 'center'}}>{release_date}</h5>
                 </div>
                 
            </div>
            <div>
                <Link to= {`/movie/${id}`} className="btn btn-dark btn-md my-1">More</Link>
            </div>
        </div>
        )
        
   
}

export default MovieItem
